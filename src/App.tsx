import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import TheLayout from "./Component/Container/TheLayout";
//import history from "./assets/utils/history";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <TheLayout />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
