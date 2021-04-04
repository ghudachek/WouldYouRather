import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const QuestionCard = (props) => {
  const { question, handleCreateAnswers } = props;
  const [percentage1, setPercentage1] = useState();
  const [percentage2, setPercentage2] = useState();
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    function percent() {
      const temp1 = question.answers.filter((answer) => {
        return answer.choice === "1";
      });
      const temp2 = question.answers.filter((answer) => {
        return answer.choice === "2";
      });
      setPercentage1(temp1.length / question.answers.length);
      setPercentage2(temp2.length / question.answers.length);
    }
    percent();
  }, [question]);

  return (
    <form className="question-card">
      <button className="likes">Like</button>
      <br />
      <input
        style={answered ? { height: `${percentage1 * 50}vh` } : {}}
        type="button"
        value={
          answered
            ? question.choice1 + " " + percentage1 * 100 + "%"
            : question.choice1
        }
        className="choice1"
        onClick={(e) => {
          e.preventDefault();
          handleCreateAnswers(question.id, { choice: "1" });
          setAnswered(true);
        }}
      ></input>
      <input
        type="button"
        style={answered ? { height: `${percentage2 * 50}vh` } : {}}
        value={
          answered
            ? question.choice2 + " " + percentage2 * 100 + "%"
            : question.choice2
        }
        className="choice2"
        onClick={(e) => {
          e.preventDefault();
          handleCreateAnswers(question.id, { choice: "2" });
          setAnswered(true);
        }}
      ></input>
      <div className="question-description">
        <h3>
          Would You Rather: {question.choice1} or {question.choice2}
        </h3>
        <Link to={`/questions/${question.id}/detail`}>
          <button className="debate"> See Debate</button>
        </Link>
      </div>
    </form>
  );
};
