import { setAuthData, setToken } from "libs/helpers/auth";

import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Modal from 'antd/lib/modal'
import Typography from 'antd/lib/typography'
import { useGlobalContext } from "libs/hooks/global";
import { useState } from "react";
import { useTranslation } from 'next-i18next';

const { TextArea } = Input;
const { Title, Text } = Typography;


function MessageModal() {
  const { t } = useTranslation('common')
  const [loading, setLoading] = useState(false);
  const { modalMessage, setModalMessage } = useGlobalContext.useContainer();
  const [form] = Form.useForm();

  const handleLogin = async (data) => {
    setLoading(true);
  };

  const handleValidate = () => {
    form.validateFields()
      .then((values) => {
        setModalMessage(false)
      }).catch(errorInfo => {
        console.log("error", errorInfo)
      })
  }

  return (
    <Modal
      visible={modalMessage}
      title={t("Send Message")}
      centered
      width={514}
      onCancel={() => setModalMessage(false)}
      onOk={() => handleValidate()}
      closable={true}
      cancelText={t("Cancel")}
      okText={t("Send")}
    >
      <style jsx>
        {`
          .messagebox{
            rezise:none;
          }
        `}
      </style>
      <Form
        form={form}
        onFinish={handleLogin}
        layout="vertical"
        style={{ marginTop: 20 }}
      >
        <Form.Item
          name="message"
          label={t("Message")}
          style={{ width: "100%" }}
          rules={[{ required: true, message: `${t("Please input your message !")}` }]}
        >
          <TextArea className="messagebox" autoSize={{ minRows: 6, maxRows: 6 }} placeholder={t("Send message to mykampoong admin")} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default MessageModal