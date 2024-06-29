import React, { useEffect, useState } from "react";
import style from "./quiz2024.module.css";

function StartScreen({
  data,
  setQuestion,
  question,
  settings,
  setSettings,
  count,
  setCount,
}) {
  const questionNum = [3, 5, 7];
  const params = ["html", "js", "react", "typescript", "css", "NodeJs"];

  const changeParams = (param) => {
    if (!settings.includes(param)) {
      setSettings([...settings, param]);
    } else {
      setSettings(settings.filter((el) => el !== param));
    }
  };

  const setAllParams = () => {
    if (params.length !== settings.length) {
      setSettings(params);
    } else setSettings([]);
  };

  const chosenQuestions = () => {
    const arr = [];
    for (let key in data) {
      if (settings.includes(key)) {
        arr.push(data[key]);
      }
    }
    setQuestion(arr.flat().slice(0, count));
  };

  useEffect(() => {
    chosenQuestions();
  }, [settings, count]);

  return (
    <div className={style.start_screen}>
      <h1>Quiz</h1>
      <h2>Выберите темы:</h2>
      <div className={style.questions_settings}>
        <div className={style.setting_setAll}>
          <input
            type="checkbox"
            onChange={setAllParams}
            checked={params.length === settings.length}
          />
          <label>Выбрать всё</label>
        </div>
        {params.map((el) => (
          <div className={style.setting}>
            <input
              type="checkbox"
              onChange={() => changeParams(el)}
              checked={settings.includes(el)}
            />
            <label>{el}</label>
          </div>
        ))}
      </div>
      <hr></hr>
      <h2>Выберите количество вопросов:</h2>
      <div className={style.container_count_questions}>
        {questionNum.map((el) => (
          <div className={style.count_questions}>
            <input
              value={count}
              type="radio"
              onClick={() => setCount(el)}
              checked={el === count}
            />
            <label>{el}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartScreen;
