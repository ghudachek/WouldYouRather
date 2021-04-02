import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import {
  getAllQuestions,
  postQuestion,
  destroyQuestion,
} from "../services/questions";
import {
  postComment,
  getAllComments,
  destroyComment,
} from "../services/comments";
import Landing from "../screens/Landing";
import Home from "../screens/Home";
import Create from "../screens/CreateQuestion";
import Account from "../screens/Account";
import QuestionEdit from "../screens/QuestionEdit";

export default function MainContainer(props) {
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionData = await getAllQuestions();
      setQuestions(questionData);
      console.log("grabbed questions" + questions);
    };
    fetchQuestions();
    console.log("grabbed questions" + questions);
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentData = await getAllComments();
      setComments(commentData);
    };
    fetchComments();
  }, []);

  const handleCreateQuestions = async (questionData) => {
    const newQuestion = await postQuestion(questionData);
    setQuestions((prevState) => [...prevState, newQuestion]);
    history.push("/home");
  };

  const handleDelete = async (id) => {
    await destroyQuestion(id);
    setQuestions((prevState) =>
      prevState.filter((question) => question.id !== id)
    );
    history.push("/home");
  };
  return (
    <Switch>
      <Route exact path="/">
        <Landing questions={questions} />
      </Route>
      <Route path="/home">
        <Home questions={questions} comments={comments} />
      </Route>
      <Route exact path="/create">
        <Create
          currentUser={currentUser}
          handleCreate={handleCreateQuestions}
        />
      </Route>
      <Route exact path="/account">
        <Account user={currentUser} handleDelete={handleDelete} />
      </Route>
      <Route exact path="/edit/:id">
        <QuestionEdit user={currentUser} />
      </Route>
    </Switch>
  );
}
