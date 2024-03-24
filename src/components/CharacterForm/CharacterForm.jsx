import React from 'react';
import { v4 as uuid } from 'uuid';

import { hiraganaChar } from './HiraganaData';
import { katakanaChar } from './KatakanaData';

const CharacterForm = ({type='hiragana'}) => {
    
    let popChars = (mapChar) => {
        return mapChar.map((character) => {
            let charList = character.characters.split("");
            console.table(charList);

            return (
                <div className='checkbox-container'>
                    <label key={character.id}>
                        {charList.map((c) => (
                            <p key={uuid()}>{c}</p>
                        ))}

                        <input type='checkbox' className='char-checkbox' value={character.characters} />
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