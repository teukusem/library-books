import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";
import bcrypt from "bcryptjs";

function Login(props) {
  const navigate = useNavigate();

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Usename and Password doesnt match",
      description: "username and password must be correct",
    });
  };

  const onFinish = (values) => {
    const data = localStorage.getItem("data");
    bcrypt.compare(JSON.stringify(values), data, function (err, res) {
      if (res === true) {
        navigate("/home");
      } else {
        openNotificationWithIcon("error");
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="authPage d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <h3 className="mb-3">Login</h3>
          <Form
            direction="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: "100%" }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Input your email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password placeholder="Input your Password" />
            </Form.Item>
            <span className="textRegister ">
              Not have account ?{" "}
              <span
                className="toRegister"
                onClick={() => props.setIsRegister(true)}
              >
                Register
              </span>
            </span>
            <Button
              htmlType="submit"
              type="primary"
              block
              style={{
                backgroundColor: "black",
                border: "none",
                marginTop: "10px",
              }}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
