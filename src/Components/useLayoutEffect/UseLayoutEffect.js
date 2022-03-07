import React, { useLayoutEffect, useRef } from 'react'

export default function UseLayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  return (
    <div>
      <input type='text' ref={inputRef}/>
    </div>
  )
}
