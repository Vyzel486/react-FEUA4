import { useState } from "react";

const style = {
  boxShadow: '0 0 10px grey',
  width: '150px',
  textAlign: 'center',
  padding: '10px',
  marginLeft: '1rem',
  borderRadius: '10px',
}

const OneStateCounter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
      // setCount(count + 1);
      setCount((previouseState) => previouseState + 1);
      // setCount((previouseState) => {
      //   return previouseState + 1;
      // });
    };

    const decrease = () => {
      // setCount(count - 1);
      setCount((previouseState) => previouseState - 1);
      // setCount((previouseState) => {
      //   return previouseState - 1;
      // });
    };

  return (
    <div style={style}>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};

export default OneStateCounter;
