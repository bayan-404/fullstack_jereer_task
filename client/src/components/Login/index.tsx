import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { auth } from "../../utils/firebase-config";
import { Store } from "antd/lib/form/interface";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

import { Button,Typography, Form, Input, Card } from "antd";

const { Text } = Typography;

const Login = () => {

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const logInUser = (values: Store ) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then(()=> navigate('/upload'))
      .catch((error) => {
        setError(error.message)
      });
    }


  
  const onFinish = (values :Store) => {
    logInUser(values);
  };

  const onFinishFailed = (errorInfo :ValidateErrorEntity) => {
    console.log("Failed:", console.log(errorInfo));
  };


  return (
    <Card title="Login" style={{ width: 300, display:"flex", flexDirection:"column", alignItems:"center" }}>
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
            Login
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
