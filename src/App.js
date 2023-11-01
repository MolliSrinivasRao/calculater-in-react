
import React, { useState } from 'react';
import './App.css';
import { FaDivide } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';



function App() {
  const [cal, setcal] = useState('');
  const handleClick = (e) => {
    setcal(cal.concat(e.target.value))
  }
  const Clear = () => {
    setcal('');
  }
  const calculate = () => {
    setcal(eval(cal));
  }
  return (
    <div>
      <input className='inp-app' type='text' value={cal} />
      <div className="App">
        <div className='App-nav'>
          <button value="Clear" onClick={Clear}>Clear</button>
          <button value="7" onClick={handleClick}>7</button>
          <button value="4" onClick={handleClick}>4</button>
          <button value="1" onClick={handleClick}>1</button>
          <button value="0" onClick={handleClick}>0</button>

        </div><div className='App-nav'>
          <button onClick={handleClick}>M-</button>
          <button value="8" onClick={handleClick}>8</button>
          <button value="5" onClick={handleClick}>5</button>
          <button value="2" onClick={handleClick}>2</button>
          <button value="00" onClick={handleClick}>00</button>

        </div><div className='App-nav'>
          <button onClick={handleClick}>M+</button>
          <button value="9" onClick={handleClick}>9</button>
          <button value="6" onClick={handleClick}>6</button>
          <button value="3" onClick={handleClick}>3</button>
          <button value="." onClick={handleClick}><RxDotFilled /></button>

        </div><div className='App-nav'>
          <button onClick={handleClick}>+/-</button>
          <button value="%" onClick={handleClick}>%</button>
          <button value="+" onClick={handleClick}>+</button>
          <button value="*" onClick={handleClick}>*</button>
          <button value="-" onClick={handleClick}>-</button>

        </div><div className='App-nav'>
          <button onClick={handleClick}>ON</button>
          <button value="" onClick={handleClick}><AiOutlineArrowRight /></button>
          <button value="/" onClick={handleClick}><FaDivide /></button>
          <button  onClick={calculate} className='equal'>=</button>

        </div>
      </div>
    </div>
  );
}

export default App;
