import React, { useEffect, useState } from "react";
import style from "./country.module.css";
import Menu from "./Menu";
import axios from "axios";
import List from "./List";
import Search from "./Search";
import Settings from "./Settings";
import { MdSmsFailed } from "react-icons/md";

function Countries() {
  const [theme, setTheme] = useState("white");
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState("");
  const [paramsFilter, setParamsFilter] = useState("All");

  const getCountries = async () => {
    try {
      const list = await axios.get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,population,region,alpha3Code&limit=10$page=2"
      );
      setCountries(list.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  let filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(text.toLowerCase())
  );
  const changeTheme = () => {
    if (theme === "white") {
      setTheme("black");
    } else setTheme("white");
  };

  const getFilteredAndSortedCounries = () => {
    if (paramsFilter === "All") {
      return filteredCountries;
    } else {
      return filteredCountries.filter(
        (country) => country.region === paramsFilter
      );
    }
  };

  const filteredAndSortedCountries = getFilteredAndSortedCounries();

  const changeParam = (value) => {
    setText("");
    setParamsFilter(value);
  };
  console.log(theme);

  console.log(filteredAndSortedCountries, "123");
  return (
    <div
      className={
        theme === "white"
          ? style.container_lighth_mode
          : style.container_dark_mode
      }
    >
      <Menu theme={theme} setTheme={setTheme} changeTheme={changeTheme} />

      <div className={style.settings}>
        <Search text={text} setText={setText} />
        <Settings setParamsFilter={setParamsFilter} changeParam={changeParam} />
      </div>
      {filteredAndSortedCountries.length > 0 ? (
        <List
          changeTheme={changeTheme}
          getFilteredAndSortedCounries={getFilteredAndSortedCounries}
          theme={theme}
        />
      ) : (
        <div className={style.event_not_found}>
          <p>Not found...</p>
          <MdSmsFailed />
        </div>
      )}
    </div>
  );
}

export default Countries;
