import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import StudyButton from '../../components/StudyButton/StudyButton';

import styles from './Home.module.css'
import ShrineImage from '/japanese-shrine.jpeg';

function Home() {
    return (
        <>
        <div className='container'>
            <Navbar />
            <div className='main_container'>
                <div className='centered-div'>
                    <div className={styles.homeDesc}>
                        <div className={styles.leftDesc}>
                            <h1 className='header'>Home</h1>
                            <p className={styles.description}>
                                A quiz that tests your hiragana and katakana knowedlge.
                                <br></br>
                                Click <StudyButton type='HIRAGANA' /> and/or <StudyButton type='KATAKANA' /> and choose which characters you would like to study.
                                <br></br>
                                <br></br>
                                Then click <StudyButton /> in order to start the quiz.
                                <br></br>
                                Type in each characters rōmaji equivalent.
                                <br></br>
                                (e.g. あ → a)
                            </p>
                        </div>
                        <img src={ShrineImage} alt='Shrine Image' className={styles.shrineImage}></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home