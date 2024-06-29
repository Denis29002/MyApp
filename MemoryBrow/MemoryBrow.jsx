import React, { useState } from "react";
import style from "./memorybrow.module.css";
import MemoryItem from "./MemoryItem";

const data = [
  { question: "Сколько вам лет?", id: 1 },
  { question: "Как вас зовут?", id: 2 },
  { question: "В каком городе вы живете?", id: 3 },
  { question: "Ваш любимый цвет?", id: 4 },
  { question: "У вас есть собака?", id: 5 },
  { question: "Любимая музыка?", id: 6 },
];

function MemoryBrow() {
  const [obj, setObj] = useState({});

  const sendObj = () => {
    localStorage.setItem("answers", JSON.stringify(obj));

    setObj({});
  };
  console.log(obj);

  const isFormCompleted =
    Object.values(obj).length === data.length &&
    Object.values(obj).every((el) => el.trim() !== "");

  return (
    <div className={style.container}>
      {data.map((el) => (
        <div className={style.container_item} key={el.id}>
          <MemoryItem obj={obj} question={el.question} setObj={setObj} />
        </div>
      ))}
      <button onClick={sendObj} disabled={!isFormCompleted}>
        Отправить
      </button>
    </div>
  );
}

export default MemoryBrow;
