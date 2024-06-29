import React, { useState } from "react";
import style from "./Rating.module.css";

const labels = ["ужасно", "плохо", "сойдёт", "хорошо", "замечательно"];
const array = Array.from({ length: 5 }).fill("★");

function Rating() {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [hover, setHover] = useState(-1);

  const setStars = (index) => {
    setSelectedItem(index);
  };

  const changeItemsHover = (index) => {
    setHover(index);
  };
  console.log(hover);
  console.log(selectedItem);

  return (
    <div className={style.container}>
      <div className={style.container_stars}>
        {array.map((el, index) => (
          <div
            value="2"
            className={
              selectedItem >= index
                ? style.active_container_star
                : hover >= index
                ? style.active_container_star
                : style.container_star
            }
            onClick={() => setStars(index)}
            // onMouseLeave={}
            onMouseOver={() => changeItemsHover(index)}
          >
            {el}
          </div>
        ))}
      </div>
      <div className={style.container_comment}>{labels[selectedItem]}</div>
    </div>
  );
}

export default Rating;
