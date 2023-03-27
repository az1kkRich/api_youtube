import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

function ChanelCard({ video }) {
    return (
        <>
            <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <CardContent >

                    <img
                        src={video?.snippet?.thumbnails?.high?.url}
                        style={{ borderRadius: '50%', border: '1px solid #000' }}
                        alt={video?.snippet?.title} className='card_img' />



                    <div className="tac">
                        <span style={{ color: '#fff', textAlign: 'center' }}>{video?.snippet?.title}</span>  {' '}
                        <CheckCircle sx={{ color: 'yellow', fontSize: '16px' }} />
                    </div>


                    <Typography variant='p' >
                        {video?.statistics?.subscriberCount && (
                            <Typography>
                                {parseInt(video?.statistics?.subscriberCount).toLocaleString('en-US')} Subscriber
                            </Typography>
                        )}
                    </Typography>
                </CardContent>

            </Box>
        </>
    );
}

export default ChanelCard;