import React, { useState } from 'react';


export default function Calculator(props) {
  const [userInput, setUserInput] = useState('');
  const [operation, setOperation] = useState('');
  const [runningTotal, setRunningTotal] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    let x = 0;
    switch (operation) {
      case '+':
        x = Number(runningTotal) + Number(userInput);
        setRunningTotal(x);
        props.onSubmit(x);
        break;
      case '-':
        x = Number(runningTotal) - Number(userInput);
        setRunningTotal(x);
        props.onSubmit(x);
        break;
      case '*':
        x = Number(runningTotal) * Number(userInput);
        setRunningTotal(x);
        props.onSubmit(x);
        break;
      case '/':
        x = Number(runningTotal) / Number(userInput);
        setRunningTotal(x);
        props.onSubmit(x);
        break;
      default: runningTotal;
    }
    setUserInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userInput}
        onChange={event => setUserInput(event.target.value)}
        placeholder=""
        required
      />
      <button value='+' onClick={event => setOperation(event.target.value)}>+</button>
      <button value='-' onClick={event => setOperation(event.target.value)}>-</button>
      <button value='*' onClick={event => setOperation(event.target.value)}>*</button>
      <button value='/' onClick={event => setOperation(event.target.value)}>/</button>
    </form>
  );
}
