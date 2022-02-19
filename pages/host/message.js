import { Typography } from 'antd'
import Layout from 'components/Layout/Protected'
const { Title } = Typography
export default function Order() {
  return (
    <div>
      <Layout>
        <Title level={3} style={{marginBottom: 24}}>Message</Title>
      </Layout>
    </div>
  )
}