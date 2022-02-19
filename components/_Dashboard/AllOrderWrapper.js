import ContentWrapper from './ContentWrapper'
import OrderItem from './OrderItem'
import { Tabs } from 'antd'
const { TabPane } = Tabs
export default function AllOrderWrapper() {
  return (
    <ContentWrapper>
      <Tabs defaultActiveKey='active'>
        <TabPane tab='Active (5)' key='active'>
          <div style={{margin: '15px 0'}}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
        </TabPane>
        <TabPane tab='Completed' key='completed'>

        </TabPane>
      </Tabs>
    </ContentWrapper>
  )
}