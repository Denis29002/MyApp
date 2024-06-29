import React, { useState } from "react";
import style from "./counter.module.css";

function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  const [number, setNumber] = useState(0);

  const decrement = () => {
    setCount(count - number);
  };

  const increment = () => {
    setCount(count + number);
  };

  const onChangeName = (event) => {
    console.log(+event.target.value);
    setNumber(+event.target.value);
  };

  const clear = () => setNumber("");
  return (
    <div className={style.counter}>
      <input value={number} onChange={onChangeName} />
      <button onClick={clear}>CLEAR</button>
      <p>{count}</p>
      <div className={style.buttons}>
        <button
          disabled={count === 10}
          onClick={increment}
          className={style.decrement}
        >
          Increment
        </button>
        <button
          disabled={count === -10}
          onClick={decrement}
          className={style.increment}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
