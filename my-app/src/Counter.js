import React, { useState } from 'react';


const Counter = () => {
  const [count, setCount] = useState(0);


  const changeBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  };

  const increment = ()=>{
    if(count<10){
      setCount(count+1)
      changeBackgroundColor()
    }
  }


  const decrement = ()=>{
    if (count > -10) {
      setCount(count-1)
      changeBackgroundColor()
    }
  }

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="button-group">
        <button style={{'marginRight': '70px', 'padding': "15px 20px", "border-radius": "30px"}} onClick={decrement}>-</button>
        <button style={{'marginRight': '70px', 'padding': "15px 20px", "border-radius": "30px"}} onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
