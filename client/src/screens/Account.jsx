import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getUser, getUserQuestions } from "../services/users";

import "../designs/Account.css";
const Account = (props) => {
  const [userQuestions, setUserQuestions] = useState();
  const [userComments, setUserComments] = useState();
  const userQuestionData = [];
  const userCommentData = [];

  useEffect(() => {
    function fetchUserQuestions() {
      props.questions?.map((question) => {
        if (question.user_id === props.user.id) {
          userQuestionData.push(question);
        }
      });
      setUserQuestions(userQuestionData);
    }
    fetchUserQuestions();
  }, [props.handleDelete]);

  useEffect(() => {
    function fetchUserComments() {
      props.comments?.map((comment) => {
        if (comment.user_id === props.user.id) {
          userCommentData.push(comment);
        }
      });
      setUserComments(userCommentData);
    }
    fetchUserComments();
  }, [props.handleCommentDelete]);

  return (
    <>
      <div className="account">
        <h1 className="welcome">Welcome {props.user?.username}!</h1>
        <div className="acct-info">
          <h2>Your Information:</h2>
          <div
            className="round"
            style={{ backgroundImage: `url(${props.user?.image})` }}
          ></div>
          <p>Email: {props.user?.email}</p>
          <p>Username: {props.user?.username}</p>
        </div>
        <div className="comments">
          Your Comments:{" "}
          {userComments?.map((comment) => (
            <div className="one-comment">
              <p>{comment.post}</p>
            </div>
          ))}
        </div>
        <div className="user-wyr">
          <h2>Your W.Y.Rs:</h2>
          {userQuestions?.map((question) => (
            <div className="one-wyr">
              <h4>Would You Rather</h4>
              <div className="user-block-1">Choice 1: {question.choice1}</div>
              or
              <div className="user-block-2">Choice 2: {question.choice2}</div>
              <button onClick={() => props.handleDelete(question.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;
