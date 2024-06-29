import React, { useState } from "react";
import style from "./cardItem.module.css";

function CardItem({ id, text, translatedText, deleteItem }) {
  const [active, setActive] = useState(false);

  const changeActive = () => {
    setActive(!active);
  };
  return (
    <div className={active ? style.active_item : ""}>
      <button onClick={() => changeActive()}>
        {active ? translatedText : text}{" "}
      </button>

      <button onClick={() => deleteItem(id)}>&#128465;</button>
    </div>
  );
}

export default CardItem;
