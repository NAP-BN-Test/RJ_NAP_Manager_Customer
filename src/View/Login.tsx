import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../redux/actions/index.action";
import { RootState } from "../redux/reducers/index.reducer";
import { Account } from "../types";
import { history } from "../assets/utils/history";
function LoginScreen() {
  const dispatch = useDispatch();
  const accounts: Account = useSelector((state: RootState) => state.account);
  console.log(accounts.id);

  useEffect(() => {
    if (accounts.permission == "KETOAN") {
      history.push("/listcustomerRegister");
    } else if (accounts.id != null) {
      history.push("/listcustomerv1");
    }
  }, [accounts.id != null]);

  const onFinish = (values: any) => {
    dispatch(Action.act_login(values.username, values.password));
  };
  return (
    <Row
      typeof="flex"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        size="large"
      >
        <h2>Login</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default LoginScreen;
