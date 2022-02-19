import { useState } from "react";
import { Modal, Typography, Button, Input, Form, message } from "antd";
import { authLogin } from "modules/auth/post-auth";
import { setToken } from "libs/helpers/auth";
import AccountContext from "libs/hooks/account";
import Router from "next/router";

const { Title, Text } = Typography;

export default function AuthLoginModal() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { loginModalVisible, setLoginModalVisible, setRegisterModalVisible } =
    AccountContext.useContainer();

  const handleOpenRegister = () => {
    setLoginModalVisible(false);
    setRegisterModalVisible(true);
  };

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      const res = await authLogin(data);
      const parsed = await res.json();
      if (!parsed.success) {
        setLoading(false);
        message.error(parsed.message);
      } else {
        const { token, refresh_token } = parsed.data;
        setToken(token, refresh_token);
        Router.push("/host");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const validations = {
    email: [{ type: "email", required: true, message: "Email is not valid!" }],
    password: [{ required: true, message: "Please insert password!" }]
  };

  return (
    <Modal
      visible={loginModalVisible}
      title="Login"
      footer={false}
      centered
      width={514}
      onCancel={() => setLoginModalVisible(false)}
    >
      <Title level={4}>Enjoy the ultimate excursions experience</Title>
      <Text style={{ fontSize: 16 }}>
        Do not have an account?
        <a onClick={() => handleOpenRegister()} style={{ fontWeight: 500 }}>
          {" "}
          Sign up
        </a>
      </Text>
      <Form
        form={form}
        onFinish={handleLogin}
        layout="vertical"
        style={{ marginTop: 20 }}
      >
        <Form.Item name="email" rules={validations.email}>
          <Input type="text" placeholder="Username/Email" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Password" rules={validations.password} />
        </Form.Item>
        <Button type="primary" block htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form>
      <div className="separator" style={{ margin: "24px 0" }} />
      <div className="f">
        <Button block style={{ marginRight: 12 }}>
          <img src="/images/icon/goog.svg" style={{ marginRight: 12 }} />
          Google
        </Button>
        <Button block>
          <img src="/images/icon/fb.svg" style={{ marginRight: 12 }} />
          Facebook
        </Button>
      </div>
    </Modal>
  );
}
