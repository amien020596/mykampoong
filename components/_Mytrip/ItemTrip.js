import { Typography, Button, Avatar } from 'antd'
import Tag from 'components/Tag'
import { useState } from 'react'
import ModalDetails from './ModalDetails'
const { Text } = Typography
export default function ItemTrip({
  highlight,
  onWriteReview,
}) {
  const [openModal, setOpenModal] = useState(false)

  const handleSetModalVisible = () => {
    setOpenModal(!openModal)
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
        <div>
          <Text className='agenda-item-title'>
            <span style={{ fontWeight: 500 }}>(Ongoing) </span>
            Kanto lampo waterfall
          </Text>
          <Text style={{ color: 'var(--gray600)', letterSpacing: '.03em' }}>Estimated end at 12.00 (30 mins left)</Text>
        </div>
        <div>
          {onWriteReview ? (
            <>
              <Button type="primary" style={{ marginRight: 10 }}>Write review</Button>
              <Button>Book Again</Button>
            </>
          ) : (
            <>
              <Button type="primary" style={{ marginRight: 10 }} >View E-ticket</Button>
              <Button onClick={handleSetModalVisible}>View details</Button>
            </>
          )}
        </div>
        <Text style={{ letterSpacing: '.03em' }}>7 guest</Text>
        <div className='f f-c f-start'>
          <a className='underlined' style={{ marginBottom: 5 }}>Kanto lampo waterfall</a>
          <Tag type='experience'>EXPERIENCE</Tag>
        </div>
        <Avatar size={50} src='/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg' shape='square' />
      </div>
      <ModalDetails onClose={handleSetModalVisible} visible={openModal} />
    </div>
  )
}