import React from "react";
import "../designs/Home.css";
import { QuestionCard } from "./QuestionCard";

const Home = (props) => {
  return (
    <>
      <div className="questions-div">
        {props.questions?.map((question) => (
          <QuestionCard question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
