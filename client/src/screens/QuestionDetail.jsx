import React from "react";
import CommentCreate from "./CommentCreate";
import { getAllUsers } from "../services/users";
import { useState, useEffect } from "react";
import { getOneQuestion } from "../services/questions";
import { Link } from "react-router-dom";
const QuestionDetail = (props) => {
  const [question, setQuestion] = useState([]);
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setUsers(userData);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchQuestion = async (id) => {
      const questionData = await getOneQuestion(id);
      setQuestion(questionData);
    };
    fetchQuestion();
  }, []);

  return (
    <div className="question-div">
      {question ? (
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
            userId={props.currentUser.id}
          />
          <Link to="/home">Home</Link>
        </div>
      ) : null}
      s
    </div>
  );
};
export default QuestionDetail;
