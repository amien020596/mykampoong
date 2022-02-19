import { setAuthData, setToken } from "libs/helpers/auth";

import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Modal from 'antd/lib/modal'
import Typography from 'antd/lib/typography'
import { authLogin } from "modules/auth/post-auth";
import message from 'antd/lib/message';
import { useAddNewWishlist } from "modules/wishlist/post-new-wishlist-data";
import { useGlobalContext } from "libs/hooks/global";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const { Title, Text } = Typography;

function CreateWishlistModal() {
  const { t } = useTranslation('common');
  const [loading, setLoading] = useState(false);
  const { modalCreateWishlist, setModalCreateWishlist, dataWishlist, setModalWishlist, setReloadDataWishlist } = useGlobalContext.useContainer();
  const [form] = Form.useForm();

  const handleLogin = async () => {
    setLoading(true);
  };

  const handleValidate = () => {
    form.validateFields()
      .then((values) => {

        const dataNewWishlist = {
          ...dataWishlist,
          'name': values.wishlist
        }

        useAddNewWishlist(dataNewWishlist)
          .then(response => {
            if (response.success) {
              setModalWishlist(false)
              setModalCreateWishlist(false)
              message.success(`success add to wishlist ${values.wishlist}`)
              form.resetFields()
              setReloadDataWishlist(true)
            } else {
              message.error("failed to create new message")
            }
          }).catch(() => {
            setModalWishlist(false)
            setModalCreateWishlist(false)
          })

      }).catch(errorInfo => {
        console.log("error", errorInfo)
      })
  }

  return (
    <Modal
      visible={modalCreateWishlist}
      title={t("Create new wishlist")}
      centered
      width={514}
      onCancel={() => setModalCreateWishlist(false)}
      onOk={() => handleValidate()}
      okText={t("Create")}
      cancelText={t("Cancel")}
      closable={true}
    >
      <Form
        form={form}
        onFinish={handleLogin}
        layout="vertical"
        style={{ marginTop: 20 }}
      >
        <Form.Item
          name="wishlist"
          label={t("Wishlist")}
          style={{ width: "100%" }}
          rules={[{ required: true, message: `${t('Please input your wishlist name!')}` }]}
        >
          <Input placeholder={t("Wishlist name")} />
        </Form.Item>
      </Form>
    </Modal>
  );
}



export default CreateWishlistModal