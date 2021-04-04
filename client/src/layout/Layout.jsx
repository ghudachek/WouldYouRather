import React from "react";
import { Link } from "react-router-dom";

import "../designs/Layout.css";

const Layout = (props) => {
  const { currentUser, handleLogout } = props;

  const userOptions = (
    <>
      <Link className="title-link" to="/home">
        <h1 className="logo-title">Would You Rather?</h1>
      </Link>
      <div className="links">
        <p>Hello {currentUser?.username}</p>
        <Link to="/account">Account</Link>
        <br />
        <Link to="/create">Write Your Own</Link>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );

  const nonUserOptions = (
    <>
      <Link className="title-link" to="/">
        <h1 className="logo-title">Would You Rather</h1>
      </Link>
      <Link to="/login" className="login">
        Login/Join
      </Link>
    </>
  );

  return (
    <div className="layout">
      <header className="header-layout">
        {currentUser ? userOptions : nonUserOptions}
      </header>
      <div className="children">{props.children}</div>
    </div>
  );
};

export default Layout;
