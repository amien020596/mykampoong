import Desa from './Desa'
import Scrollbars from 'react-custom-scrollbars'
import Typography from 'antd/lib/typography'

const { Title } = Typography

export default function DesaWisata() {
  return (
    <div className='container' style={{ paddingBottom: 32 }}>
      <Title style={{ fontWeight: 500, letterSpacing: '.03em' }} level={3}>
        Desa Wisata
        <a style={{ fontSize: 16, marginLeft: 16 }}>View more</a>
      </Title>
      <Scrollbars style={{ width: '100%', height: 310 }}>
        <div className='f' style={{ marginTop: 32 }}>
          <div>
            <Desa />
            <Desa />
          </div>
          <div>
            <Desa />
            <Desa />
          </div>
          <div>
            <Desa />
            <Desa />
          </div>
        </div>
      </Scrollbars>
    </div>
  )
}