import { Typography, Button } from 'antd'
import { HeartOutlined, MessageOutlined, ShareAltOutlined } from '@ant-design/icons'
import { useVacation } from 'libs/hooks/vacation'
import { parseNumber } from 'libs/parser'
import AddDates from './AddDates'
import AddGuest from './AddGuest'
import Available from './Available'
import ModalShare from 'components/_StayDetail/ModalShare'
import { useState } from 'react'
const { Title, Text } = Typography


export default function Float() {
  const { data } = useVacation.useContainer()
  const { vacation: item } = data

  const [modalShow, setModalShow] = useState(false)

  function handleClick() {
    setModalShow(true)
  }
  function handleCloseModal() {
    setModalShow(false)
  }

  return (
    <div className='wrapper'>
      <style jsx>
        {`
          .wrapper {
            border-radius: 8px;
            border: solid 1px var(--gray300);
            position: sticky;
            top: 105px;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
          }
          .p {
            padding: 28px 24px 24px;
          }
          .action a {
            color: var(--gray800);
            font-weight: 500;
            font-size: 14px;
          }
          .action a:hover {
            color: var(--primary-color)
          }
         
        `}
      </style>
      <style jsx global>
        {`
         .action .anticon {
            font-size: 20px;
            margin-right: 8px;
          }
        `}
      </style>
      <div className='p'>
        <Text>Start from</Text>
        <Title level={3} style={{ letterSpacing: '.02em', marginTop: 0 }}>Rp. {parseNumber(item.vacation_price * 1)} <span style={{ fontSize: 18, fontWeight: 400 }}>/ person</span></Title>

        <div style={{ margin: '20px 0 10px' }} className='f mdl'>
          <AddGuest />
          <AddDates />
        </div>
        <div>
          <Available />
          <Available />
          <Button block type='ghost' size='large' style={{ margin: '12px 0' }}>View more dates</Button>
        </div>
        <Button block type='primary' size='large' >Check availability</Button>
      </div>
      <div className='separator' />
      <div className='f mdl p f-btw action' style={{ paddingTop: 16 }}>
        <a>
          <MessageOutlined />
          Message
        </a>
        <a onClick={handleClick}>
          <ShareAltOutlined />
          Share
        </a>
        <a>
          <HeartOutlined />
          Save
        </a>
      </div>
      <ModalShare visible={modalShow} data={data} onClose={handleCloseModal} />
    </div>
  )
}