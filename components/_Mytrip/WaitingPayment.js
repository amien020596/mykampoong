import { Typography, Button, Avatar, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import Tag from 'components/Tag'
import { useState } from 'react';
const { Text } = Typography
export default function WaitingPayment({
  highlight
}) {
  const [visible, setVisible] = useState(false)
  const setVisibleModal = () => {
    setVisible(!visible)
  }
  const onClose = () => setVisible(false)
  const handleRemoveItem = () => {
    console.log("remove item")
  }
  const handleSaveToWishList = () => {
    console.log("Handle Save To Wish List")
  }

  return (
    <div className={`agenda-item ${highlight ? 'highlight' : ''}`}>
      <style jsx>
        {`
          .agenda-item {
            width: 100%;
            padding: 16px 28px;
            background: #fff;
            border-radius: 8px;
            border: solid 1px var(--gray200);
            margin-bottom: 16px;
          }
          .highlight {
            background: var(--orange50);
            border-color: var(--primaryColor);
          }
        `}
      </style>
      <div className='f mdl f-btw'>
        <div className='f mdl f-btw'>
          <Avatar size={50} src='/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg' shape='square' />
          <div className='f f-c f-start' style={{ marginLeft: 10 }}>
            <a className='underlined' style={{ marginBottom: 5 }}>Kanto lampo waterfall</a>
            <Tag type='experience'>EXPERIENCE</Tag>
          </div>
        </div>
        <div>
          <Button onClick={setVisibleModal}>Remove</Button>
        </div>
        <div>
          <Text className='agenda-item-title'>
            <span style={{ fontWeight: 500 }}>(Ongoing) </span>
            Kanto lampo waterfall
          </Text>
          <Text style={{ color: 'var(--gray600)', letterSpacing: '.03em' }}>Estimated end at 12.00 (30 mins left)</Text>
        </div>
        <div className='f f-c f-end' style={{ marginLeft: 10 }}>
          <Text style={{ letterSpacing: '.03em' }}>RP 7.000.000</Text>
          <Text style={{ letterSpacing: '.03em' }}>RP 3.500.000 x 2 guest</Text>
        </div>
      </div>
      <Modal
        title="Remove item"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={handleSaveToWishList}>
            Add to saved item
          </Button>,
          <Button key="submit" type="primary" onClick={handleRemoveItem}>
            Remove
          </Button>
        ]}
      >
        <p>Are you sure want to remove this item from your Trip?</p>
      </Modal>
    </div>
  )
}