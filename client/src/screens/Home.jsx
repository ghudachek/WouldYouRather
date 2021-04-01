import React from "react";
import {} from "module";
import "./Home.css";
const Home = (props) => {
  return (
    <>
      {props.questions.length !== 0 ? (
        <div>
          <p>This is the Home page</p>
          {props.questions.map((question) => (
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
      ) : (
        <p>loading</p>
      )}
    </>
  );
};

export default Home;