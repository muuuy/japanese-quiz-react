import React, { useEffect, useState } from 'react';
import { toRomaji, toHiragana } from 'wanakana'; //CONVERT FROM ROMAJI TO HRIAGANA

import Navbar from '../../components/Navbar/Navbar'
import StudyButton from '../../components/StudyButton/StudyButton';

import '../../App.css';
import styles from './Study.module.css';

function Study() {
    const [curQuestion, setCurQuestion] = useState(''); //* Set current question
    const [userInput, setUserInput] = useState(''); //* User input
    const [charList, setCharList] = useState([]);
    const [visitedList, setVisitedList] = useState([]);
    const [wrongAnswer, setWrongAnswer] = useState(false);
    const [answerCount, setAnswerCount] = useState(0);
    const [showAnswer, setShowAnswer] = useState();
    const [questionStyle, setQuestionStyle] = useState(styles.curQ)
    
    const finishedMsg = 'No more characters left in the list. Press ENTER to restart the quiz.';

    useEffect(() => {
        let chars = localStorage.getItem('savedChars'); //* Get chars from local storage
        if(chars) { setCharList(JSON.parse(chars)); }
    }, []);

    useEffect(() => {
        genRandQuestion();
    }, [charList]);
    
    const genRandQuestion = () => {
        if(charList.length === 0) {
            setQuestionStyle(styles.empty);
            setCurQuestion(finishedMsg);
            return;
        }
        
        if(questionStyle === styles.empty) { setQuestionStyle(styles.curQ); }

        let curIndex = Math.floor(Math.random() * charList.length);
        setCurQuestion(charList[curIndex]);
    }

    const updateUserInput = (e) => {
        setUserInput(e.target.value);
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            checkAnswer();
        }   
    }

    const checkAnswer = () => { //Check if the user input matches the current question

        if(userInput === toRomaji(curQuestion) || curQuestion === finishedMsg) { //CORRECT
            setWrongAnswer(false);
            setVisitedList(visitedList => [...visitedList, curQuestion]);
            setCharList(charList => charList.filter((c) => c !== curQuestion));
            setUserInput('');
            setAnswerCount(0);
            setShowAnswer()

            if(charList.length === 0) {
                setCharList([...visitedList]);
                setVisitedList([]);
            }            

            genRandQuestion();
        } else { //INCORRECT
            setWrongAnswer(true);
            if(answerCount === 4) {
                setShowAnswer(<p className={styles.answer}>{toRomaji(curQuestion)}</p>)
            } else {
                setAnswerCount(answerCount => answerCount + 1);
            }
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
                        <p className={questionStyle}>{curQuestion}</p>
                        {showAnswer}
                        <input className={`${styles.uInput} ${wrongAnswer ? styles.wrong : ''}`} onKeyDown={handleKeyPress} onChange={updateUserInput} value={userInput} type='text' name='user-input' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Study;