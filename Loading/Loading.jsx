import React, { useState, useEffect } from "react";
import axios from "axios";

function Loading() {
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getComment = async () => {
    setLoading(true);
    const res = await axios(
      `https://jsonplaceholder.typicode.com/comments?_limit=6&_page=${page}`
    );
    setLoading(false);
    setComments([...comments, ...res.data]);
  };

  useEffect(() => {
    getComment();
  }, [page]);

  const showMoreComments = () => {
    setPage(page + 1);
  };

  console.log(comments);

  return (
    <div className="loading_container">
      <div className="loading_container__comments">
        {comments.map((el) => (
          <div>
            <h3>{el.name}</h3>
            <p>{el.email}</p>
            <p>{el.body}</p>
          </div>
        ))}
      </div>
      <button onClick={showMoreComments}>
        {loading ? "Загрузка..." : "Загрузить ещё"}
      </button>
    </div>
  );
}

export default Loading;
