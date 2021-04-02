import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../designs/Home.css";
import { getAnswers, postAnswer, putAnswer } from "../services/answers";

const Home = (props) => {
  const [answers, setAnswers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchAnswers = async () => {
      const answerData = await getAnswers();
      setAnswers(answerData);
    };
    fetchAnswers();
    console.log(answers);
  }, []);

  const handleCreateAnswers = async (id, answer) => {
    const newAnswer = await postAnswer(id, answer);
    setAnswers((prevState) => [...prevState, newAnswer]);
    history.push("/home");
  };
  const handleUpdateAnswer = async (id, answer) => {
    const updatedAnswer = await putAnswer(id, answer);
    setAnswers((prevState) => [...prevState, updatedAnswer]);
  };

  return (
    <>
      <div className="questions-div">
        {props.questions?.map((question) => (
          <form className="question-card">
            <button className="likes">Like</button>
            <br />
            <input
              type="button"
              value={question.choice1}
              className="choice1"
              onClick={(e) => {
                e.preventDefault();
                handleCreateAnswers(question.id, { choice: "1" });
              }}
            ></input>
            <input
              type="button"
              value={question.choice2}
              className="choice2"
              onClick={(e) => {
                e.preventDefault();
                handleCreateAnswers(question.id, { choice: "2" });
              }}
            ></input>
            <h3>
              Would You Rather: {question.choice1} or {question.choice2}
            </h3>
            <Link to={`/questions/${question.id}/detail`}>See Debate</Link>
          </form>
        ))}
      </div>
    </>
  );
};

export default Home;
