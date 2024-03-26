import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { hiraganaChar } from './HiraganaData';
import { katakanaChar } from './KatakanaData';

const CharacterForm = ({formType}) => {
    
    // localStorage.clear();

    let checked = localStorage.getItem('checkedBoxes'); //POPULATE CHECKED BOXES - CONTAINS KEY OF CHECKED BOXES
    checked = checked ? JSON.parse(checked) : [];

    let saved = localStorage.getItem('savedChars'); //GET CHARACTERS FROM LOCAL STORAGE
    saved = saved ? JSON.parse(saved) : []

    const [checkedBoxes, setCheckedBoxes] = useState(checked);
    const [selectedChars, setSelectedChars] = useState(saved); //USE STATE - CHECKBOXES (CHECKED)

    const handleCheckboxChange = (e) => {
        
        let key = e.target.dataset.key;

        let charList = e.target.value.split("");
        charList = charList.filter((c) => c !== '・');

        if(e.target.checked) { //CHECKED
            setCheckedBoxes(checkedBoxes => [...checkedBoxes, key])
            setSelectedChars(selectedChars => [...selectedChars, ...charList]);
        } else { //UNCHECKED
            charList.forEach(c => {
                setSelectedChars(selectedChars => selectedChars.filter(ch => ch !== c))
            })

            setCheckedBoxes(checkedBoxes => checkedBoxes.filter(e => e !== key))
        }

    }

    useEffect(() => { //ADD TO LOCAL STORAGE
        localStorage.setItem('savedChars', JSON.stringify(selectedChars));
        localStorage.setItem('checkedBoxes', JSON.stringify(checkedBoxes));
    }, [checkedBoxes, selectedChars])

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
                            checkedBoxes.includes(c.id) ? (
                                <input data-key={c.id} onChange={handleCheckboxChange} type='checkbox' className='char-checkbox' value={c.characters} name='char-checkbox' defaultChecked={true} />
                            ) : (
                                <input data-key={c.id} onChange={handleCheckboxChange} type='checkbox' className='char-checkbox' value={c.characters} name='char-checkbox' defaultChecked={false} />
                            )
                        }

                    </label>
                </div>
            )
        })
    }

    let charactersToMap = formType === 'hiragana' ? hiraganaChar : katakanaChar;
    
    return (
        <>
            <div className='char-container'>{popChars(charactersToMap)}</div>
        </>
    )
}

export default CharacterForm;