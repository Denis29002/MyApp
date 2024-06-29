import React, { useState } from "react";
import { questions } from "./data.js";
import style from "./quiz3.module.css";

const name = ["ответ1", "ответ2", "ответ3", "ответ4"];

function Quiz3() {
  const [questionList, setQuestionList] = useState(questions);
  const [answers, setAnswers] = useState(
    name.map(() => ({ answer: "", term: false }))
  );
  const [title, setTitle] = useState("");

  const changeCorrect = (index) => {
    setAnswers(
      answers.map((el, i) =>
        index === i ? { ...el, term: true } : { ...el, term: false }
      )
    );
  };

  const addNewQueistion = (index) => {
    const newQuestion = {
      id: questionList.length + 1,
      title,
      list: answers,
    };

    if (
      answers.some((el) => el.answer.length < 1) ||
      answers.every((el) => el.term === false) ||
      title.length < 1
    ) {
      return;
    }

    setQuestionList([...questionList, newQuestion]);
  };

  console.log("questionList: ", questionList);

  const addNewAnswer = (value, index) => {
    setAnswers(
      answers.map((el, idx) => (idx === index ? { ...el, answer: value } : el))
    );
  };

  return (
    <div className={style.container}>
      <div className={style.container_question}>
        <label>Название вопроса: </label>
        <input
          placeholder="Введите ваш вопрос..."
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className={style.container_inputs}>
        {answers.map((el, index) => (
          <div>
            <label>{`Ответ ${index + 1} `}</label>
            <input
              type="radio"
              onChange={() => changeCorrect(index)}
              checked={el.term}
            />
            <input
              onChange={(event) => addNewAnswer(event.target.value, index)}
            />
          </div>
        ))}
      </div>
      <button onClick={addNewQueistion}>Добавить</button>
    </div>
  );
}

export default Quiz3;
