import React, { useState } from "react";
import style from "./newtabs.module.css";

function NewTabs() {
  const data = [
    {
      id: 1,
      name: "Назад",
      content: "Всем пока",
    },
    { id: 2, name: "Пауза", content: "На какое время поставить паузу?" },
    { id: 3, name: "Вперёд", content: "На сколько шагов вперёд?" },
  ];

  const [activeButton, setActiveButton] = useState(0);

  const active = (index) => {
    setActiveButton(index);
  };
  return (
    <div className={style.conteiner}>
      {data.map((el, index) => (
        <button
          key={el.id}
          className={`${
            activeButton === index ? style.active : style.disabled
          }`}
          onClick={() => active(index)}
        >
          {el.name}
        </button>
      ))}
    </div>
  );
}

export default NewTabs;
