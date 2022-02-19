import ContentWrapper from './ContentWrapper'
import AgendaItem from './AgendaItem'
import { Tabs } from 'antd'
const { TabPane } = Tabs
export default function AllAgendaWrapper() {
  return (
    <ContentWrapper>
      <Tabs defaultActiveKey='incoming'>
        <TabPane tab='Incoming (3)' key='incoming'>
          <div style={{margin: '15px 0'}}>
            <AgendaItem />
            <AgendaItem />
            <AgendaItem />
          </div>
        </TabPane>
        <TabPane tab='Past' key='past'>

        </TabPane>
      </Tabs>
    </ContentWrapper>
  )
}