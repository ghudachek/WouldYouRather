import React from "react";
import { useState } from "react";
import "../designs/CreateQuestion.css";

const CreateQuestion = (props) => {
  const [formData, setFormData] = useState({
    choice1: "",
    choice2: "",
  });
  const { choice1, choice2 } = formData;
  const { handleCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="create-q"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3 className="wyr-cq">Would You Rather...</h3>
      <label className="label-q">
        Choice One:
        <input
          className="creat-q-input"
          type="text"
          name="choice1"
          value={choice1}
          placeholder='"live at the Beach"'
          onChange={handleChange}
        />
      </label>
      <h4 className="or">or</h4>
      <label className="label-q">
        Choice Two:
        <input
          className="creat-q-input"
          type="text"
          name="choice2"
          value={choice2}
          placeholder='"live in the mountains"'
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="create-btn">Create</button>
    </form>
  );
};

export default CreateQuestion;
