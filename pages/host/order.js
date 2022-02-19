import { Typography } from 'antd'
import Layout from 'components/Layout/Protected'
import AllOrderWrapper from 'components/_Dashboard/AllOrderWrapper'
const { Title } = Typography
export default function Order() {
  return (
    <div>
      <Layout>
        <Title level={3} style={{marginBottom: 24}}>Order</Title>
        <AllOrderWrapper />
      </Layout>
    </div>
  )
}