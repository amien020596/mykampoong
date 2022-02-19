import { Drawer, Typography, Button } from 'antd'
import SubItem from 'components/_Checkout/SubItem'
import ContextMyTrip from 'libs/hooks/mytrip'
import Router from 'next/router'
const { Title, Text} = Typography
export default function MyTrip() {
  const { visible, setVisible } = ContextMyTrip.useContainer();
  return (
    <Drawer
      placement='right'
      width={526}
      visible={visible}
      headerStyle={{borderBottom: 0}}
      bodyStyle={{paddingTop: 10}}
      closable={false}
      title={<Title level={2} style={{ fontWeight: 500, letterSpacing: '.03em', fontSize: 28, margin: 0 }}>My Trip</Title>}
    >
      <div className='f mdl f-btw' style={{paddingBottom: 15, borderBottom: 'solid 1px var(--gray300)'}}>
        <Text style={{ fontSize: 16, fontWeight: 500, letterSpacing: '.02em' }}>Your item</Text>
        <div className='f f-end'>
          <Text style={{ letterSpacing: '.02em', marginRight: 8 }}>Total</Text>
          <Title level={3} style={{ fontWeight: 500, letterSpacing: '.02em', margin: 0 }}>Rp. 8.000.000</Title>
        </div>
      </div>
      <div>
        <SubItem />
        <SubItem />
      </div>

      <div className='f f-c'>
        <Button type='primary' block onClick={() => Router.push('/checkout')} style={{marginBottom: 12}}>Continue checkout</Button>
        <Button type='ghost' block onClick={() => setVisible(false)}>Continue browsing</Button>
      </div>
    </Drawer>
  )
}