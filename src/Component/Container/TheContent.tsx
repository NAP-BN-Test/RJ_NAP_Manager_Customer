import { Layout } from "antd";
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../routes";

const { Content } = Layout;

interface PropsTheContent {
  loading: any;
}
function TheContent(props: PropsTheContent) {
  return (
    <Content>
      <Suspense fallback={props.loading}>
        <Switch>
          {routes.map((route, idx) => {
            console.log(route.name);
            return (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={() => <route.component />}
              />
            );
          })}
          <Redirect from="/" to="/main" />
        </Switch>
      </Suspense>
    </Content>
  );
}

export default TheContent;
