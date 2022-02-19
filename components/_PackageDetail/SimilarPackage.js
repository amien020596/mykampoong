import Card from 'components/Card'
import Scrollbars from 'react-custom-scrollbars'
import { Typography } from 'antd'
const { Title } = Typography

export default function SimilarPackage() {
  return (
    <div>
      <Title level={3} style={{letterSpacing: '.03em'}}>Similar Packages</Title>
      <Scrollbars autoHide style={{ width: '100%', height: 420, marginTop: 20, marginBottom: 70 }}>
        <div className='f'>
          <Card light />
          <Card light />
          <Card light />
          <Card light />
        </div>
      </Scrollbars>
    </div>
  )
}