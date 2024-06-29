import React, { useState } from "react";
import style from "../icons.module.css";

function IconsItem({ index, activeItem, setActiveItem }) {
  const changeActiveIcon = () => {
    setActiveItem(index);
  };
  return (
    <div className={style.icons_item} onClick={() => changeActiveIcon()}>
      {index === activeItem ? "😒" : "😀"}
    </div>
  );
}

export default IconsItem;
