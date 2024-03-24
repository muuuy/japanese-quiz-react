import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { hiraganaChar } from './HiraganaData';
import { katakanaChar } from './KatakanaData';

const CharacterForm = ({type='hiragana'}) => {
    
    const [selectedChars, setSelectedChars] = useState([]);
    const handleCheckboxChange = (e) => {
        
        let charList = e.target.value.split("");
        charList = charList.filter((c) => c !== '・');

        if(e.target.checked) { //CHECKED
            setSelectedChars(selectedChars => [...selectedChars, ...charList]);
        } else { //UNCHECKED
            charList.forEach(c => {
                setSelectedChars(selectedChars => selectedChars.filter(ch => ch !== c))
            })
        }
    }

    useEffect(() => {
        console.table(selectedChars);
    }, [selectedChars])

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

                        <input onClick={handleCheckboxChange} type='checkbox' className='char-checkbox' value={c.characters} name='char-checkbox' />
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