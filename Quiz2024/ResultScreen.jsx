import React from "react";
import style from "./quiz2024.module.css";

function ResultScreen({ setScore, question, score, setQuestNum }) {
  const restartTest = () => {
    setScore(0);
    setQuestNum(-1);
  };

  const isSuccesResult = score >= Math.ceil(question.length / 2);

  return (
    <div className={style.result_screen}>
      {isSuccesResult ? (
        <h1>Поздравляем вы прошли тест!</h1>
      ) : (
        <h1>Вы не прошли тест</h1>
      )}
      <h2>
        Вы ответили на {score} вопрос(а) из {question.length}
      </h2>
      <button onClick={restartTest}>Начать заново</button>
    </div>
  );
}

export default ResultScreen;
