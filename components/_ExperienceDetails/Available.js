import { Typography, Button } from 'antd'
const { Text } = Typography
export default function Available() {
  return (
    <div className='f mdl f-btw wrapper'>
      <style jsx>
        {`
          .wrapper {
            padding: 12px 0;
            border-bottom: solid 1px var(--gray300)
          }
          .wrapper:last-child {
            border-bottom: none
          }
        `}
      </style>
      <div>
        <Text style={{ letterSpacing: '.02em' }}>Tue, Apr 1</Text>
        <Text strong style={{ color: 'var(--gray800)', display: 'block', lineHeight: 1, margin: '4px 0 0' }}>05.00 - 12.00</Text>
        <Text style={{ fontSize: 12, fontWeight: 500, color: 'var(--red500)' }}>3 guest available</Text>
      </div>
      <div className='f f-c mdl'>
        <Button size='small' type='primary' style={{marginBottom: 12}}>Add to my trip</Button>
        <a className='link'>Book now</a>
      </div>
    </div>
  )
}