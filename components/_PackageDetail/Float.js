import { Typography, Button, Steps } from 'antd'
import { useVacation } from 'libs/hooks/vacation'
import { parseNumber } from 'libs/parser'
import AddGuest from './AddGuest';
import AddDates from './AddDates';
const { Step } = Steps;
const { Title } = Typography


export default function Float() {
  const { data } = useVacation.useContainer()
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

        `}
      </style>
      <Steps progressDot current={0} direction="vertical" className='custom'>
        <Step title="Guest house Ngurah Rai" />
        <Step title="Kanto Lampo Waterfall" />
        <Step title="Goa Gajah" />
      </Steps>
      <div className='separator' style={{ marginBottom: 20 }} />

      <div style={{marginBottom: 20}} className='f mdl'>
        <AddGuest />
        <AddDates />
      </div>


      <Title level={3} style={{ letterSpacing: '.02em' }}>Rp. {parseNumber(data.vacation.vacation_price * 1)} <span style={{ fontSize: 18, fontWeight: 400 }}>/ person</span></Title>
      <Button block type='primary' size='large' style={{ marginBottom: 12 }}>Book now</Button>
      <Button block type='primary' size='large' ghost>Customize</Button>
    </div>
  )
}