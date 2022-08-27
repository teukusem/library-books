import React from "react";
import { Form, Input, Button } from "antd";
import { Card } from "react-bootstrap";

import bcrypt from "bcryptjs";

function Register(props) {
  const onFinish = (values) => {
    delete values.name;
    const salt = bcrypt.genSaltSync(10);
    bcrypt.hash(JSON.stringify(values), salt, (err, hash) => {
      if (err) console.log(err);
      localStorage.setItem("data", hash);
    });
    props.setIsRegister(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="authPage d-flex justify-content-center align-items-center">
      <Card style={{ width: "22rem" }}>
        <Card.Body>
          <h3 className="mb-3">Register</h3>
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
              name="name"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Input your name" />
            </Form.Item>
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
              Back to login ?{" "}
              <span
                className="toRegister"
                onClick={() => props.setIsRegister(false)}
              >
                Login
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

export default Register;
