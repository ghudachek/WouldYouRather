import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postAnswer, putAnswer } from "../services/answers";

export const QuestionCard = (props) => {
  const { question } = props;
  const [style1, setStyle1] = useState("choice1");
  const [style2, setStyle2] = useState("choice2");
  const [answers, setAnswers] = useState([]);
  const [choice1, setChoice1] = useState();
  const [choice2, setChoice2] = useState();
  const history = useHistory();

  function groupAnswers() {
    question.answers?.map((ans) => {
      if (ans.choice === "1") {
        setChoice1(choice1 + 1);
      } else if (ans.choice === "2") {
        setChoice2(choice2 + 1);
      }
      return console.log(choice1, choice2);
    });
  }

  const handleCreateAnswers = async (id, answer) => {
    const newAnswer = await postAnswer(id, answer);
    setAnswers((prevState) => [...prevState, newAnswer]);
    groupAnswers();
    history.push("/home");
  };

  function handlePicked1() {
    setStyle1("picked");
  }
  function handlePicked2() {
    setStyle2("picked");
  }

  return (
    <form className="question-card">
      <button className="likes">Like</button>
      <br />
      <input
        type="button"
        value={question.choice1}
        className={style1}
        onClick={(e) => {
          e.preventDefault();
          handleCreateAnswers(question.id, { choice: "1" });
          handlePicked1();
        }}
      ></input>
      <input
        type="button"
        value={question.choice2}
        className={style2}
        onClick={(e) => {
          e.preventDefault();
          handleCreateAnswers(question.id, { choice: "2" });
          handlePicked2();
        }}
      ></input>
      <h3>
        Would You Rather: {question.choice1} or {question.choice2}
      </h3>
      <Link to={`/questions/${question.id}/detail`}>See Debate</Link>
    </form>
  );
};
