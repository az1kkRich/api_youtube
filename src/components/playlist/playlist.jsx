import { Card, CardMedia } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import '../main/main.css';
import '../main/mainRes.css';

function Playlist({ video }) {
    return (
        <>
            <Link to={`/playlist/${ video.id.playlistId }`}>
                <img src={video?.snippet?.thumbnails?.high?.url} style={{width: '100%'}} alt={video?.snippet?.title} className='card_img playlist_img' />
            </Link>
            <div className="card_info">
                <div className="infoc df">
                    <Stack direction="row" spacing={1}>
                        <Avatar src={video?.snippet?.thumbnails?.default?.url} />
                    </Stack>
                    <div className="cardparas">
                        <Link to={`/video/${ video.id.playlistId }`}>
                            <h1 className='cardh1'> {video?.snippet?.title.slice(0, 50)}... </h1>
                        </Link>
                        <p className='cardp'>{video?.snippet?.channelTitle}</p>
                        
                        <p className='cardp1'> {moment(video?.snippet?.publishedAt).fromNow()}</p>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Playlist;