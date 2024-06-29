import React from "react";
import style from "./country.module.css";
import { MdPeopleAlt } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { Link } from "react-router-dom";

function List({ getFilteredAndSortedCounries, theme, changeTheme }) {
  return (
    <div className={style.countries_list}>
      {getFilteredAndSortedCounries()?.map((el) => (
        <Link
          to={`/countrypage/${el.name}`}
          style={{ color: "inherit", textDecoration: "inherit" }}
          changeTheme={changeTheme}
        >
          <div className={style.country_block}>
            <img src={el.flags.svg} />
            <h1>{el.name}</h1>
            <h3>
              {el.capital} <TbBuildingSkyscraper />
            </h3>
            <p>{el.region}</p>
            <p>
              {el.population} <MdPeopleAlt />
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default List;
