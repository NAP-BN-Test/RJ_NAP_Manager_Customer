import React, { Suspense } from "react";
import routes from "../../routes";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;

interface PropsTheContent {
  loading: any;
}

function TheContent(props: PropsTheContent) {
  return (
    <Content style={{ padding: "24px 50px" }}>
      <Suspense fallback={props.loading}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={() => <route.component />}
              />
            ) : (
              null
            );
          })}
          <Redirect from="/" to="/listcustomerv1" />
        </Switch>
      </Suspense>
    </Content>
  );
}

export default TheContent;
