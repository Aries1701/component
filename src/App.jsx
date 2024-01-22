
import './App.css'
import Button from './Button'
import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({ name: '', age: '', createdAt: new Date() });
  const [showAgeError, setShowAgeError] = useState(false);

  const handleClick = () => {
    const name = prompt('Enter your name:');
    const age = prompt('Enter your age:');

    if (name) {
      if (age) {
        setFormData({ name, age, createdAt: new Date() });
        setShowAgeError(false);
      } else {
        setShowAgeError(true);
      }
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Enter</button>
      <div>
        <p>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        {showAgeError && <p>Please enter your age.</p>}
      </div>
    </div>
  );
};

export default App;
