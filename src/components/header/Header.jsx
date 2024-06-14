import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import './headerRes.css';
import SearchBar from './search-bar';


function  Navbar(props) {
    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="col3 df aic">
                        <div class="x-menu">
                            <div class="bar"></div>
                        </div>

                        <Link to={'/'}>
                            <div className="logo"></div>
                        </Link>

                    </div>
                    <div className="col4 ">
                        <SearchBar />
                    </div>
                    <div className="col3 logining">
                        <div className="acc">
                            <div className="create"></div>
                            <div className="notifey"></div>
                            <div className="accaunt"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Navbar;