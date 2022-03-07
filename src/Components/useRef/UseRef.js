import React, { useRef, useState } from 'react';

export default function UseRef() {
  const [ title, setTitle ] = useState('')
  const inputRef = useRef(null);

  const onClick = () => {
    setTitle(inputRef.current.value)
    inputRef.current.value = '';
  };

  return (
    <div>
      <h1>{title}</h1>
      <input type='text' placeholder="ex..." ref={inputRef}/>
      <button onClick={onClick}>
        Change Name
      </button>
    </div>
  )
}

