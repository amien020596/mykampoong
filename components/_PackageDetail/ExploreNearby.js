import Card from 'components/Card'
import Typography from 'antd/lib/typography'

const { Title } = Typography
export default function ExploreNearby({ data = [] }) {
  let datas = data.splice(0, 7)
  return (
    <div>
      <Title level={3} style={{ letterSpacing: '.03em' }}>Explore Nearby</Title>
      <div className='f f-w' style={{ width: 'calc(100% + 20px)', marginTop: 20, marginBottom: 70 }}>
        {
          datas.map(i =>
            <Card light square data={i} key={i.id} />
          )
        }
      </div>
    </div>
  )
}