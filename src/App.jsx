import './css/App.css';
import freeCodeCampLogo from '../src/images/freecodecamp-logo.png';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

    const [input, setInput] = useState('');
    const addInput = valor =>{
      setInput(input + valor);
    };

    const calculateResult = () => {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert('please enter values to perform the calculations');
      }
    };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img 
          className="freecodecamp-logo"
          src={freeCodeCampLogo} 
          alt='freeCodeCamp-Logo'  
        />
      </div>
      
      <div className='calculator-container'>
        <Input 
          input={input}
        />
        <div className='calculator__row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='calculator__row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='calculator__row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='calculator__row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>%</Button>
        </div>
        <div className='calculator__row'>
          <ClearButton 
            handleClear={()=>{setInput('')}}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
