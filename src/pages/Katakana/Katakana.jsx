import React from 'react';

import Navbar from '../../components/Navbar/Navbar'
import StudyButton from '../../components/StudyButton/StudyButton';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

import '../../App.css';

function Katakana() {
    return (
        <>
        <div className='container'>
            <Navbar />
            <div className='main_container'>
                <div className='centered-div'>
                    <h1 className='header' style={{color: "#8338ec"}}>Katakana</h1>
                    <p className='description'>
                        Select the katakana characters you want to study, then click <span><StudyButton type='STUDY' /></span>
                    </p>
                    <CharacterForm type='katakana'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Katakana;