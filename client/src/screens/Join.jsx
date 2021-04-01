import { useState } from "react";

export default function Join(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { username, email, password, passwordConfirm } = formData;
  const { handleJoin } = props;

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
        handleJoin(formData);
      }}
    >
      <h3>Join</h3>
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
      <label>
        Password Confirm:
        <input
          type="password"
          name="passwordConfrim"
          value={passwordConfirm}
          onChange={handleChange}
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}
