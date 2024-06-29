import { useState } from "react";

function MemoryItem({ question, obj, setObj }) {
  const changeAnswer = (el, question) => {
    setObj({ ...obj, [question]: el });
  };

  return (
    <div>
      <p>{question}</p>
      <input
        value={obj[question] || ""}
        type="text"
        onChange={(e) => changeAnswer(e.target.value, question)}
        placeholder="Введите текст..."
      />
    </div>
  );
}

export default MemoryItem;
