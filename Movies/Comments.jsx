import React from "react";
import style from "./movies.module.css";
import { MdDelete } from "react-icons/md";
import { MdSend } from "react-icons/md";

function Comments({
  ourComments,
  deleteSelectComments,
  addComments,
  comment,
  setComment,
}) {
  return (
    <div>
      {" "}
      <div className={style.comments_container}>
        {ourComments.length < 1 ? (
          <h1>No coments!</h1>
        ) : (
          <div>
            {ourComments.map((el) => (
              <div className={style.comment}>
                <h2>{el.date}</h2>
                <p>{el.text}</p>
                <button onClick={() => deleteSelectComments(el.id)}>
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <form>
        <div className={style.comments}>
          <textarea
            placeholder="Add comment..."
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <button onClick={addComments} disabled={comment.trim().length < 5}>
            <MdSend />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Comments;
