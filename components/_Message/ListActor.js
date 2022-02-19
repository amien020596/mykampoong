import Avatar from "antd/lib/avatar";
import Button from "antd/lib/button"
import { DeleteOutlined } from "@ant-design/icons";
import Modal from 'antd/lib/modal'
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { useState } from "react";

function ListActor() {
  const [visibleModal, setVisibleModal] = useState(false)
  function handleOpenModal() {
    setVisibleModal(true)
  }
  const onClose = () => setVisibleModal(false)
  return (
    <div className="f f-btw message">
      <style jsx>
        {`
          .message{
            height:4rem;
            padding-left:10px;
            background-color:#fff;
            width:100%;
            border:0.5px solid #cccccc;
            transition: border-left 0.3s;
          }
          .item-subject{
            margin-left: 10px;
          }
          .message:hover{
            background-color:#ffffff;
            cursor:pointer;
            border-left:10px solid #cccccc;
          }
          .subject{
            margin-left:20px;
            
          }
          
          .message-active{
            background-color:#cccccc;
          }
        `}

      </style>
      <div className="f item-subject">
        <div className="f f-center">
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </div>
        <div className="subject f f-c f-ctr">
          <div>
            <Text strong>Name of user</Text>
          </div>
          <div>
            <p style={{ marginBottom: 0 }}>this is message from user</p>
          </div>
        </div>
      </div>

      <div className="f mdl" style={{ marginRight: 15 }}>
        <Button type="primary" size="small" style={{ paddingLeft: 10, paddingRight: 10 }} onClick={() => handleOpenModal()}>
          <DeleteOutlined />
        </Button>
      </div>
      <Modal
        title="Remove item"
        visible={visibleModal}
        onCancel={onClose}
        footer={[
          <Button key="back" >
            Add to saved item
          </Button>,
          <Button key="submit" type="primary" >
            Remove
          </Button>
        ]}
      >
        <p>Are you sure want to remove this item from your cart?</p>
      </Modal>
    </div>
  );
}

export default ListActor