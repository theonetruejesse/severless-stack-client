import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from './containers/NotFound'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" render={() => (<Home />)} />
      <Route exact path="/login" render={() => (<Login />)} />
      <Route render={() => (<NotFound />)} />
    </Switch>
  );
}