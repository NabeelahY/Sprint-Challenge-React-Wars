import React from 'react';

const Button = ({ nav, text }) => {
    return (
        <button className='navBtn' onClick = {nav}>{text}</button>
    )
}

export default Button;
