import React, { useState } from "react";
import routes from "../../routes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "../../index.css";

const { Header } = Layout;

function TheHeader() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        {routes.map((route, idx) => {
          return (
            <Menu.Item key={idx}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
}

export default TheHeader;
