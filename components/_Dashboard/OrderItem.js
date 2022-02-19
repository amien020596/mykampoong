import Avatar from 'antd/lib/avatar'
import Tag from 'components/Tag'
import Typography from 'antd/lib/typography'

const { Text } = Typography

export default function OrderItem() {
  return (
    <div className='order-item'>
      <style jsx>
        {`
          .order-item {
            width: 100%;
            padding: 16px 28px;
            background: #fff;
            border-radius: 8px;
            border: solid 1px var(--gray200);
            margin-bottom: 16px;
          }
        `}
      </style>
      <div className='f mdl f-btw'>
        <div className='f f-c'>
          <Text style={{ color: 'var(--gray600)', letterSpacing: '.03em' }}>ORDER #00046346</Text>
          <Text style={{ color: 'var(--gray600)', fontSize: 12, letterSpacing: 0 }}>Paid at 1 Apr 2021, 10.25</Text>
        </div>
        <Text className='agenda-item-title'>
          <span style={{ fontWeight: 500 }}>Tomorrow, at 10.00 - 12.00</span>
        </Text>
        <Text style={{ letterSpacing: '.03em' }}>7 guest</Text>
        <div className='f f-c f-start'>
          <a className='underlined' style={{ marginBottom: 5 }}>Kanto lampo waterfall</a>
          <Tag type='experience'>EXPERIENCE</Tag>
        </div>
        <Avatar size={50} src='/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg' shape='square' />
      </div>
    </div>
  )
}