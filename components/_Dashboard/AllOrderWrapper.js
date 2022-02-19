import ContentWrapper from './ContentWrapper'
import OrderItem from './OrderItem'
import Scrollbars from 'react-custom-scrollbars';
import Tabs from 'antd/lib/tabs'

const { TabPane } = Tabs
const dataCompleted = [
  {
    numberRef: '#00046346',
    datePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '6',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    datePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '6',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    datePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '6',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  }
];
const dataWatingForPayment = [
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '4',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '4',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '4',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '4',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '4',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '4',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-09-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '2',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  }
];
const dataUnsuccessOrder = [
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-05-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '4',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
  {
    numberRef: '#00046346',
    dateOverduePayment: '2021-05-05 00:11:12',
    dateEvent: '2021-09-20 10:00:00',
    guestNumber: '4',
    destinationName: 'Kanto Lampo Waterfall',
    imageDestination: '/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg'
  },
];
export default function AllOrderWrapper() {
  let dataAllOrder = []
  dataAllOrder = dataAllOrder.concat(dataCompleted, dataWatingForPayment, dataUnsuccessOrder)
  const countAllOrder = dataAllOrder.length || 0
  const countCompleted = dataCompleted.length || 0
  const countWatingPayment = dataWatingForPayment.length || 0
  const countUnsuccessOrder = dataUnsuccessOrder.length || 0

  return (
    <ContentWrapper>
      <Tabs defaultActiveKey='active'>
        <TabPane tab={`Active (${countAllOrder})`} key='active'>
          <div style={{ margin: '15px 0' }}>
            <Scrollbars
              autoHide
              universal
              style={{ height: 'calc(100vh - 350px)' }}
            >
              {
                dataAllOrder.map((f, i) => {
                  return (
                    <div style={{ margin: '0 20px' }}>
                      <OrderItem key={i} data={dataAllOrder} status={'completed'} />
                    </div>
                  )
                })
              }
            </Scrollbars>
          </div>
        </TabPane>
        <TabPane tab={`Completed (${countCompleted})`} key='completed'>
          <div style={{ margin: '15px 0' }}>
            <Scrollbars
              autoHide
              style={{ height: 'calc(100vh - 350px)' }}
            >
              {
                dataCompleted.map((f, i) => {
                  return (
                    <div style={{ margin: '0 20px' }}>
                      <OrderItem key={i} data={dataCompleted} status={'completed'} />
                    </div>
                  )
                })
              }
            </Scrollbars>
          </div>
        </TabPane>
        <TabPane tab={`Waiting For Payment (${countWatingPayment})`} key='waitingForPayment'>
          <div style={{ margin: '15px 0' }}>
            <Scrollbars
              autoHide
              style={{ height: 'calc(100vh - 350px)' }}
            >
              {
                dataWatingForPayment.map((f, i) => {
                  return (
                    <div style={{ margin: '0 20px' }}>
                      <OrderItem key={i} data={dataWatingForPayment} status={'completed'} />
                    </div>
                  )
                })
              }
            </Scrollbars>
          </div>
        </TabPane>
        <TabPane tab={`Unsuccess Order (${countUnsuccessOrder})`} key='unsuccessOrder'>
          <div style={{ margin: '15px 0' }}>
            <Scrollbars
              autoHide
              style={{ height: 'calc(100vh - 350px)' }}
            >
              {
                dataUnsuccessOrder.map((f, i) => {
                  return (
                    <div style={{ margin: '0 20px' }}>
                      <OrderItem key={i} data={dataUnsuccessOrder} status={'completed'} />
                    </div>
                  )
                })
              }
            </Scrollbars>
          </div>
        </TabPane>
      </Tabs>
    </ContentWrapper>
  )
}