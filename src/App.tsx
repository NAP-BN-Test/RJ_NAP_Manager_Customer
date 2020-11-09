import React, { Component, Suspense, useState } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "antd/dist/antd.css";
import "./index.css";
import TheLayout from "./Component/Container/TheLayout";

function App() {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" render={() => <TheLayout />}></Route>
      </Switch>
    </Router>
  );
}

export default App;