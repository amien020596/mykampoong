import { Typography, Button, Tag, Steps } from 'antd'
import { EnvironmentOutlined } from '@ant-design/icons'
import StepExp from './StepExp'
const { Title, Text } = Typography
const { Step } = Steps
export default function Itinenary() {
  return (
    <div>
      <style jsx>
        {`
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 20px 0;
          }
        `}
      </style>
      <Title level={2}>Itinenary</Title>
      <div className='f mdl f-btw'>
        <Title level={4}>Mar 29 - Apr 1, 2021 · 2 guest</Title>
        <Button size='small'>Edit</Button>
      </div>
      <div className='separator' />
      <div style={{marginBottom: 8}}>
        <Tag
          style={{
            background: 'var(--teal100)',
            color: 'var(--teal600)',
            border: 0,
            fontWeight: 500,
            letterSpacing: '.04em'
          }}
        >
          PACKAGE
        </Tag>
        <Text style={{ fontSize: 12 }}>· &nbsp;3 days&nbsp; ·</Text>
        <EnvironmentOutlined style={{margin: '0 5px 0 10px'}}/>
        <Text style={{ fontSize: 12 }}>Various Places</Text>

      </div>

      <Text style={{fontSize: 16}}>Experience the beauty of Kanto Lampo Waterfall & Goa gajah</Text>
      <div className='separator' />
      <Steps progressDot current={null} direction="vertical" className='custom'>
        <Step title={<StepExp />}/>
        <Step title={<StepExp />}/>
        <Step title={<StepExp />}/>
      </Steps>
    </div>
  )
}