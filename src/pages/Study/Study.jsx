import React from 'react';

import Navbar from '../../components/Navbar/Navbar'
import StudyButton from '../../components/StudyButton/StudyButton';

import '../../App.css';

function Study() {
    return (
        <>
        <div className='container'>
            <Navbar />
            <div className='main_container'>
                <div className='centered-div'>
                    <h1 className='header'>Study</h1>
                    <p className='description'>
                        Before studying, select the hiragana characters you want to study by clicking <span><StudyButton type='HIRAGANA' /></span>
                        <br></br>
                        Select the katakana characters you want to study by clicking <span><StudyButton type='KATAKANA' /></span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Study;