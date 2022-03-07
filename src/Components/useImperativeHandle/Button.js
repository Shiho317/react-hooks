import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Button = forwardRef((props, ref) => {

  const [ toggle, setToggle ] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle)
    }
  }));

  return (
    <div>
      {toggle && <span>Toggle</span>}
    </div>
  )
});

export default Button;
