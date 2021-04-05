import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../designs/Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3 className="login-form-title">Login</h3>
      <label className="login-label">
        Username:
        <input
          className="login-input"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="login-label">
        Password:
        <input
          className="login-input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button className="submit-btn">Submit</button>
      <br />
      <Link className="or-join" to="/join">
        or Join{" "}
      </Link>
    </form>
  );
}
