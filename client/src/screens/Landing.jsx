import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Landing = (props) => {
  console.log(props.questions);
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <div className="question1">
            <div className="block1">{props.questions[0].choice1}</div>
            <div className="block2">{props.questions[0].choice2}</div>
          </div>
          <Carousel.Caption>
            <h3>Would you rather...</h3>
            <p>
              {props.questions[0].choice1} or {props.questions[0].choice2}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="question1">
            <div className="block1">{props.questions[1].choice1}</div>
            <div className="block2">{props.questions[1].choice2}</div>
          </div>
          <Carousel.Caption>
            <h3>Would you rather...</h3>
            <p>
              {props.questions[1].choice1} or {props.questions[1].choice2}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Landing;
