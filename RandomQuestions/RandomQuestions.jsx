import React, { useState } from "react";
import style from "./randomquestions.module.css";
import Question from "./Question";
const questions = {
  html: [
    { q: "Вопрос хтмл 1", a: "Ответ хтмл 1" },
    { q: "Вопрос хтмл 2", a: "Ответ хтмл 2" },
  ],
  css: [
    { q: "Вопрос ксс 1", a: "Ответ css 1" },
    { q: "Вопрос ксс 2", a: "Ответ css 2" },
  ],
  javascript: [
    { q: "Вопрос жс 1", a: "Ответ js 1" },
    { q: "Вопрос жс 2", a: "Ответ js 2" },
  ],
  react: [
    { q: "Вопрос реакт 1", a: "Ответ react 1" },
    { q: "Вопрос реакт 2", a: "Ответ react 2" },
  ],
  typescript: [
    { q: "Вопрос ts 1", a: "Ответ ts 1" },
    { q: "Вопрос ts 2", a: "Ответ ts 2" },
  ],
};

function RandomQuestions() {
  const [params, setParams] = useState([]);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(false);
  const topics = Object.keys(questions);

  const getChosenQuestion = () => {
    const arr = [];

    for (let key in questions) {
      if (params.includes(key)) {
        arr.push(questions[key]);
      }
    }
    return arr.flat();
  };

  const randomQuestion = getChosenQuestion();

  const getRandomNum = () => {
    const num = Math.floor(Math.random() * randomQuestion.length);
    setQuestion(num);
    setAnswer(false);
  };

  const changeParams = (param) => {
    if (!params.includes(param)) {
      setParams([...params, param]);
    } else {
      setParams(params.filter((el) => el !== param));
    }
    setQuestion(null);
  };

  const setAllParams = () => {
    if (topics.length !== params.length) {
      setParams(topics);
    } else setParams([]);
    setQuestion(null);
  };

  console.log(randomQuestion.length);
  console.log("random num", question);

  return (
    <div className={style.container}>
      <div className={style.quest_container}>
        <div className={style.quest_container_settings}>
          <input
            type="checkbox"
            checked={topics.length === params.length}
            onChange={() => setAllParams()}
          />
          <label>Выбрать всё</label>
          {topics.map((el, i) => (
            <div className={style.set_setting} key={i}>
              <input
                type="checkbox"
                onChange={() => changeParams(el)}
                checked={params.includes(el)}
              />
              <label>{el}</label>
            </div>
          ))}
        </div>
        <div className={style.line}></div>
        <Question
          question={question}
          answer={answer}
          randomQuestion={randomQuestion}
          params={params}
          setAnswer={setAnswer}
        />
        <div className={style.container_buttons}>
          <button onClick={getRandomNum}>Получить случайный вопрос</button>
        </div>
      </div>
    </div>
  );
}

export default RandomQuestions;
