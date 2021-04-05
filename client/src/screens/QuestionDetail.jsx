import React from "react";
import CommentCreate from "./CommentCreate";
import { getAllUsers } from "../services/users";
import { useState, useEffect } from "react";
import { getOneQuestion } from "../services/questions";
import { Link, useParams } from "react-router-dom";
import "../designs/QuestionDetail.css";
import "material-design-icons";

const QuestionDetail = (props) => {
  const [question, setQuestion] = useState("");
  const [users, setUsers] = useState();
  const { percentage1, percentage2 } = props;
  const { id } = useParams();
  useEffect(() => {
    const fetchUsers = async () => {
      const userData = await getAllUsers();
      setUsers(userData);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchQuestion = async () => {
      const questionData = await getOneQuestion(id);
      setQuestion(questionData);
    };
    fetchQuestion();
  }, [id]);

  return (
    <div className="question-div-detail">
      {question ? (
        <>
          <div className="question-card-detail">
            <button className="likes">Like</button>
            <br />
            <button
              className="choice1-detail"
              style={{ height: `${percentage1 ? percentage1 * 50 : 20}vh` }}
            >
              {percentage1
                ? question.choice1 + " " + percentage1 * 100 + "%"
                : question.choice1}
            </button>
            <button
              className="choice2-detail"
              style={{ height: `${percentage2 ? percentage2 * 50 : 20}vh` }}
            >
              {percentage2
                ? question.choice2 + " " + percentage2 * 100 + "%"
                : question.choice2}
            </button>
            <h3 className="q-detail-descript">
              Would You Rather: {question.choice1} or {question.choice2}
            </h3>
          </div>
          <br />
          <h3 className="comment-title-details">Debate:</h3>
          <div className="comment-section">
            {props.comments.length !== 0
              ? props.comments.map((comment) => {
                  if (
                    comment.question_id === question.id &&
                    comment.user_id !== props.currentUser.id
                  ) {
                    return (
                      <div key={comment.post} className="comments-detail">
                        <h4 className="username-detail">
                          {users?.map((user) =>
                            user.id === comment.user_id ? user.username : null
                          )}
                        </h4>
                        <h4>{comment.post}</h4>
                      </div>
                    );
                  } else if (
                    comment.question_id === question.id &&
                    comment.user_id === props.currentUser.id
                  ) {
                    return (
                      <div key={comment.post} className="you-comments-detail">
                        <h4 className="you-username-detail">
                          {users?.map((user) =>
                            user.id === comment.user_id ? user.username : null
                          )}
                        </h4>
                        <h4>{comment.post}</h4>
                      </div>
                    );
                  }
                })
              : null}
          </div>
          <CommentCreate
            handleCreate={props.handleCreateComments}
            questionId={question.id}
          />
          <Link className="details-back-link" to="/home">
            <span className="material-icons md-48">arrow_back</span>
          </Link>
        </>
      ) : null}
    </div>
  );
};
export default QuestionDetail;
