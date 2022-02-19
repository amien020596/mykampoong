import { useState } from "react";
import {
  Modal,
  Typography,
  Button,
  Input,
  Form,
  Checkbox,
  message
} from "antd";
import { authRegister } from "modules/auth/post-auth";

import AccountContext from "libs/hooks/account";
const { Title, Text } = Typography;

export default function AuthRegisterModal() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const {
    registerModalVisible,
    setLoginModalVisible,
    setRegisterModalVisible
  } = AccountContext.useContainer();

  const handleOpenLogin = () => {
    setRegisterModalVisible(false);
    setLoginModalVisible(true);
  };

  const handleRegister = async (data) => {
    setLoading(true);

    try {
      const res = await authRegister(data);
      const parsed = await res.json();
      if (!res.ok) {
        form.setFields(
          Object.keys(parsed.errors).map((i) => ({
            name: i,
            errors: parsed.errors[i]
          }))
        );
        message.error(parsed.message);
      } else {
        message.success(parsed.message);
        handleOpenLogin();
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  const validations = {
    username: [{ required: true, message: "Please insert username" }],
    email: [{ type: "email", required: true, message: "Email is not valid!" }],
    password: [
      { required: true, message: "Please insert password!" },
      { min: 8, message: "Minimum character is 8!" }
    ]
  };

  return (
    <Modal
      visible={registerModalVisible}
      title="Sign up"
      footer={false}
      width={514}
      centered
      onCancel={() => setRegisterModalVisible(false)}
    >
      <Title level={4}>Join us for ultimate excursions experience</Title>
      <Text style={{ fontSize: 16 }}>
        Already have an account?
        <a onClick={() => handleOpenLogin()} style={{ fontWeight: 500 }}>
          {" "}
          Login
        </a>
      </Text>
      <Form
        form={form}
        layout="vertical"
        style={{ marginTop: 20 }}
        onFinish={handleRegister}
      >
        <Form.Item name="username" rules={validations.username}>
          <Input type="text" placeholder="Username" />
        </Form.Item>
        <Form.Item name="email" rules={validations.email}>
          <Input type="email" placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={validations.password}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Text style={{ fontSize: 12 }}>
          By selecting Agree and continue below, I agree to My Kampoong’s{" "}
          <a>Terms of Service, Payments Terms of Service, Privacy Policy,</a>{" "}
          and <a>Nondiscrimination Policy</a>.
        </Text>
        <Button
          type="primary"
          block
          style={{ margin: "12px 0" }}
          htmlType="submit"
          loading={loading}
        >
          Agree and continue
        </Button>
        <Checkbox>
          <Text style={{ fontSize: 12 }}>
            I don’t want to receive marketing messages from My Kampoong.
          </Text>
        </Checkbox>
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
