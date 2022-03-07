import React, { useEffect } from 'react';

const Child = ({returnComment}) => {
  useEffect(() => {
    console.log('function was called.');
  }, [returnComment]);

  return(
    <div>
      {returnComment('susan')}
    </div>
  )
};

export default Child;
