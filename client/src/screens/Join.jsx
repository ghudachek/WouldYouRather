import { useState } from "react";
import "../designs/Join.css";
import { Link } from "react-router-dom";
export default function Join(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });
  const { username, email, password, image } = formData;
  const { handleJoin } = props;
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
  };

  return (
    <form
      className="join"
      onSubmit={(e) => {
        e.preventDefault();
        handleJoin(formData);
      }}
    >
      <h3 className="join-title">Join</h3>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="join-img">
        Choose Your Image:
        <br />
        {images.map((image) => (
          <input
            className="images-join"
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
      <button className="submit-btn-join">Submit</button>
      <Link className="login-link" to="/login">
        or Login
      </Link>
    </form>
  );
}
