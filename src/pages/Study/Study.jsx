//TODO: Create a list of all answers

import React, { useEffect, useState } from 'react';

import Navbar from '../../components/Navbar/Navbar'
import StudyButton from '../../components/StudyButton/StudyButton';

import '../../App.css';
import styles from './Study.module.css';

function Study() {
    const [curQuestion, setCurQuestion] = useState(''); //* Set current question
    const [userInput, setUserInput] = useState(''); //* User input
    
    let charList = localStorage.getItem('savedChars'); //* Get chars from local storage
    charList = charList ? JSON.parse(charList) : [];

    let visitedList = []; // *Questions that have answered correctly
    
    useEffect(() => {
        let curIndex = Math.floor(Math.random() * charList.length);
        setCurQuestion(charList[curIndex]);
    }, []); //!HAVE TO SWITCH [] w/ [visitedList]
    
    
    const updateUserInput = (e) => {
        setUserInput(e.target.value);
        console.log(userInput)
        console.log('value: ' + e.target.value);
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            checkAnswer();
        }
    }

    const checkAnswer = () => { //Check if the user input matches the current question
        if(userInput === curQuestion.question) {
            // move to next question
            //display small message
            //remove question from original array
            //add question to new array
            console.log('correct');
        } else {
            console.log('incorrect');
        }
    }

    return (
        <>
        <div className='container'>
            <Navbar />
            <div className='main_container'>
                <div className='centered-div'>
                    <h1 className='header' style={{color: "#ff006e"}}>Study</h1>
                    <p className='description'>
                        Before studying, select the hiragana characters you want to study by clicking <span><StudyButton type='HIRAGANA' /></span>
                        <br></br>
                        Select the katakana characters you want to study by clicking <span><StudyButton type='KATAKANA' /></span>
                    </p>
                    <div className={styles.studyContainer}>
                        <p className={styles.curQ}>{curQuestion}</p>
                        <input className={styles.uInput} onKeyDown={handleKeyPress} onChange={updateUserInput} value={userInput} type='text' name='user-input' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Study;