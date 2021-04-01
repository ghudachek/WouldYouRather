import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { getAllQuestions } from "../services/questions";
import {
  postComment,
  getAllComments,
  destroyComment,
} from "../services/comments";
import Landing from "../screens/Landing";

export default function MainContainer(props) {
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionData = await getAllQuestions();
      setQuestions(questionData);
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      const commentData = await getAllComments();
      setComments(commentData);
    };
    fetchComments();
  }, []);

  const handleCreate = async (commentData) => {
    const newComment = await postComment(commentData);
    setComments((prevState) => [...prevState, newComment]);
    history.push("/comments");
  };

  const handleDelete = async (id) => {
    await destroyComment(id);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id)
    );
  };
  return (
    <Switch>
      <Route path="/">
        <Landing questions={questions} />
      </Route>
      {/* <Route path="/home">
        <Home handleCreate={handleCreate} />
      </Route>
      <Route path="/question/create">
        <QuestionCreate />
      </Route>
      <Route path="/question/:id">
        <QuestionDetails />
      </Route>
      <Route path="/question/edit/:id">
        <QuestionEdit />
      </Route>
      <Route path="/account/:id">
        <Account />
      </Route> */}
    </Switch>
  );
}
