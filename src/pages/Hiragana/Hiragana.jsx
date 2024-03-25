import React from 'react';

import Navbar from '../../components/Navbar/Navbar'
import StudyButton from '../../components/StudyButton/StudyButton';
import CharacterForm from '../../components/CharacterForm/CharacterForm';

import '../../App.css';

function Hiragana() {
    return (
       <>
       <div className='container'>
            <Navbar />
            <div className='main_container'>
                <div className='centered-div'>
                    <h1 className='header'>Hiragana</h1>
                    <p className='description'>
                        Select the hiragana characters you want to study, then click <span><StudyButton type='STUDY' /></span>
                    </p>
                    <CharacterForm formType='hiragana' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Hiragana;