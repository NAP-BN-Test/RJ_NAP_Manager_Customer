import React, { useEffect, useState } from "react";
import routes from "../../routes";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "../../index.css";
import "../../assets/css/header.css";
import { history } from "../../assets/utils/history";

const { Header } = Layout;

function TheHeader() {
  const location = useLocation();

  const [currentkey, setCurrentkey] = useState(
    routes.find((item) => location.pathname.startsWith(item.path))?.key
  );
  function handleClick(e: any) {
    const clicked = routes.find((route) => route.key === e.key)?.key;
    setCurrentkey(clicked);
  }
  useEffect(() => {
    setCurrentkey(
      routes.find((item) => location.pathname.startsWith(item.path))?.key
    );
  }, [location]);
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        onClick={handleClick}
        selectedKeys={[currentkey || ""]}
      >
        <img
          src="https://namanphu.vn/wp-content/uploads/2020/09/LOGO-TIM3.png"
          height="100%"
        />
        {routes.map((route, idx) => {
          return (
            <Menu.Item key={route.key}>
              <Link style={{ fontWeight: "bold" }} to={route.path}>
                {route.name.toUpperCase()}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
}

export default TheHeader;
