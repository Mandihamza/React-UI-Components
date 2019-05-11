import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <a href="https://reactjs.org/">
        <div className='card-content'>
            <h1>Get Started with React</h1>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application</p>
            <a href="https://reactjs.org/" className="link">reactjs.org</a>
        </div>
        </a>


        
    );
};

export default CardContent;
