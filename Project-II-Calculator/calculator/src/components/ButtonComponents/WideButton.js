import React from 'react';
import './Button.css';

const WideButton = props => {
    return (
        <button className="wide-button"> {props.text} </button>
    );
};

export default WideButton;