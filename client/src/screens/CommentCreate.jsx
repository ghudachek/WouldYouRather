import React from "react";
import { useState } from "react";
import "material-design-icons";

const CommentCreate = (props) => {
  const { handleCreate, questionId } = props;
  const [commentData, setCommentData] = useState({
    post: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="comment-create-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(questionId, commentData);
        commentData.post = "";
      }}
    >
      <input
        className="comment-create"
        placeholder="Comment"
        type="text-area"
        name="post"
        value={commentData.post}
        onChange={handleChange}
      ></input>

      <button className="send">
        <span className="material-icons md-48">send</span>
      </button>
    </form>
  );
};

export default CommentCreate;
