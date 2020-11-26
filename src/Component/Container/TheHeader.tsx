import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import './TheHeader.css';

const { Header } = Layout;
function TheHeader() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item >
          <img src="https://namanphu.vn/wp-content/uploads/2020/09/LOGO-TIM3.png"  height="100%"/>
        </Menu.Item>
        {routes.map((route, idx) => {
          return (
            <Menu.Item key={idx}>
              <Link key={idx} to={route.path}>
                {route.name}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
}

export default TheHeader;
