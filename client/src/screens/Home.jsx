import React from "react";
import {} from "module";
import "../designs/Home.css";
import { getAllUsers } from "../services/users";
import { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
const Home = (props) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setUsers(userData);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className="questions-div">
        {props.questions?.map((question) => (
          <div className="question-card">
            <button className="likes">Like</button>
            <br />
            <button className="choice1">{question.choice1}</button>
            <button className="choice2">{question.choice2}</button>
            <h3>
              Would You Rather: {question.choice1} or {question.choice2}
            </h3>
            {props.comments.length !== 0
              ? props.comments.map((comment) => {
                  if (comment.question_id === question.id) {
                    return (
                      <>
                        <h4>
                          {users?.map((user) =>
                            user.id === comment.user_id ? user.username : null
                          )}
                        </h4>
                        <h4>{comment.post}</h4>
                      </>
                    );
                  }
                })
              : null}
            <CommentCreate
              handleCreate={props.handleCreateComments}
              questionId={question.id}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
