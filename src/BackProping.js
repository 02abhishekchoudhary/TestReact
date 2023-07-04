import React, { useState } from 'react';
import './style.css'

const BackProping = ({ getColor }) => {
  const [activeColor, setActiveColor] = useState();
  const handleChange = (e) => { 
    const { value } = e.target;
    setActiveColor(value);
    getColor(value);
  }
  return (
    <div className='inputfield'>
      <input
        type="text"
        id="input"
        aria-label="input"
        onChange={handleChange}
        value={activeColor}
      />
    </div>
  );
}

export default BackProping