import React from 'react';
import './Button.css';

const NumberButton = props => {
    return (
        <button className='buttonStyle'>{props.text}</button>
    );
};

export default NumberButton;
