import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import TheLayout from "./Component/Container/TheLayout";
import { history } from "./assets/utils/history";
import { RootState } from "./redux/reducers/index.reducer";
import { useSelector } from "react-redux";
import LoginScreen from "./View/Login";
// import Page404 from "./View/404page/Page404";

function App() {
  // const auth: any = useSelector((state: RootState) => state.auth);
  // console.log("auth", auth);
  console.log("user", localStorage.getItem("user"));
  const str: string | null = localStorage.getItem("user");
  const user = str != null ? JSON.parse(str) : null;
  console.log("user", user);

  return (
    <Router history={history}>
      <Switch>
        {/* {user?.accesstoken ? ( */}
          <Route path="/login" render={() => <LoginScreen />}></Route>
        {/* ) : ( */}
          <Route path="/" render={() => <TheLayout />}></Route>
        {/* )} */}
        {/* <Route path="*" component={Page404} /> */}
      </Switch>
    </Router>
  );
}

export default App;
