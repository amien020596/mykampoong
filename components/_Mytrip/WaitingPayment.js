import { currency, parseDate, parseDateStartEnd } from 'libs/helpers/parser/parser'

import Avatar from 'antd/lib/avatar'
import Button from 'antd/lib/button'
import Modal from 'antd/lib/modal'
import Tag from 'components/Tag'
import Typography from 'antd/lib/typography'
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const { Text } = Typography
const WaitingPayment = ({
  highlight,
  data
}) => {
  console.log(data)
  const { t } = useTranslation('common')
  const [visible, setVisible] = useState(false)

  const setVisibleModal = () => setVisible(!visible)

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
            <Text
              ellipsis={{
                tooltip: data.travel_object.name,
              }}
              // className='underlined'
              style={{ width: 300, marginBottom: 5 }}>{data.travel_object.name}</Text>
            <Tag type='experience'>{data.travel_object.service}</Tag>
          </div>
        </div>
        {/* <div>
          <Button onClick={setVisibleModal}>{t("Remove")}</Button>
        </div> */}
        <div>
          <Text className='agenda-item-title'>
            <span style={{ fontWeight: 500 }}>({t("Waiting payment")}) </span>
          </Text>
          <Text style={{ color: 'var(--gray600)', letterSpacing: '.03em' }}>
            {/* {t("Estimated end at")} */}
            Valid Payment
            12.00 (30 mins left)</Text>
        </div>
        <div className='f f-c f-start' style={{ marginLeft: 10 }}>
          <Text style={{ letterSpacing: '.03em' }}>{currency(data.total_price)}</Text>
          <Text style={{ letterSpacing: '.03em' }}>{currency(data.price)} x {data.total_guest} {t("Guest")}</Text>
          <Text style={{ letterSpacing: '.03em' }}>{parseDateStartEnd(data.start_date, data.end_date)} {t("Guest")}</Text>
        </div>
      </div>
      <Modal
        title="Remove item"
        visible={visible}
        onCancel={onClose}
        footer={[
          <Button key="back" onClick={handleSaveToWishList}>
            {t("Add to saved item")}
          </Button>,
          <Button key="submit" type="primary" onClick={handleRemoveItem}>
            {t("Remove")}
          </Button>
        ]}
      >
        <p>{t("Are you sure want to remove this item from your Trip?")}</p>
      </Modal>
    </div >
  )
}

export default WaitingPayment