import React from 'react';
import './StarWars.css';


const StarWarChar = ({ char }) => {
    return (
        <li>
            <div className='starwar-char'>{ char }</div>
        </li>
    )
}

export default StarWarChar;
