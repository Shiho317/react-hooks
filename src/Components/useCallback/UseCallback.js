import React, { useCallback, useState } from 'react'
import Child from './Child'

function UseCallback() {

  const [toggle, setToggle] = useState(false)
  const [data, setData] = useState('pls comment');

  const returnComment = useCallback((name) => {
    return data + name
  }, [data])

  const onChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange}/>
      <Child returnComment={returnComment}/>
      <button onClick={() => {
        setToggle(!toggle);
      }}>
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default UseCallback