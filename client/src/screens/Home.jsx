import React from "react";
import {} from "module";
import "../designs/Home.css";
const Home = (props) => {
  return (
    <>
      <div>
        <p>This is the Home page</p>
        {props.questions?.map((question) => (
          <>
            <h2>Would You Rather:</h2>
            <h3>
              {question.choice1} or {question.choice1}
            </h3>
            <button className="choice">{question.choice1}</button>
            <button className="choice">{question.choice2}</button>
            <button className="likes">Like</button>
          </>
        ))}
      </div>
    </>
  );
};

export default Home;
