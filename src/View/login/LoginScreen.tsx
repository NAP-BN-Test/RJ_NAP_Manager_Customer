import React from "react";
import { Form, Input, Button, Checkbox, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Action } from "../../redux/actions/index.action";
function LoginScreen() {
    const dispatch = useDispatch();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    dispatch(Action.act_login(values.username, values.password));
  };
  return (
    <Row typeof="flex" justify='center' align="middle" style={{minHeight: '100vh'}}>
      {/* <div className="formLogin"> */}
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
      {/* </div> */}
    </Row>
  );
}

export default LoginScreen;
