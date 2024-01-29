
import './App.css'
import Button from './Button'
import React, { useState } from 'react';

const CodeList = () => {
  const [inputValue, setInputValue] = useState('');
  const [jsxCodeList, setJsxCodeList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddCode = () => {
    if (inputValue.trim() !== '') {
      setJsxCodeList([...jsxCodeList, <div key={jsxCodeList.length + 1}>{inputValue}</div>]);
      setInputValue('');
    }
  };

  return (
    <div>
      <h2>Danh sách mã JSX</h2>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddCode}>Add</button>
      </div>
      <ul>
        {jsxCodeList.map((jsxCode, index) => (
          <li key={index}>{jsxCode}</li>
        ))}
      </ul>
    </div>
  );
};

export default CodeList;