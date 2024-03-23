import React from 'react';
import { NavLink } from 'react-router-dom';

const HiraganaButton = () => {

    return (
        <button className='desc-button' style={{backgroundColor: "#3a86ff"}}>
            <NavLink to='/hiragana' style={{color: "white"}}>HIRAGANA</NavLink>
        </button>
    )
}

export default HiraganaButton;