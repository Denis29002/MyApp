import React, { useState } from "react";
import style from "./list.module.css";
import { v4 as uuidv4 } from "uuid";

function List() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [items, setItems] = useState([]);
  const [activeButton, setActiveButton] = useState(1);

  const changeText = (event) => {
    setText(event.target.value);
  };

  const changeTranslatedText = (event) => {
    setTranslatedText(event.target.value);
  };

  const addItem = () => {
    const newArr = [...items, { id: uuidv4(), text, translatedText }];
    if (text.length < 1 || translatedText.text < 1) {
      newArr.trim();
    }
    setItems(newArr);
    setText("");
    setTranslatedText("");
  };

  const deleteItem = (el) => {
    setItems(items.filter((item) => item !== el));
  };

  const changeActive = (index) => {
    setActiveButton(index);
  };

  return (
    <div className={style.container}>
      <div className={style.container_inputs}>
        <div className={style.container_input_text}>
          <label>Введите слово: </label>
          <input onChange={(event) => changeText(event)} value={text} />
        </div>
        <div className={style.container_input_translated_text}>
          <label>Введите перевод: </label>
          <input
            onChange={(event) => changeTranslatedText(event)}
            value={translatedText}
          />
        </div>
        <button className={style.button_add_item} onClick={addItem}>
          Добавить
        </button>
      </div>
      <div className="container_items">
        {items.map((el, index) => (
          <div className={style.container_item} key={el.id}>
            <button onClick={() => changeActive(index)}>
              {activeButton === index ? el.translatedText : el.text}
            </button>
            <button onClick={() => deleteItem(el)}>&#128465;</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
