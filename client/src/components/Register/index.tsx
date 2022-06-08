import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../utils/firebase-config";
import { Button,Typography, Form, Input, Card } from "antd";
import { useNavigate } from 'react-router-dom';
import { Store } from "antd/lib/form/interface";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";


const { Text } = Typography;

const Register = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const createUser = (values : Store) => { 
    setError('')
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        const uid = res.user.uid;
        //TODO : STORE USER DATA IN THE DATABASE
        navigate('/login')
      })
      .catch((err) =>{
      setError(err.message)} );
  };

  const onFinish = (values :Store) => {
    createUser(values)
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Register;
