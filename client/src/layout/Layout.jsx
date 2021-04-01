import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        {currentUser ? (
          <>
            <Link to="/home">
              <h1>Would You Rather</h1>
            </Link>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/">
              <h1>Would You Rather</h1>
            </Link>
            <Link to="/login">Login/Join</Link>
          </>
        )}
      </header>
      <hr />
      {currentUser && (
        <>
          <Link to="/account">Account</Link>
          <br />
          <Link to="/create">Write Your Own</Link>
          <hr />
        </>
      )}
      {props.children}
    </div>
  );
}
