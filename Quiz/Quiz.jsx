import React, { useState } from "react";
import style from "../Quiz/quiz.module.css";
import QuizItem from "./QuizItem/QuizItem";

const questions = [
  {
    id: 1,
    title: "Столица Канады?",
    list: [
      { answer: "Оттава", term: true },
      { answer: "Ванкувер", term: false },
      { answer: "Мельбурн", term: false },
      { answer: "Чиконтен", term: false },
    ],
  },
  {
    id: 2,
    title: "Сколько людей живет в РФ?",
    list: [
      { answer: "117 млн.", term: false },
      { answer: "162 млн.", term: false },
      { answer: "155 млн.", term: false },
      { answer: "144 млн.", term: true },
    ],
  },
  {
    id: 3,
    title: "Расстояние от Москвы до Владивостока?",
    list: [
      { answer: "2000 км", term: false },
      { answer: "3500 км", term: false },
      { answer: "6000 км", term: false },
      { answer: "9000 км", term: true },
    ],
  },
];

function Quiz() {
  const [currentTask, setCurrentTask] = useState(0);
  const [score, setScore] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);
  const [endScreen, setEndScreen] = useState(false);

  const startGame = () => {
    setStartQuiz(true);
  };

  if (!startQuiz) {
    return (
      <div className={style.start_button}>
        <button onClick={() => startGame()}>СТАРТ</button>
      </div>
    );
  }

  const restart = () => {
    setEndScreen(false);
    setScore(0);
    setCurrentTask(0);
    setStartQuiz(false);
  };
  return (
    <div className={style.container}>
      <h1>THE RACT QUIZ</h1>

      {startQuiz && !endScreen ? (
        <div>
          <QuizItem
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
            score={score}
            setScore={setScore}
            questions={questions}
            endScreen={endScreen}
            setEndScreen={setEndScreen}
          />
          <div className={style.container_panel}>
            <p>
              Вопрос {currentTask + 1} из {questions.length}
            </p>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <button onClick={restart}>Restart</button> <p>Всего очков: {score}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;
