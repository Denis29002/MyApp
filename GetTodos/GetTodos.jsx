import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./getTodo.module.css";
import Pagination2 from "./Pagination2";

const nums = [5, 10, 20];

function GetTodos() {
  const [todos, setTodos] = useState([]);
  const [pages, setPages] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const getTodos = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
    );

    const lenTodos = await axios(`https://jsonplaceholder.typicode.com/posts`);
    setPages(lenTodos.data.length / limit);

    setTodos(res.data);
  };

  useEffect(() => {
    getTodos();
  }, [limit, page]);

  const changeLimit = (el) => {
    setLimit(el);
  };

  return (
    <div className={style.container}>
      <h1>Список задач</h1>
      <div className={style.container_limit_buttons}>
        <h2>Показывать по: </h2>
        {nums.map((el) => (
          <button
            onClick={() => changeLimit(el)}
            className={el === limit ? style.active : ""}
          >
            {el}
          </button>
        ))}
      </div>
      <div className={style.container_todos}>
        {todos.map((el) => (
          <div className={style.container_todo}>
            <p>№ {el.id}</p>
            <h3>Name:</h3>
            <p> {el.title}</p>
            <p>Discription: </p>
            <p>{el.body}</p>
          </div>
        ))}
      </div>
      <div>
        <Pagination2 page={page} setPage={setPage} pages={pages} />
      </div>
    </div>
  );
}

export default GetTodos;
