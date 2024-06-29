import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./movies.module.css";
import { v4 as uuidv4 } from "uuid";
import Comments from "./Comments";

const initialComments = JSON.parse(localStorage.getItem("comments") || "{}");
const getFormatDate = (date) => {
  return `Date: ${
    date.getMonth() + 1
  }.2024      ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

function Movie() {
  const [film, setFilm] = useState(null);
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const ourComments = comments[id] || [];

  const goBack = () => navigate("/");
  const getFilm = async () => {
    try {
      const list = await axios.get(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      setFilm(list.data.data.movie);
    } catch (e) {
      console.log(e.message);
    }
  };

  console.log(new Date().getMonth());

  const addComments = (e) => {
    e.preventDefault();

    const newComment = {
      id: uuidv4(),
      date: getFormatDate(new Date()),
      text: comment,
    };
    setComments({ ...comments, [id]: [...ourComments, newComment] });
    setComment("");
  };

  const deleteSelectComments = (commentId) => {
    const fiteredComments = ourComments.filter((el) => el.id !== commentId);
    setComments({ ...comments, [id]: fiteredComments });
  };

  console.log(comments);

  useEffect(() => {
    getFilm();
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  if (!film) return <h3>Loading...</h3>;

  return (
    <div className={style.container_movie}>
      <div></div>
      <div className={style.container_movie_info}>
        <h1>{film.title}</h1>
        <img src={film.large_cover_image} />
        <h2>{film.rating !== 0 ? film.rating : "W/R"} ⭐</h2>
        <p>{film.description_full}</p>
        <button onClick={goBack}>Go back</button>
      </div>
      <h2>Comments: </h2>
      <div className={style.comments_container}>
        <Comments
          ourComments={ourComments}
          addComments={addComments}
          deleteSelectComments={deleteSelectComments}
          comment={comment}
          setComment={setComment}
        />
      </div>
    </div>
  );
}

export default Movie;
