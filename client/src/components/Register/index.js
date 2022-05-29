import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../utils/firebase-config";
import { Button,Typography, Form, Input, Card } from "antd";

const { Text } = Typography;

const Register = (e) => {
  const [error, setError] = useState("");

  const createUser = (values) => { 
    setError('')
    console.log(values.email, values.password)
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        const uid = res.user.uid;
        //TODO : STORE USER DATA IN THE DATABASE
      })
      .catch((err) =>{
      setError(err.message)} );
  };

  const onFinish = (values) => {
    createUser(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  return (
    <Card title="Register" style={{ width: 300, display:"flex", flexDirection:"column", alignItems:"center" }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Text type="danger">{error}</Text>
          <Button type="primary"  htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Register;
