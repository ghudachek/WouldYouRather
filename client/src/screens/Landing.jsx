import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../designs/Landing.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Landing = (props) => {
  console.log(props.questions);

  return (
    <>
      {props.questions.length == 0 ? (
        <p>
          Loading
          {console.log("not loading")}
        </p>
      ) : (
        <div>
          <Carousel>
            <Carousel.Item>
              <div className="d-block">
                <button className="block1">{props.questions[0].choice1}</button>
                <button className="block2">{props.questions[0].choice2}</button>
                <div className="info-wyr">
                  <h3>
                    Would you rather {props.questions[0].choice1} or{" "}
                    {props.questions[0].choice2}
                  </h3>
                  <Link to="/join">
                    <button className="join">Join The Debate</button>
                  </Link>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-block">
                <button className="block1">{props.questions[1].choice1}</button>
                <button className="block2">{props.questions[1].choice2}</button>
                <div className="info-wyr">
                  <h3>
                    Would you rather {props.questions[1].choice1} or{" "}
                    {props.questions[1].choice2}
                  </h3>
                  <Link to="/join">
                    <button className="join">Join The Debate</button>
                  </Link>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      )}
    </>
  );
};

export default Landing;
