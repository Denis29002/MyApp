import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CardItem from "./СardItem/CardItem";
import style from "./card.module.css";

function cards() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [todo, setTodo] = useState([]);

  const addItem = () => {
    if (text.length === 0 || translatedText.length === 0) {
      setTodo(todo.trim());
    }
    setTodo([...todo, { text, translatedText, id: uuidv4() }]);
    setText("");
    setTranslatedText("");
  };

  const deleteItem = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  return (
    <div className={style.container}>
      <div className={style.container_inputs}>
        <label>Введите слово: </label>
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
        ></input>
        <label>Введите перевод: </label>
        <input
          onChange={(event) => setTranslatedText(event.target.value)}
          value={translatedText}
        ></input>
      </div>
      <button className={style.add_item} onClick={addItem}>
        ДОБАВИТЬ КАРТОЧКУ
      </button>
      <div className={style.container_result}>
        {todo.map((el) => (
          <div className={style.result_card} key={el.id}>
            <CardItem
              deleteItem={deleteItem}
              id={el.id}
              text={el.text}
              translatedText={el.translatedText}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default cards;
