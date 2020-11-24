import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Link, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "../../routes";

const { Header } = Layout;
function TheHeader() {
  return (
    
    <Header>
      
       
      
      <Menu theme="dark" mode="horizontal">
      <Menu.Item>
          <img src="https://namanphu.vn/wp-content/uploads/2020/09/LOGO-TIM3.png" />
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
