import AllOrderWrapper from 'components/_Dashboard/AllOrderWrapper'
import Layout from 'components/Layout/Protected'
import Typography from 'antd/lib/typography'

const { Title } = Typography
function Order() {
  return (
    <div>
      <Layout>
        <Title level={3} style={{ marginBottom: 24 }}>Order</Title>
        <AllOrderWrapper />
      </Layout>
    </div>
  )
}

export default Order;