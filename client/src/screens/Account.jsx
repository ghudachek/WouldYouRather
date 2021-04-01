import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserQuestions } from "../services/users";

const Account = (props) => {
  const [userQuestions, setUserQuestions] = useState();

  useEffect(() => {
    const fetchUserQuestions = async () => {
      const userQuestionData = await getUserQuestions();
      setUserQuestions(userQuestionData);
    };
    fetchUserQuestions();
  }, []);

  console.log(props.user);

  return (
    <>
      <div>
        <p>
          This is the Account page <br /> Welcome {props.user?.username}!
        </p>
        <h2>Your Information:</h2>
        <p>Email:{props.user?.email}</p>
        <p>Username:{props.user?.username}</p>
        <img src={props.user?.img} alt="profile-pic" />
        <button>Delete Account</button>
        <div className="user-wyr">
          <h2>Your WYRs:</h2>
          {userQuestions?.map((question) => (
            <>
              <h4>Would You Rather</h4>
              <div className="user-block-1">Choice 1: {question.choice1}</div>
              or
              <div className="user-block-2">Choice 2: {question.choice2}</div>
              <button>Delete</button>
              <Link to="/edit/:id">
                <button>Edit</button>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;
