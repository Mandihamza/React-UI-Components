import React from 'react';
import './App.css';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import WideButton from './components/ButtonComponents/WideButton.js'


const App = () => {
  return (
    <div className='app-container'>
    
    <div className='row text-content'>
      <CalculatorDisplay />
    </div>
    
    <div className='row'>
      <WideButton text='clear'/>
      <ActionButton text='&#247;'/>
    </div>
    
    <div className='row'>
      <NumberButton text='7' />
      <NumberButton text='8' />
      <NumberButton text='9' />
      <ActionButton text='X'/>
    </div>
    
    <div className='row'>
      <NumberButton text='4' />
      <NumberButton text='5' />
      <NumberButton text='6' />
      <ActionButton text='-'/>

    </div>
    
    <div className='row'>
      <NumberButton text='1' />
      <NumberButton text='2' />
      <NumberButton text='3' />
    
      <ActionButton text='+'/>
    </div>
    
    <div className='row'>
      <WideButton text='0' />
      <ActionButton text='='/>
    </div>
    </div>
  );
};

export default App;
