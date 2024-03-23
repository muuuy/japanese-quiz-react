import React from 'react';

import Navbar from '../../components/Navbar/Navbar'
import StudyButton from '../../components/StudyButton/StudyButton';
import HiraganaButton from '../../components/HiraganaButton/HiraganaButton';
import KatakanaButton from '../../components/KatakanaButton/KatakanaButton';

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
                        Before studying, select the hiragana characters you want to study by clicking <span><HiraganaButton /></span>
                        <br></br>
                        Select the katakana characters you want to study by clicking <span><KatakanaButton /></span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Study;