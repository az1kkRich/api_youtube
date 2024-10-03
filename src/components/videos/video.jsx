import React from 'react';
import { VideoCard , ChanelCard, Loader, Playlist } from '../';
import '../main/main.css'
import '../main/mainRes.css'

function Search({ videos }) {
    if (!videos.length) return <Loader />
    return (
        <>
                {videos.map(item => (
                    
                        <div className='cardyt' key={item.id}>
                            {item.id.videoId && <VideoCard video={item} />}
                            {item.id.playlistId && <Playlist video={item} />}
                            {item.id.channelId && <ChanelCard video={item} />}
                        </div>
                    
                ))}
                {/* <VideoCard video={videos} /> */}


        </>
    );
}

export default Search;