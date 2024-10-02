import { useParams } from 'react-router-dom';
import '../main/main.css'
import './search.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { ApiServices } from '../../services/api.services';
import { Video } from '..';

function Search(props) {
    const [videos, setVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiServices.fetching(`search?part=snippet&q=${id}`)
                setVideos(data?.items)
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
            <p className='selected' >
                {id} videolari uchun qidiruv natijalari
            </p>
            <div className="column aic">
                <Video videos={videos} />
            </div>






            {/* <div className="offBox">
            <div className="searchbox">
                <div className="cardsearch">
                    <div className="card_img"></div>
                    <div className="card_info">
                        <div className="infoc df">
                            <Stack direction="row" spacing={1}>
                                <Avatar src="/broken-image.jpg" />
                            </Stack>
                            <div className="cardparas">
                                <h1 className='cardh1'>Sweden Mountains. Amazing!!! Stockholm</h1>
                                <p className='cardp'>Charlie Puth</p>
                                <p className='cardp1'>1.2M views • 10 days ago</p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="cardsearch">
                    <div className="card_img"></div>
                    <div className="card_info">
                        <div className="infoc df">
                            <Stack direction="row" spacing={1}>
                                <Avatar src="/broken-image.jpg" />
                            </Stack>
                            <div className="cardparas">
                                <h1 className='cardh1'>Sweden Mountains. Amazing!!! Stockholm</h1>
                                <p className='cardp'>Charlie Puth</p>
                                <p className='cardp1'>1.2M views • 10 days ago</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div> */}


        </>
    );
}

export default Search;