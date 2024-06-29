import React, { useState } from "react";
import style from "./Math.module.css";
const multiplies = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplies2 = [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function MathTable() {
  const [active, setActive] = useState({ x: 0, y: 0 });

  const changeActive = (i, idx) => {
    setActive({ x: i, y: idx });
  };

  console.log(active);
  return (
    <div className={style.container}>
      <table>
        <tr>
          {multiplies.map((el) => (
            <td>{el}</td>
          ))}
        </tr>{" "}
        {multiplies.map((el, i) => (
          <tr>
            {" "}
            {multiplies2.map((num, idx) =>
              el !== null ? (
                <td
                  className={
                    (i === active.x && idx <= active.y) ||
                    (idx === active.y && i <= active.x)
                      ? style.active
                      : ""
                  }
                  onClick={() => changeActive(i, idx)}
                >
                  {num * el}
                </td>
              ) : (
                ""
              )
            )}
          </tr>
        ))}
      </table>
    </div>
  );
}

export default MathTable;
