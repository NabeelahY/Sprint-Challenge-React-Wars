import React from 'react';
import './StarWars.css';


const StarWarChar = ({ name, birth, gender, height, skin }) => {
    return (
        <li>
            <div className='starwar-char'>
            <h4>{ name }'s Bio</h4>
            <p>Birth: { birth }</p>
            <p>Gender: { gender }</p>
            <p>Height: { height }</p>
            <p>Skin color: { skin }</p>
            </div>
        </li>
    )
}

export default StarWarChar;
