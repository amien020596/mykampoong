import { Typography } from 'antd'
const { Title, Text } = Typography

export default function Box({ title, description }) {
  return (
    <div className='f f-c f-ctr mdl box'>
      <style jsx>
        {`
          .box {
            padding: 26px;
            background: var(--gray700);
            border-radius: 4px;
            margin: 6px;
            width: calc(100% / 3 - 12px);
          }
        `}
      </style>
      <Title level={3} style={{ margin: 0, color: 'var(--gray50)', fontWeight: 500 }}>{title}</Title>
      <Text style={{ color: 'var(--gray50)' }}>{description}</Text>
    </div>
  )
}