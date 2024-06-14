
import { Button, ButtonBase, ButtonGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Video } from '..';
import { ApiServices } from '../../services/api.services';
import Themes from './Themes';



function Main(props) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedButton, setSelectedButton] = useState(false)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await ApiServices.fetching(`search?part=snippet&q=${selectedCategory}`)
                setVideos(data.items)
                console.log(data);
            }
            catch (error) {
                console.log(error);
            }
        }

        getData();
        // ApiServices.fetching('search').then(data => console.log(data))
    }, [selectedCategory])
    const selectedCategoryHandler = category => setSelectedCategory(category)
    return (
        <>
            <div className="them">
                <Themes
                    selectedCategoryHandler={selectedCategoryHandler}
                    selectedCategory={selectedCategory}
                    selectedButton={selectedButton}
                />
                <p className='selected' >
                    {selectedCategory} videolar
                </p>
            </div>
            <div className="video_box">
                {videos.length

                    ? <Video videos={videos} />
                    : <div className='error'>
                    <h2 style={{color: '#fff', fontWeight: '300'}}> Serverdan javob olinmoqda....  </h2>
                    <h5 style={{color: '#fff', fontSize: '13px', marginTop: '1rem', fontWeight: '300'}}>Siz  Internetga ulanmagansiz shekilli. (´。＿。｀)</h5>
                    <a href="/" style={{textDecoration: 'none'}}>
                        <Button sx={{'margin-top': '1rem', 'border': '.5px solid rgb(110, 110, 110)'}}>Qayta yuklamoq</Button>
                    </a>
                </div>

                }
            </div>

        </>
    );
}

export default Main;