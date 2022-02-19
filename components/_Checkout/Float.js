import { Typography, Button, Tag } from 'antd'
import CheckoutContext from 'libs/hooks/checkout'
import { useRouter } from 'next/router'
import SubItem from './SubItem'
const { Title, Text } = Typography


export default function Float() {
  const { step, setStep } = CheckoutContext.useContainer()
  const router = useRouter()
  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      router.push('/checkout/complete')
    }
  }
  return (
    <div className='wrapper'>
      <style jsx>
        {`
          .wrapper {
            padding: 28px 24px;
            border-radius: 8px;
            border: solid 1px var(--gray300);
            position: sticky;
            top: 105px;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
          }
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 16px 0;
          }

        `}
      </style>
      <Title level={3} style={{ letterSpacing: '.02em', margin: 0, fontWeight: 500 }}>Price Details</Title>
      <div>
        <SubItem />
        <SubItem />
      </div>

      <Text style={{ fontSize: 12, fontWeight: 500, display: 'block', marginTop: 20 }}>Tax and service fee included</Text>
      <div className='separator' />
      <div className='f mdl f-btw'>
        <Title level={3} style={{ letterSpacing: '.02em', margin: 0 }}>Total</Title>
        <Title level={3} style={{ letterSpacing: '.02em', margin: 0 }}>Rp. 7.000.000</Title>
      </div>
      <Button onClick={() => handleNext()} block type='primary' size='large' style={{ marginTop: 12 }}>
        {step === 1 && 'Continue to payment'}
        {step === 2 && 'Checkout'}
      </Button>
      { 
        step === 2 && 
        <div style={{marginTop: 16}} className='f f-btw mdl'>
          <Text style={{ color: 'var(--gray600)'}}>Once  you click Checkout, we will redirect<br />you to MC Payment.</Text>
          <img src='/images/bank/mcpay.jpg' />
        </div>
      }
    </div>
  )
}