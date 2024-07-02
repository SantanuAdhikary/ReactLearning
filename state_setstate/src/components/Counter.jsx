import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount((pre) => pre + 1);
  };
  let decrement = () => {
    setCount((pre) => pre - 1);
  };
  console.log(count);
  return (
    <>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
export default Counter;
