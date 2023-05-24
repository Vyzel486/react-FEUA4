import React, { useState } from 'react';
import "../App.css";

const Button =() => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
  
    return (
        <div className='counter'>
            <button className='result' onClick={decrease}>-</button>
            <div className='result'>{count}</div>
            <button className='result' onClick={increase}>+</button>
            <button className='addButton'>ADD TO CART</button>
        </div>
    );
}

export default Button;