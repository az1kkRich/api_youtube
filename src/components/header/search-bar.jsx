import { IconButton, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs'
import './header.css';
import './headerRes.css';


function SearchBar(props) {
    const navigate = useNavigate()
    const [value, setValue] = useState('')

    const changeSlug = e => {
        e.preventDefault()
        if (value) {
            navigate(`search/${value}`)
        }
    }
    return (
        <>

            <Paper
                onSubmit={changeSlug}
                component={'form'}
                sx={{background: '#000', display: 'flex'}}
            >
                
                <input
                    onChange={e => setValue(e.target.value)}
                    value={value} 
                    type="search"
                    placeholder='Qidirish'
                    className='search-input'    
                />

                <div className="iconsearch">
                    <IconButton type='submit'>
                        <BsSearch color='#fff' size={'16px'} />
                    </IconButton>

                </div>
                
                
            </Paper>

        </>
    );
}

export default SearchBar;