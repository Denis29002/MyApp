import React, { useRef } from "react";
import style from "./focusinput.module.css";

function FocusInput() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  let inputs = [inputRef1, inputRef2, inputRef3, inputRef4];

  const refInput = (text, i) => {
    if (i === 5 && text.length >= 1) {
      inputRef1.current.focus();
    } else if (text.length >= 1) {
      inputs[i].current.focus();
    }
  };

  return (
    <div className={style.auth_container}>
      <div>
        {inputs.map((el, i) => {
          <input
            value={el.current}
            ref={el.current}
            onChange={(e) => refInput(e.target.value, i + 1)}
            type="number"
          />;
        })}
      </div>
      <button>Verify</button>
    </div>
  );
}

export default FocusInput;
