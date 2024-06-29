import React, { useState } from "react";
import style from "./newcounter.module.css";

const steps = [5, 10, 20, 50, 100];

function NewCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function increment() {
    setCount(count + step);
  }

  function decrement() {
    setCount(count - step);
  }

  function clear() {
    setCount(0);
  }

  function changeStep(newStep) {
    setStep(newStep);
  }

  return (
    <div className={style.counter}>
      <p className={style.counter_count}>{count}</p>
      <div className={style.counter_buttons}>
        <button className={style.buttons_increment} onClick={increment}>
          +
        </button>
        <button className={style.buttons_decrement} onClick={decrement}>
          -
        </button>
        <button className={style.buttons_clear} onClick={clear}>
          Clear
        </button>
      </div>
      <p className={style.counter_step}>Текущий шаг: {step}</p>
      <div className="button_steps">
        {steps.map((el) => (
          <button
            className={`${
              el === step ? style.active_button : style.disabled_button
            }`}
            onClick={() => changeStep(el)}
            key={el}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NewCounter;
