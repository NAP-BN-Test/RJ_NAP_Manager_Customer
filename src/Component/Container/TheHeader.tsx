import React, { useEffect, useState } from "react";
import routes from "../../routes";
import { Link, useLocation } from "react-router-dom";
import { Dropdown, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "../../index.css";
import "../../assets/css/header.css";
import { history } from "../../assets/utils/history";
import { DownOutlined } from "@ant-design/icons";

const { Header } = Layout;

function TheHeader() {
  const location = useLocation();

  const [currentkey, setCurrentkey] = useState(
    routes.find((item) => location.pathname.startsWith(item.path))?.key
  );
  function handleClick(e: any) {
    console.log(e);
    
    const clicked = routes.find((route) => route.key === e.key)?.key;
    setCurrentkey(clicked);
  }
  useEffect(() => {
    setCurrentkey(
      routes.find((item) => location.pathname.startsWith(item.path))?.key
    );
  }, [location]);
  const [visible, setvisible] = useState(false);
  const [visible1, setvisible1] = useState(false);
  const menu = (
    <Menu onClick={()=>handleClick(0)}>
      <Menu.Item key="1">
        <Link style={{ fontWeight: "bold" }} to="/listcustomerExpired3weeksbefore1">
          {"KH sắp hết hạn (trước 3 tuần)".toUpperCase()}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link style={{ fontWeight: "bold" }} to="/ExpiredAndStop1">
          {"KH hết hạn và dừng".toUpperCase()}
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu onClick={()=>handleClick(1)}>
      <Menu.Item key="1">
        <Link style={{ fontWeight: "bold" }} to="/listcustomerExpired3weeksbefore2">
          {"KH sắp hết hạn (trước 3 tuần)".toUpperCase()}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link style={{ fontWeight: "bold" }} to="/ExpiredAndStop2">
          {"KH hết hạn và dừng".toUpperCase()}
        </Link>
      </Menu.Item>
    </Menu>
  );

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
        <Menu.Item key={0}>
          <Dropdown
            overlay={menu}
            onVisibleChange={() => setvisible(!visible)}
            visible={visible}
            placement="bottomCenter"
            arrow
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <Link
                style={{ fontWeight: "bold", color: "#000000" }}
                to="/listcustomerv1"
              >
                {"Danh sách khách hàng V1".toUpperCase()}
              </Link>
              <DownOutlined />
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key={1}>
          <Dropdown
            overlay={menu2}
            onVisibleChange={() => setvisible1(!visible1)}
            visible={visible1}
            placement="bottomCenter"
            arrow
          >
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <Link
                style={{ fontWeight: "bold", color: "#000000" }}
                to="/listcustomerv2"
              >
                {"Danh sách khách hàng V2".toUpperCase()}
              </Link>
              <DownOutlined />
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link
            style={{ fontWeight: "bold", color: "#000000" }}
            to="/listcustomerRegister"
          >
            {"Khách hàng đăng ký".toUpperCase()}
          </Link>
        </Menu.Item>
        {/* {routes.map((route, idx) => {
          return (
            <Menu.Item key={route.key}>
              <Link style={{ fontWeight: "bold" }} to={route.path}>
                {route.name.toUpperCase()}
              </Link>
            </Menu.Item>
          );
        })} */}
      </Menu>
    </Header>
  );
}

export default TheHeader;
