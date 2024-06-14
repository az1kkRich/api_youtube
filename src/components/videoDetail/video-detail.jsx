import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { ApiServices } from "../../services/api.services";
import './videodetail.css';
import moment from "moment";
import { Avatar, Stack } from "@mui/material";
import { FcLike } from 'react-icons/fc';
import { AiFillEye } from 'react-icons/ai';
import { RxStopwatch } from 'react-icons/rx';


function VideoDetail(props) {
    const [videoDetail, setVideoDetail] = useState(null)
    const { id } = useParams() 

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiServices.fetching(`videos?part=snippet,statistics&id=${id}`)
                setVideoDetail(data.items[0])
            } catch (error) {
                console.log(error);
            }

        }


        getData()
    }, [id])


    console.log(videoDetail);
    return (
        <>
            <div className="container">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls />
                <div className="discriptions">
                    <h1 className="videoh1">{videoDetail?.snippet?.title}</h1>
                    <div className="views">
                        <div className="chanel">
                            <Stack direction="row" spacing={1}>
                                <Avatar src={videoDetail?.snippet?.thumbnails?.default?.url} />
                            </Stack>
                            <div className="cardparas"> 
                                <p className='cardp'>{videoDetail?.snippet?.channelTitle}</p>
                            </div>
                        </div>
                        <div className="likes">
                            <div>
                                <FcLike /> <span className="count"> {videoDetail?.statistics?.likeCount}</span> 
                            </div>
                            <div>
                                <AiFillEye color="green" /><span>{videoDetail?.statistics?.likeCount}</span>
                            </div>
                            <div>
                                <RxStopwatch color="blue" /><span>{moment(videoDetail?.snippet?.publishedAt).fromNow()}</span>
                            </div>
                        </div>

                    </div>
                    <div className="minides">
                        {videoDetail?.snippet?.localized?.description}
                        <br />

                        {videoDetail?.snippet?.tags?.length
                            ?  videoDetail?.snippet?.tags.map((item, index) => (
                                <>
                                    <p className="tag" key={index}>#{item}</p>
                                </>
                            ))
                            :<p className="tag" >#67 </p>
                        }

                    </div>

                </div>

            </div>
        </>
    );
}

export default VideoDetail;