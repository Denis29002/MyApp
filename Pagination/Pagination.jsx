import React from "react";
import style from "./pagination.module.css";

const Pagination = ({ count, onPage }) => {
  let newArr = [];
  let totalPages = Math.ceil(count / onPage);
  for (let i = 1; i <= totalPages; i++) {
    newArr.push(i);
  }
  return (
    <div className={style.pagination}>
      <button>Prev</button>
      {newArr.map((el) => (
        <button>{el}</button>
      ))}
      <button>Next</button>
    </div>
  );
};

export default Pagination;
