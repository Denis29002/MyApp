import React from "react";
import style from "./quiz2024.module.css";

function StartButton({ settings, setQuestNum, count }) {
  return (
    <div className={style.container_button}>
      <button
        onClick={() => setQuestNum(0)}
        disabled={settings.length * 2 < count}
      >
        СТАРТ
      </button>
    </div>
  );
}

export default StartButton;
