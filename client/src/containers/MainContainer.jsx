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
import QuestionDetail from "../screens/QuestionDetail";
import EditProfile from "../screens/EditProfile";
import { postAnswer } from "../services/answers";

export default function MainContainer(props) {
  const [questions, setQuestions] = useState([]);
  const [comments, setComments] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  const handleCreateAnswers = async (id, answer) => {
    const newQuestion = await postAnswer(id, answer);
    setQuestions((prevState) =>
      prevState.map((question) => {
        return question.id === id ? newQuestion : question;
      })
    );
  };

  const handleCreateQuestions = async (questionData) => {
    const newQuestion = await postQuestion(questionData);
    setQuestions((prevState) => [...prevState, newQuestion]);
    history.push("/home");
  };

  const handleCreateComments = async (id, commentData) => {
    const newComment = await postComment(id, commentData);
    setComments((prevState) => [...prevState, newComment]);
  };
  const handleDeleteComment = async (id1, id2) => {
    await destroyComment(id1, id2);
    setComments((prevState) =>
      prevState.filter((comment) => comment.id !== id2)
    );
    history.push("/account");
  };
  const handleDelete = async (id) => {
    await destroyQuestion(id);
    setQuestions((prevState) =>
      prevState.filter((question) => question.id !== id)
    );
    history.push("/account");
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionData = await getAllQuestions();
      setQuestions(questionData);
    };
    const fetchComments = async () => {
      const commentData = await getAllComments();
      setComments(commentData);
    };
    fetchQuestions();
    fetchComments();
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Landing questions={questions !== []&& questions} />
      </Route>
      <Route path="/home">
        <Home
          currentUser={currentUser}
          questions={questions}
          comments={comments}
          handleCreateComments={handleCreateComments}
          handleCreateAnswers={handleCreateAnswers}
        />
      </Route>
      <Route exact path="/create">
        <Create
          currentUser={currentUser}
          handleCreate={handleCreateQuestions}
        />
      </Route>
      <Route exact path="/account">
        <Account
          comments={comments}
          user={currentUser}
          handleDelete={handleDelete}
          questions={questions}
          handleDeleteComment={handleDeleteComment}
        />
      </Route>
      <Route path="/questions/:id/detail">
        <QuestionDetail
          currentUser={currentUser}
          questions={questions}
          comments={comments}
          handleCreateComments={handleCreateComments}
        />
      </Route>
      <Route path="/user/edit">
        <EditProfile
          user={currentUser}
          handleUpdateUser={props.handleUpdateUser}
        />
      </Route>
    </Switch>
  );
}
