import React from "react";
import { useState } from "react";

const CommentCreate = (props) => {
  const { handleCreate, questionId, userId } = props;
  const [commentData, setCommentData] = useState({
    post: "",
  });
  //const { post } = commentData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(questionId, commentData);
        console.log(commentData);
      }}
    >
      <label>
        Comment:
        <input
          type="text"
          name="post"
          value={commentData.post}
          onChange={handleChange}
        ></input>
      </label>
      <button>Send</button>
    </form>
  );
};

export default CommentCreate;
