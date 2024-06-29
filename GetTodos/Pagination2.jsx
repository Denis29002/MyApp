import React from "react";
import style from "./getTodo.module.css";

function Pagination2({ setPage, page, pages }) {
  const arr = [];

  for (let i = 1; i <= pages; i++) {
    arr.push(i);
  }

  return (
    <div className={style.container_pages_buttons}>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        &#10094;
      </button>
      {page < 5 ? (
        <div className={style.pages_buttons__first_half}>
          {arr.slice(0, 5).map((el) => (
            <button
              className={page === el ? style.active_page : ""}
              onClick={() => setPage(el)}
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
        <div>"fasfasfas"</div>
      ) : (
        // <div className={style.pages_buttons__last}>
        //   <button onClick={() => setPage(1)}>1</button>
        //   <span>...</span>
        //   {arr.slice(-4).map((el) => (
        //     <button
        //       onClick={() => setPage(el)}
        //       className={page === el ? style.active_page : ""}
        //     >
        //       {el}
        //     </button>
        //   ))}
        // </div>
        <div className={style.pages_buttons__middle}>
          <button onClick={() => setPage(1)}>1</button>
          <span>...</span>
          <button onClick={() => setPage(page - 1)}>{page - 1}</button>
          <button
            onClick={() => setPage(page)}
            className={page ? style.active : ""}
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
      <button disabled={page === arr.length} onClick={() => setPage(page + 1)}>
        &#10095;
      </button>
    </div>
  );
}

export default Pagination2;
