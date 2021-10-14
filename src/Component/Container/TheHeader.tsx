import React, { useEffect, useState } from "react";
import routes from "../../routes";
import { Link, useLocation } from "react-router-dom";
import { Col, Dropdown, Layout, Menu, Popconfirm } from "antd";
import "antd/dist/antd.css";
import "../../index.css";
import "../../assets/css/header.css";
import { history } from "../../assets/utils/history";
import { DownOutlined } from "@ant-design/icons";
import { Account } from "../../types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/index.reducer";
import IconButton from "@material-ui/core/IconButton";

const { Header } = Layout;
const logout1 = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      fill="black"
      d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
    />
  </svg>
);
function TheHeader() {
  const location = useLocation();

  const [currentkey, setCurrentkey] = useState(
    routes.find((item) => location.pathname.startsWith(item.path))?.key
  );
  // const accounts: Account = useSelector((state: RootState) => state.account);
  console.log(localStorage.getItem("permission"));

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
  function confirm() {
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  }

  function cancel() {
    console.log("Hủy");
  }
  const menu = (
    <Menu onClick={() => handleClick(0)} style={{ top: "22px", left: "-20px" }}>
      <Menu.Item key="1">
        <Link
          style={{ fontWeight: "bold" }}
          to="/listcustomerExpired3weeksbefore1"
        >
          {"Khách hàng sắp hết hạn (trước 3 tuần)".toUpperCase()}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link style={{ fontWeight: "bold" }} to="/ExpiredAndStop1">
          {"Khách hàng hết hạn và dừng".toUpperCase()}
        </Link>
      </Menu.Item>
    </Menu>
  );

  const menu2 = (
    <Menu onClick={() => handleClick(1)} style={{ top: "22px", left: "-20px" }}>
      <Menu.Item key="1">
        <Link
          style={{ fontWeight: "bold" }}
          to="/listcustomerExpired3weeksbefore2"
        >
          {"Khách hàng sắp hết hạn (trước 3 tuần)".toUpperCase()}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link style={{ fontWeight: "bold" }} to="/ExpiredAndStop2">
          {"Khách hàng hết hạn và dừng".toUpperCase()}
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
        {localStorage.getItem("permission") != "KETOAN" ? (
          <Menu.Item key={0}>
            <Dropdown
              overlay={menu}
              onVisibleChange={() => setvisible(!visible)}
              visible={visible}
              placement="bottomLeft"
              className="menu1"
              // overlayStyle={{top: '70.9915px', left: '369.991px'}}
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
        ) : null}
        {localStorage.getItem("permission") != "KETOAN" ? (
          <Menu.Item key={1}>
            <Dropdown
              overlay={menu2}
              onVisibleChange={() => setvisible1(!visible1)}
              visible={visible1}
              placement="bottomLeft"
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
        ) : null}

        <Menu.Item key={2}>
          <Link
            style={{ fontWeight: "bold", color: "#000000" }}
            to="/listcustomerRegister"
          >
            {"Khách hàng đăng ký".toUpperCase()}
          </Link>
        </Menu.Item>
        {localStorage.getItem("permission") != "SALE" ? (
          <Menu.Item key={3}>
            <Link
              style={{ fontWeight: "bold", color: "#000000" }}
              to="/listcustomerFinance"
            >
              {"Theo dõi khách hàng".toUpperCase()}
            </Link>
          </Menu.Item>
        ) : null}
        {/* {routes.map((route, idx) => {
          return (
            <Menu.Item key={route.key}>
              <Link style={{ fontWeight: "bold" }} to={route.path}>
                {route.name.toUpperCase()}
              </Link>
            </Menu.Item>
          );
        })} */}
        {/* <Col > */}
        <Popconfirm
          title="Bạn có thoát không?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <IconButton
            onClick={confirm}
            style={{ float: "right", paddingTop: "25px" }}
            color="primary"
            aria-label="add to shopping cart"
          >
            {logout1}
          </IconButton>
        </Popconfirm>
        {/* </Col> */}
      </Menu>
    </Header>
  );
}

export default TheHeader;
