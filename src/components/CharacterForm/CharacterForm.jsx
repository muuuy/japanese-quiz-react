import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { hiraganaChar } from './HiraganaData';
import { katakanaChar } from './KatakanaData';

const CharacterForm = ({type='hiragana'}) => {
    
    let checked = localStorage.getItem('checkedBoxes'); //POPULATE CHECKED BOXES - CONTAINS KEY OF CHECKED BOXES
    checked === null ? checked = [] : checked = JSON.parse(checked)


    const [selectedChars, setSelectedChars] = useState([]); //USE STATE - CHECKBOXES (CHECKED)

    let temp = localStorage.getItem('savedChars'); //GET CHARACTERS FROM LOCAL STORAGE
    temp = JSON.parse(temp); //TODO: Need to add the localstorage to selectedChars

    const handleCheckboxChange = (e) => {
        
        let charList = e.target.value.split("");
        charList = charList.filter((c) => c !== '・');

        if(e.target.checked) { //CHECKED
            checked.push(e.target.key);
            setSelectedChars(selectedChars => [...selectedChars, ...charList]);
        } else { //UNCHECKED
            charList.forEach(c => {
                setSelectedChars(selectedChars => selectedChars.filter(ch => ch !== c))
            })
        }
    }

    useEffect(() => { //ADD TO LOCAL STORAGE
        console.table(selectedChars);
        localStorage.setItem('checkedBoxes', JSON.stringify(checked)); //TODO: Figure out why it isnt saving to local storage
        localStorage.setItem('savedChars', JSON.stringify(selectedChars));
    }, [checked, selectedChars])

    let popChars = (mapChar) => {
        return mapChar.map((c) => {
            let charList = c.characters.split("");

            return (
                <div key={c.id} className='checkbox-container'>
                    <label key={c.id}>
                        <div key={c.id} className='para-container'>
                            {charList.map((ch) => {
                                if(ch === '・') {
                                    return <br key={uuid()}></br>
                                }
                                return <p key={uuid()}>{ch}</p>
                            })}
                        </div>

                        { //IF ALREADY CHECKED OR NOT
                            checked !== null && checked.includes(c.id) ? (
                                <input onChange={handleCheckboxChange} type='checkbox' className='char-checkbox' value={c.characters} name='char-checkbox' checked />
                             ) : (
                                <input onChange={handleCheckboxChange} type='checkbox' className='char-checkbox' value={c.characters} name='char-checkbox' />
                             )
                        }
                    </label>
                </div>
            )
        })
    }

    const charactersToMap = type === 'hiragana' ? hiraganaChar : katakanaChar;
    
    return (
        <>
            <div className='char-container'>{popChars(charactersToMap)}</div>
        </>
    )
}

export default CharacterForm;