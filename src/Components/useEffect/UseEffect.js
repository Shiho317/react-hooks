import React, { useState, useEffect } from 'react'

export default function UseEffect() {

  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('Good')
    console.log('hello')
  }, [title]);

  return (
    <div>
      <h1>{title}</h1>
      hello world
    </div>
  )
}
