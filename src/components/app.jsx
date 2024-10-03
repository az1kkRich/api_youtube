import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Header, Video, Search, LeftNavbar, VideoDetail } from './';
import PlaylistCard from './playlist/playlistCard';

function App(props) {
    return (
        <>
            <Header />
            <div className="container">
                <div className="df">
                    <div className="left_navbar mt-5">
                        <LeftNavbar />
                    </div>
                    <div className="body_content mt-5">
                        <Routes>
                            <Route path='/' element={<Main />} />
                            <Route path='/video/:id' element={<VideoDetail />} />
                            <Route path='/playlist/:id' element={<PlaylistCard />} />
                            <Route path='/search/:id' element={<Search />} />
                        </Routes>
                    </div>
                </div>
            </div>

        </>
    );
}

export default App;