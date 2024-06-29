import React, { useState } from "react";
import style from "./movies.module.css";

function Pagination({ setPage, page, pages }) {
  const arr = [];

  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }

  return (
    <div className={style.pagination}>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          &#10094;
        </button>
        {page < 5 ? (
          <div>
            {arr.slice(0, 5).map((el) => (
              <button
                onClick={() => setPage(el)}
                className={page === el ? style.active_page : ""}
              >
                {el}
              </button>
            ))}
            <span>...</span>

            <button onClick={() => setPage(arr[arr.length - 1])}>
              {arr[arr.length - 1]}
            </button>
          </div>
        ) : page > arr.length - 3 ? (
          <div>
            <button onClick={() => setPage(1)}>1</button>
            <span>...</span>
            {arr.slice(-4).map((el) => (
              <button
                onClick={() => setPage(el)}
                className={page === el ? style.active_page : ""}
              >
                {el}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button onClick={() => setPage(1)}>1</button>
            <span>...</span>
            <button onClick={() => setPage(page - 1)}>{page - 1}</button>
            <button
              onClick={() => setPage(page)}
              className={page ? style.active_page : ""}
            >
              {page}
            </button>
            <button onClick={() => setPage(page + 1)}>{page + 1}</button>
            <span>...</span>

            <button onClick={() => setPage(arr[arr.length - 1])}>
              {arr[arr.length - 1]}
            </button>
          </div>
        )}
        <button
          disabled={page === arr.length}
          onClick={() => setPage(page + 1)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Pagination;
