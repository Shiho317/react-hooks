import React, { useState } from 'react';

const UseState = () => {
  const [inputValue, setInputValue] = useState('hello');

  let onChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue)
  }

  return(
    <div>
      <input placeholder='enter somrthing...' onChange={onChange}/>
      {inputValue}
    </div>
  )
}

export default UseState