import { Typography } from 'antd'
const { Text } = Typography
export default function IncludeItem() {
  return (
    <div className='wrapper f f-start'>
      <style jsx>
        {`
          .wrapper {
            padding: 20px;
            border: solid 1px var(--gray300);
            max-width: 332px;
            width: 100%;
            min-height: 132px;
            margin-right: 12px;
            margin-bottom: 12px;
          }
          .wrapper:nth-child(even) {
            margin-right: 0;
          }
          .content {
            margin-left: 17px;
            margin-top: 10px
          }
        `}
      </style>
      <img src='/images/icon/bike.svg'/>
      <div className='content'>
        <Text style={{ fontSize: 16, letterSpacing: '.03em', fontWeight: 500 }}>Transportation</Text>
        <Text style={{ display: 'block', marginTop: 2 }}>A car with air conditioner</Text>
      </div>
    </div>
  )
}