import { Avatar, Typography } from 'antd'
const { Text } = Typography
export default function Location({ data: item }) {
  return (
    <div className='f mdl location'>
      <style jsx>
        {`
          .location {
            width: calc(100% / 4);
            margin-bottom: 20px;
          }
        `}
      </style>
      <Avatar size={80} shape='square' />
      <div style={{ marginLeft: 16 }}>
        <Text style={{ fontSize: 16, letterSpacing: '.03em', display: 'block', marginBottom: 2, fontWeight: 500 }}>{item.location}</Text>
        <Text style={{ color: 'var(--gray500)', letterSpacing: '.03em' }}>{item.count} {item.Service}</Text>
      </div>
    </div>
  )
}