import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./movies.module.css";
import { Link } from "react-router-dom";
import { FaCirclePlay } from "react-icons/fa6";
import Pagination from "./Pagination";

function Movies() {
  const [films, setFilms] = useState([]);

  const [page, setPage] = useState(1);
  let pages = films.length;

  console.log(films);

  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async () => {
    try {
      const list = await axios.get(
        `https://yts.mx/api/v2/list_movies.json?limit=200&page=${page}`
      );
      setFilms(list.data.data.movies);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={style.container_movies}>
      <h1>Best movies 2024</h1>

      <div className={style.list_movies}>
        {films.map((el) => (
          <div key={el.id} className={style.box_movie}>
            <p>{el.title}</p>
            <div className={style.box_play}>
              <img
                style={{ backgroundImage: `URL(${el.medium_cover_image})` }}
              ></img>
              <a className={style.play} href="#">
                <FaCirclePlay />
              </a>
            </div>

            <p>Release: {el.year}</p>
            <p>{el.rating !== 0 ? el.rating : "W / R"} ⭐</p>
            <ul>
              {el.genres?.map((el) => (
                <li>{el}</li>
              ))}
            </ul>
            <Link
              to={`movie/${el.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <button>About Film</button>
            </Link>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} pages={pages} />
    </div>
  );
}

export default Movies;
