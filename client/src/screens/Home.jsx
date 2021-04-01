import React from "react";
import {} from "module";
import "../designs/Home.css";
const Home = (props) => {
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
