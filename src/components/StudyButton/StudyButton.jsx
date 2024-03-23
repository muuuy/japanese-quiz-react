import React from 'react';
import { NavLink } from 'react-router-dom';

const StudyButton = ({type='STUDY'}) => {

    const setBackground = () => {
        if(type === 'HIRAGANA') {
            return "#3a86ff";
        } else if(type === 'KATAKANA') {
            return "#8338ec";
        }
        
        return '#ff006e';
    }

    const background = setBackground();

    return (
        <button className='desc-button' style={{backgroundColor: background}}>
            <NavLink to='/study' style={{color: "white"}}>{type}</NavLink>
        </button>
    )
}

export default StudyButton;