import React, { useState } from 'react';

const style = {
  boxShadow: '0 0 10px grey',
  width: '150px',
  textAlign: 'center',
  padding: '10px',
  marginLeft: '1rem',
  borderRadius: '10px',
}

const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  
  return (
    <div style={style}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
