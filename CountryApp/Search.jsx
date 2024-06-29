import React from "react";
import { IoSearch } from "react-icons/io5";
import style from "./country.module.css";

function Search({ setText, text }) {
  return (
    <div className={style.container_search}>
      <input
        value={text}
        type="text"
        placeholder="Searh for a coutry..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>
        <IoSearch />
      </p>
    </div>
  );
}

export default Search;
