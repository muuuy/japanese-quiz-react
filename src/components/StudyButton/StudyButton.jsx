import React from 'react';
import { NavLink } from 'react-router-dom';

const StudyButton = (type) => {

    return (
        <button className='desc-button' style={{backgroundColor: "#ff006e"}}>
            <NavLink to='/study' style={{color: "white"}}>{test}</NavLink>
        </button>
    )
}

export default StudyButton;