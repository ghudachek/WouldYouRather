import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const EditProfile = (props) => {
  const { user, handleUpdateUser } = props;
  const history = useHistory();
  const [formData, setFormData] = useState({
    image: "",
  });
  const { image } = formData;
  const images = [
    "https://images.unsplash.com/photo-1466921583968-f07aa80c526e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1605054576990-8d1d1e623fad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1600104313637-46f931c4bf5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1567789352758-9e3dc54b3ae3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1583483647399-d36d50d34104?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };
  return (
    <form
      className="acct-info"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdateUser(user?.id, formData);
      }}
    >
      <h2>Your Information:</h2>
      <div
        className="round"
        style={{ backgroundImage: `url(${user?.image})` }}
      ></div>
      <label>
        Choose a New Image:
        {images.map((image) => (
          <input
            type="button"
            name="image"
            value={image}
            onClick={handleChange}
            style={{
              backgroundImage: `url(${image})`,
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "2px solid pink",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        ))}
      </label>
      <br />
      <button>Submit</button>
      <Link to="/account">Cancel</Link>
    </form>
  );
};

export default EditProfile;
