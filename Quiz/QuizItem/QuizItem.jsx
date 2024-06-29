import React, { useState } from "react";
import style from "../quiz.module.css";

function QuizItem({
  questions,
  score,
  setScore,
  currentTask,
  setCurrentTask,
  setEndScreen,
  endScreen,
}) {
  const changeTask = (el) => {
    if (el.term) {
      setScore(score + 20);
    }
    if (currentTask + 1 < questions.length) {
      setCurrentTask(currentTask + 1);
    } else setEndScreen(true);
  };
  return (
    <div className={style.container}>
      <div className={style.container_questions}>
        {questions[currentTask].title}
      </div>
      <div className={style.container_answers}>
        {questions[currentTask].list.map((el) => (
          <button onClick={() => changeTask(el)}>{el.answer}</button>
        ))}
      </div>
    </div>
  );
}

export default QuizItem;
