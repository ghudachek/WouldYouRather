import React from "react";
import { Link } from "react-router-dom";
import "../designs/Layout.css";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="layout">
      <header>
        {currentUser ? (
          <>
            <Link className="title-link" to="/home">
              <h1 className="logo-title">Would You Rather?</h1>
            </Link>
            <div className="links">
              <p>Hello {currentUser.username}</p>
              <Link to="/account">Account</Link>
              <br />
              <Link to="/create">Write Your Own</Link>
              <button className="logout" onClick={handleLogout}>
                Logout
              </button>
            </div>
            <hr />
          </>
        ) : (
          <>
            <Link className="title-link" to="/">
              <h1 className="logo-title">Would You Rather</h1>
            </Link>
            <Link to="/login" className="login">
              Login/Join
            </Link>
          </>
        )}
      </header>

      {props.children}
    </div>
  );
}
