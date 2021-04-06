import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "material-design-icons";

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
        if (comment.user_id === props.user?.id) {
          userCommentData.push(comment);
        }
      });
      setUserComments(userCommentData);
    }
    fetchUserComments();
  }, [props.handleDeleteComment]);

  return (
    <>
      <div className="account">
        <h1 className="welcome">Welcome {props.user?.username}!</h1>
        <div className="row">
          <div className="acct-info">
            <h2 className="account-titles">Your Information:</h2>
            <div
              className="round"
              style={{ backgroundImage: `url(${props.user?.image})` }}
            ></div>
            <p>Email: {props.user?.email}</p>
            <p>Username: {props.user?.username}</p>
            <Link className="edit-user" to="/user/edit">
              Edit Profile
            </Link>
          </div>

          <div className="comments">
            <h2 className="account-titles">Your Comments:</h2>
            {userComments?.map((comment) => (
              <div className="one-comment">
                <p className="comment">{comment.post}</p>
                <button
                  className="delete-wyr"
                  onClick={() =>
                    props.handleDeleteComment(comment.question_id, comment.id)
                  }
                >
                  <span className="material-icons md-36">delete</span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="user-wyr">
          <h2 className="account-titles">Your W.Y.Rs:</h2>
          {userQuestions?.map((question) => (
            <div className="one-wyr">
              <div>
                <span className="span">Would You Rather</span>
                <button
                  className="delete-wyr"
                  onClick={() => props.handleDelete(question.id)}
                >
                  <span className="material-icons md-36">delete</span>
                </button>
              </div>
              <div className="user-block-1">Choice 1: {question.choice1}</div>
              or
              <div className="user-block-2">Choice 2: {question.choice2}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Account;
