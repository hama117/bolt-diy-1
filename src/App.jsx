import React, { useState } from 'react';
  import './App.css';

  function App() {
    const [display, setDisplay] = useState('0');
    const [prevValue, setPrevValue] = useState('');
    const [operator, setOperator] = useState('');

    const handleClick = (value) => {
      if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clear();
      } else if (['+', '-', '*', '/'].includes(value)) {
        handleOperator(value);
      } else {
        handleNumber(value);
      }
    };

    const handleNumber = (value) => {
      if (display === '0') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    };

    const handleOperator = (value) => {
      setPrevValue(display);
      setOperator(value);
      setDisplay('0');
    };

    const calculate = () => {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(prevValue) + parseFloat(display);
          break;
        case '-':
          result = parseFloat(prevValue) - parseFloat(display);
          break;
        case '*':
          result = parseFloat(prevValue) * parseFloat(display);
          break;
        case '/':
          result = parseFloat(prevValue) / parseFloat(display);
          break;
        default:
          result = display;
      }
      setDisplay(result.toString());
      setPrevValue('');
      setOperator('');
    };

    const clear = () => {
      setDisplay('0');
      setPrevValue('');
      setOperator('');
    };

    return (
      <div id="calculator">
        <div id="display">{display}</div>
        <div className="buttons">
          <button className="button" onClick={() => handleClick('7')}>7</button>
          <button className="button" onClick={() => handleClick('8')}>8</button>
          <button className="button" onClick={() => handleClick('9')}>9</button>
          <button className="button operator" onClick={() => handleClick('/')}>/</button>
          <button className="button" onClick={() => handleClick('4')}>4</button>
          <button className="button" onClick={() => handleClick('5')}>5</button>
          <button className="button" onClick={() => handleClick('6')}>6</button>
          <button className="button operator" onClick={() => handleClick('*')}>*</button>
          <button className="button" onClick={() => handleClick('1')}>1</button>
          <button className="button" onClick={() => handleClick('2')}>2</button>
          <button className="button" onClick={() => handleClick('3')}>3</button>
          <button className="button operator" onClick={() => handleClick('-')}>-</button>
          <button className="button" onClick={() => handleClick('0')}>0</button>
          <button className="button" onClick={() => handleClick('.')}>.</button>
          <button className="button equal" onClick={() => handleClick('=')}>=</button>
          <button className="button operator" onClick={() => handleClick('+')}>+</button>
          <button className="button" onClick={() => handleClick('C')}>C</button>
        </div>
      </div>
    );
  }

  export default App;
