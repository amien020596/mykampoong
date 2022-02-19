import { setAuthData, setToken } from "libs/helpers/auth";

import AccountContext from "libs/hooks/account";
import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Modal from 'antd/lib/modal'
import Router from "next/router";
import Typography from 'antd/lib/typography'
import { authLogin } from "modules/auth/post-auth";
import { connect } from 'react-redux'
import message from 'antd/lib/message';
import { setUserAuth } from "store/actions/authActions";
import { useState } from "react";

const { Title, Text } = Typography;

function AuthLoginModal(props) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const { loginModalVisible, setLoginModalVisible, setRegisterModalVisible } = AccountContext.useContainer();

  const handleOpenRegister = () => {
    setLoginModalVisible(false);
    setRegisterModalVisible(true);
  };

  const handleLogin = async (data) => {
    setLoading(true);
    try {

      authLogin(data).then(response => {
        if (!response.success) {
          setLoading(false);
          message.error(response.message);
        } else {
          const { token, refresh_token, expires_in, user } = response.data;
          setAuthData(JSON.stringify(user));
          setToken(token, refresh_token, expires_in);
          props.setUserAuth(true)
          setLoginModalVisible(false)
          setLoading(false);
        }
      });

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

const mapStateToProps = state => {
  return {
    userAuth: state.authentication.userAuth || false,
    // mediaDisplay: state.runtimeReducer.mediaDisplay || "grid",
  }
}

const mapDispatchToProps = {
  setUserAuth
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoginModal)