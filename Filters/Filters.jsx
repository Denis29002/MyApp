import React, { useState } from "react";
import { data } from "./data";
import style from "./filters.module.css";

const colors = [
  { name: "красные", value: "red" },
  { name: "синие", value: "blue" },
  { name: "зелёные", value: "green" },
  { name: "жёлтые", value: "yellow" },
];
const themes = ["Все", "Тёмные", "Светлые"];

const colorsValues = colors.map((el) => el.value);

function Filters() {
  const [filterForm, setFilterForm] = useState(["circle", "square"]);
  const [filterTheme, setFilterTheme] = useState("Все");
  const [filterColor, setFilterColor] = useState(colorsValues);

  const changeFilterForm = (status) => {
    if (filterForm.includes(status)) {
      setFilterForm(filterForm.filter((el) => el !== status));
    } else setFilterForm([...filterForm, status]);
  };

  const changeFilterColor = (color) => {
    if (filterColor.includes(color.value)) {
      setFilterColor(filterColor.filter((el) => el !== color.value));
    } else setFilterColor([...filterColor, color.value]);
  };

  const changefilterTheme = (theme) => {
    setFilterTheme(theme);
  };

  const getFilteredItems = () => {
    let result = data;
    if (filterTheme === "Светлые") {
      result = result.filter((el) => el.dark);
    } else if (filterTheme === "Тёмные") {
      result = result.filter((el) => !el.dark);
    }
    result = result.filter((el) => filterForm.includes(el.form));
    result = result.filter((el) => filterColor.includes(el.color));
    return result;
  };

  console.log(data);
  return (
    <div className={style.container}>
      <div className="container_filter_form">
        <input
          type="checkbox"
          onChange={() => changeFilterForm("circle")}
          checked={filterForm.includes("circle")}
        />
        <label>Круги</label>
        <input
          type="checkbox"
          onChange={() => changeFilterForm("square")}
          checked={filterForm.includes("square")}
        />
        <label>Квадраты</label>
      </div>
      <div className="container_filter_color">
        {colors.map((el) => (
          <div>
            <input
              type="checkbox"
              onChange={() => changeFilterColor(el)}
              checked={filterColor.includes(el.value)}
            />
            <label>{el.name}</label>
          </div>
        ))}
      </div>
      <div className="container_data_filter">
        {themes.map((el) => (
          <div>
            {" "}
            <input
              type="radio"
              onChange={() => changefilterTheme(el)}
              checked={filterTheme.includes(el)}
            />
            <label>{el}</label>
          </div>
        ))}
      </div>
      <div className={style.container_result}>
        {getFilteredItems().map((el) => (
          <div
            style={{ backgroundColor: el.color, opacity: el.dark ? 0.2 : 1 }}
            className={el.form === "square" ? style.square : style.circle}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Filters;
