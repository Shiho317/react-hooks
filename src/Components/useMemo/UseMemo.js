import React, {useMemo, useState} from 'react'

export default function UseMemo() {
  const [ toggle, setToggle ] = useState(false);
  const [ title, setTitle ] = useState('')

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const memoValue = (name) => {
    return 'hello' + name;
  }

  const memo = useMemo(() => memoValue('susan'), []);

  return (
    <div>
      <h1>{title}</h1>
      <input type='text' onChange={onChange}/>
      <h2>{memo}</h2>
      <button onClick={() => {
        setToggle(!toggle)
      }}>Toggle</button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}
