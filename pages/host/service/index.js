import Empty from 'components/Empty'
import Layout from 'components/Layout/Protected'
import Typography from 'antd/lib/typography'

const { Title } = Typography
export default function Order() {
  return (
    <div>
      <Layout>
        <Title level={3} style={{ marginBottom: 24 }}>Service</Title>
        <Empty
          btnText='Add new service'
          btnLink='/host/service/form'
        />
      </Layout>
    </div>
  )
}