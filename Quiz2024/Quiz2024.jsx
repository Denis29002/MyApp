import React, { useState } from "react";
import { data } from "./quiz";
import StartScreen from "./StartScreen";
import style from "./quiz2024.module.css";
import StartButton from "./StartButton";
import Questions from "./Questions";
import ResultScreen from "./ResultScreen";

function Quiz2024() {
  const [question, setQuestion] = useState([]);
  const [questNum, setQuestNum] = useState(-1);
  const [settings, setSettings] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(3);

  const isStart = questNum !== -1;
  const isFinish = count === questNum;

  console.log("questNum", questNum);
  console.log("question.length - 1", question.length - 1);

  return (
    <div className={style.quiz2024_container}>
      <div className={style.container_block}>
        {!isStart ? (
          <div>
            <StartScreen
              data={data}
              question={question}
              setQuestion={setQuestion}
              settings={settings}
              setSettings={setSettings}
              count={count}
              setCount={setCount}
            />
            <StartButton
              settings={settings}
              setQuestNum={setQuestNum}
              count={count}
            />{" "}
          </div>
        ) : isStart && !isFinish ? (
          <div>
            <Questions
              question={question}
              questNum={questNum}
              setQuestNum={setQuestNum}
              isFinish={isFinish}
              score={score}
              setScore={setScore}
            />
          </div>
        ) : (
          <ResultScreen
            question={question}
            setScore={setScore}
            score={score}
            setQuestNum={setQuestNum}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz2024;
