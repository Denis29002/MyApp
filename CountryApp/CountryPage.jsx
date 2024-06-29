import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "./country.module.css";
import axios from "axios";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function CountryPage({ theme }) {
  const [country, setCountry] = useState(null);
  const [abroadCounries, setAbroadCounties] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getCountry();
    getAbroadCountries();
  }, [name]);

  const getCountry = async () => {
    try {
      const list = await axios.get(`https://restcountries.com/v2/name/${name}`);
      setCountry(list.data);

      await getAbroadCountries();
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log(theme, "мфа");

  const getAbroadCountries = async () => {
    try {
      const list = await axios.get(
        `https://restcountries.com/v2/alpha?codes=${country?.borders}`
      );
      setAbroadCounties(list.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const goBack = () => {
    navigate("/");
  };

  console.log(abroadCounries, "countrfasfy!!!");
  return (
    <div
      className={
        theme === "white"
          ? style.containerPage_lighth_mode
          : style.containerPage_dark_mode
      }
    >
      <Menu />
      <button onClick={goBack}>Back</button>
      {country?.map((el) => (
        <div className={style.country_block_el}>
          <img src={el.flag} />
          <div className={style.country_page_block}>
            <h1>{el?.name}</h1>
            <h2>Native name: {el?.nativeName}</h2>
            <h2>Region: {el?.subregion}</h2>
            <h2>Subregion: {el?.region}</h2>
            <h2>Captial: {el?.capital}</h2>
            <h2>Area: {el?.area}</h2>
            <h2>Population: {el?.population}</h2>
            <div className={style.country_page_buttons}>
              <h2>
                Abroad countries:{" "}
                {abroadCounries?.map((el) => (
                  <Link
                    to={`/countrypage/${el.name}`}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <button>{el.name}</button>
                  </Link>
                ))}{" "}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountryPage;
