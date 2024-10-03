import { flexbox } from '@mui/system';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ApiServices } from '../../services/api.services';
import '../main/main.css';
import '../main/mainRes.css';

function PlaylistCard(props) {

    const [playlistDt, setPlaylistDt] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiServices.fetching(`playlistItems?part=snippet&playlistId=${id}`)
                console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }

        getData()
    }, [id])


    return (
        <>
            <div style={{display: "flex"}}>
                <iframe className='playlist' src={`https://www.youtube.com/embed/videoseries?list=${id}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </>
    );
}

export default PlaylistCard;