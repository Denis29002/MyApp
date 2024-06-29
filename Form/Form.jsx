import React, { useState } from "react";
import style from "./form.module.css";

function Form() {
  const [number, setNumber] = useState(0);
  const [numberCost, setNumberCost] = useState(0);

  const onChangeDay = (event) => {
    setNumber(+event.target.value);
  };

  const onChangeCost = (event) => {
    setNumberCost(+event.target.value);
  };

  const clearAll = () => {
    setNumber(0);
    setNumberCost(0);
  };

  const totalCount = Math.trunc((numberCost / 20) * number) * 30;

  return (
    <div className={style.container}>
      <div className={style.container_forms}>
        <label>Сколько сигарет вы выкуриваете в день?</label>
        <input
          className={style.forms_input}
          value={number}
          onChange={onChangeDay}
        />
        <label>Введите цену пачки сигарет, р.</label>
        <input
          className={style.forms_input}
          value={numberCost}
          onChange={onChangeCost}
        />
      </div>
      <button className={style.clear_button} onClick={clearAll}>
        Очистить все поля
      </button>
      <label className={style.container_question}>
        Сколько вы тратите денег на курение в месяц:
      </label>

      <p className={style.container_result}>{totalCount}</p>
    </div>
  );
}

export default Form;
