import React from 'react'
import exp from './data'
import './Calculator.css'
import { useState } from 'react';

export default function Calculator() {
  const [CalValue, setInput] = useState('');
  const [lastResult, setLastResult] = useState('');


  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
      setLastResult('');
    } else if(value === 'D') {
      setInput(CalValue.toString().slice(0, -1));
    }else if(value === '='){
      try {
        const evaluatedResult = (eval(CalValue).toString());
        setLastResult(evaluatedResult);
        setInput(evaluatedResult);
      } catch  {
        setInput('Error');
      }

    }else {
      if (lastResult && /[0-9]$/.test(value)) {
        setInput(value);
        setLastResult('');
      } else if (lastResult && /[\+\-\*\%\/]/.test(value)) {
        setInput(CalValue + value);
        setLastResult('');
      }else if (/[\+\-\*\%\/]$/.test(CalValue) && /[\+\-\*\%\/]/.test(value)) {
        if (value === '%') {
          setInput(CalValue.slice(0,-1,)+ '%');
        } else if (value === '+') {
          setInput(CalValue.slice(0,-1,)+ '+');
        } else if (value === '-') {
          setInput(CalValue.slice(0,-1,)+ '-');
        } else if (value === '/') {
          setInput(CalValue.slice(0,-1,)+ '/');
        } else if (value === '*') {
          setInput(CalValue.slice(0,-1,)+ '*');
        }else{ }
      }
      else{
        setInput((prev) => prev + value);
        }
    }
  };
  return (
    <div className='BodyContainor'>
    <div className='Main_containor'>
      <div className='Input_containor'>
        <input className='Input_box' type='text' value={CalValue} readOnly></input>
      </div>
      <div className='buttons'>
        {
          exp.map((area)=>(
            <button className='Each_button' key = {area.id} onClick={()=> handleButtonClick(area.number)}>{area.number}</button>
          ))
        }
      </div>
    </div>
    </div>
  )
}

// export default Calculator()