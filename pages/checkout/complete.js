import { Typography, Button } from 'antd'
import Layout from 'components/Layout/Checkout'
import CheckoutContext from 'libs/hooks/checkout'
const { Text, Title } = Typography
export default function Complete() {
  return (
    <CheckoutContext.Provider initialState={3}>
      <Layout>
        <div className='container'>
          <div className='f f-ctr mdl f-c' style={{ minHeight: '80vh', padding: '70px 0' }}>
            <Title level={2}>Complete</Title>
            <div className='f f-ctr mdl f-c' style={{ marginTop: 36 }}>
              <img src='/images/icon/circle-ok.svg' style={{ marginBottom: 16 }} />
              <Title level={2} style={{ color: 'var(--teal500)' }}>Success</Title>
            </div>
            <Text style={{ fontSize: 20 }}>You have successfully completed the checkout</Text>
            <div style={{ marginTop: 48 }}>
              <Button style={{ marginRight: 12 }}>Explore More</Button>
              <Button type='primary'>View My Trip</Button>
            </div>
          </div>
        </div>
      </Layout>
    </CheckoutContext.Provider>
  )
}