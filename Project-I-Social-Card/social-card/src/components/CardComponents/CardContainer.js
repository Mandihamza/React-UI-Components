import React from 'react';
import './Card.css';
import CardContent from './CardContent'
import CardBanner from './CardBanner'

const CardContainer = () => {
    return (
        <div className='card-container'>
        <a className='card-link' href="http://google.com">
            <CardBanner />
            <CardContent />
        </a>

        </div>
    );
};

export default CardContainer;
