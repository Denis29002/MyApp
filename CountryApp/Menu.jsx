import React, { useState } from "react";
import style from "./country.module.css";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function Menu({ changeTheme, theme }) {
  return (
    <div className={style.menu}>
      <h2>Where is world?</h2>
      <h2>
        {" "}
        {theme === "white" ? (
          <div onClick={changeTheme}>
            Light mode <FaRegMoon />
          </div>
        ) : (
          <div onClick={changeTheme}>
            Dark mode <FaMoon />
          </div>
        )}
      </h2>
    </div>
  );
}

export default Menu;
