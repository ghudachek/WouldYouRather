import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

export default function MainContainer(props) {
  return (
    <Switch>
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/home">
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
      </Route>
    </Switch>
  );
}
