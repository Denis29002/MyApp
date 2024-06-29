import React from "react";
import style from "./randomquestions.module.css";

function Question({ question, answer, randomQuestion, params, setAnswer }) {
  return (
    <div>
      <div className={style.container_questinons}>
        {params.length === 0
          ? "Выберите нужные параметры"
          : randomQuestion[question]?.q}
      </div>
      <div className={style.container_questions}>
        {answer ? randomQuestion[question]?.a : ""}
      </div>
      {question !== null ? (
        <button onClick={() => setAnswer(true)}>Показать ответ</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Question;
