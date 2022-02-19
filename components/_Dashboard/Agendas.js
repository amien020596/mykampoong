import AgendaItem from './AgendaItem'
import ContentWrapper from './ContentWrapper'
import Link from 'next/link'
import Typography from 'antd/lib/typography'

const { Title, Text } = Typography
export default function IncomingAgenda({ title, viewAll }) {
  return (
    <ContentWrapper>
      <Title level={3} style={{ marginBottom: 24 }}>
        {title}
        {
          viewAll &&
          <Link href={viewAll}>
            <a style={{ fontSize: 16, marginLeft: 20 }}>View all</a>
          </Link>
        }
      </Title>
      <div>
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
      </div>
    </ContentWrapper>
  )
}