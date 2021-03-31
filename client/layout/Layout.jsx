import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Would You Rather</h1>
        </Link>
        {currentUser ? (
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to="/Account">Account</Link>
          <Link to="/create">Write Your Own</Link>
          <hr />
        </>
      )}
      {props.children}
    </div>
  );
}
