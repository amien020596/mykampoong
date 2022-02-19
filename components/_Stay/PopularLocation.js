import { Typography } from 'antd'
import Location from './Location'
const { Title } = Typography

export default function PopularLocation({ data }) {
  data = data?.slice(0, 8)
  return (
    <div className='container' style={{ padding: '32px 0' }}>
      <Title style={{ fontWeight: 500, letterSpacing: '.03em' }} level={3}>
        Popular Location
        <a style={{ fontSize: 16, marginLeft: 16 }}>View more</a>
      </Title>
      <div className='f f-w' style={{ marginTop: 32 }}>
        {
          data?.map((item, index) => <Location key={index} data={item} />)
        }
      </div>
    </div>
  )
}