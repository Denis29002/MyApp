import React, { useState } from "react";
import style from "./quiz2024.module.css";

function Questions({ question, questNum, setQuestNum, score, setScore }) {
  const showNextQuestion = (el) => {
    if (el.term) {
      setScore(score + 1);
    }
    setQuestNum(questNum + 1);
  };

  return (
    <div className={style.question_container}>
      <h1>
        Вопрос номер: {questNum + 1} из {question.length}
      </h1>
      <h1>{question[questNum].title}</h1>
      <h2>{question[questNum].question}</h2>
      <div className={style.button_container}>
        {question[questNum].list.map((el) => (
          <button onClick={() => showNextQuestion(el)}>{el.answer}</button>
        ))}
      </div>
    </div>
  );
}

export default Questions;
