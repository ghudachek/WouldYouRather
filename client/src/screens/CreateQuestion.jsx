import React from "react";
import { useState } from "react";
import { CirclePicker } from "react-color";

const CreateQuestion = (props) => {
  const [formData, setFormData] = useState({
    choice1: "",
    choice2: "",
  });
  const { choice1, choice2 } = formData;
  const [color, setColor] = useState();
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
      onSubmit={(e) => {
        e.preventDefault();
        handleCreate(formData);
      }}
    >
      <h3>Would You Rather...</h3>
      <label>
        Choice One:
        <input
          type="text"
          name="choice1"
          value={choice1}
          placeholder='"live at the Beach"'
          onChange={handleChange}
        />
      </label>
      <h4>or</h4>
      <label>
        Choice Two:
        <input
          type="text"
          name="choice2"
          value={choice2}
          placeholder='"live in the mountains"'
          onChange={handleChange}
        />
      </label>
      <CirclePicker block />
      <br />
      <button>Create</button>
    </form>
  );
};

export default CreateQuestion;
