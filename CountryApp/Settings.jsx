import React from "react";
import style from "./country.module.css";
const regions = ["Asia", "Americas", "Asia", "Africa", "Europe", "Oceania"];

function Settings({ changeParam }) {
  return (
    <div className={style.container_filter}>
      <select onChange={(e) => changeParam(e.target.value)}>
        <option>All</option>
        {regions.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
}

export default Settings;
