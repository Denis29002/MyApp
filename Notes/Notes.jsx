import React, { useState } from "react";

const initialTasks = ["Задача 1", "Задача 2", "Задача 3"];

const Notes = () => {
  const [text, setText] = useState("");
  const [tasks, setTask] = useState(initialTasks);

  const changeText = (event) => {
    setText(event.target.value);
    console.log(event.target.value);
  };

  const addNewTask = () => {
    const newArr = [...tasks, text];
    setTask(newArr);
    setText("");
  };

  const deleteTask = (el) => {
    setTask(tasks.filter((item) => item !== el));
  };
  return (
    <div className="container">
      <h2>СПИСОК ЗАДАЧ</h2>
      <div className="tasks">
        {tasks.map((el) => (
          <p key={el}>
            <input type="checkbox" />
            {el} <button onClick={() => deleteTask(el)}>Delete</button>
          </p>
        ))}
      </div>
      <input value={text} onChange={(event) => changeText(event)}></input>
      <button onClick={addNewTask}>Добавить</button>
    </div>
  );
};

export default Notes;
