import { Typography } from 'antd'
import TailorItem from './TailorItem'
const { Title } = Typography

export default function Tailor(){
  return (
    <div className='container' style={{padding: '92px 0'}}>
    <Title level={1}>Tailor made trip as your needs, that’s <span style={{color: 'var(--primaryColor)', textDecoration: 'underline'}}>Package</span></Title>
    <div className='f mdl f-sar' style={{marginTop: 50}}>
      <TailorItem img='/images/slice1@3x.png' title='Checkin' description='Today, 11.00'/>
      <TailorItem img='/images/slice2@3x.png' title='Experience' description='Today, 15.00'/>
      <TailorItem img='/images/slice3@3x.png' title='More Experience' description='Tomorrow, 10.00'/>
      <TailorItem img='/images/slice4@3x.png' title='Checkout' description='Day after tomorrow, 13.00'/>
    </div>
  </div>
  )
}