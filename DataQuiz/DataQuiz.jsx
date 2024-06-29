import React, { useState } from "react";
import style from "../DataQuiz/Data.module.css";

const data = [
  { question: "Сколько вам лет?", id: 1, answer: "" },
  { question: "Как вас зовут?", id: 2, answer: "" },
  { question: "В каком городе вы живете?", id: 3, answer: "" },
  { question: "Ваш любимый цвет?", id: 4, answer: "" },
  { question: "У вас есть собака?", id: 5, answer: "" },
  { question: "Любимая музыка?", id: 6, answer: "" },
];

function DataQuiz() {
  const [result, setResult] = useState({});

  const saveQuiz = () => {
    localStorage.setItem("result", JSON.stringify(result));
  };

  const addAnswer = () => {};
  console.log(result);
  return (
    <div className={style.container}>
      <div className={style.container_items}>
        {data.map((el) => (
          <div key={el.id} className={style.container_item}>
            <p>{el.question}</p>
            <input
              type="text"
              placeholder="*Введите текст"
              onChange={(event) =>
                setResult({
                  ...result,

                  [el.question]: event.target.value,
                })
              }
            />
          </div>
        ))}
      </div>
      <button onClick={saveQuiz}>ОТПРАВИТЬ</button>
    </div>
  );
}

export default DataQuiz;
