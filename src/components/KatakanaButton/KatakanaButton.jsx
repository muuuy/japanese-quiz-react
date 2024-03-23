import React from 'react';
import { NavLink } from 'react-router-dom';

const KatakanaButton = () => {

    return (
        <button className='desc-button' style={{backgroundColor: "#8338ec"}}>
            <NavLink to='/katakana' style={{color: "white"}}>KATAKANA</NavLink>
        </button>
    )
}

export default KatakanaButton;