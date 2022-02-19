import AgendaItem from 'components/_Dashboard/AgendaItem'
import AllAgendaWrapper from 'components/_Dashboard/AllAgendaWrapper'
import Layout from 'components/Layout/Protected'
import Typography from 'antd/lib/typography'

const { Title } = Typography
export default function Agenda() {
  return (
    <div>
      <Layout>
        <Title level={3} style={{ marginBottom: 24 }}>Agenda</Title>
        <AgendaItem highlight />
        <AllAgendaWrapper />
      </Layout>
    </div>
  )
}