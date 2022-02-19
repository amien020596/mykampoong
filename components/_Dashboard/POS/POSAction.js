import { Typography, Button } from 'antd'
import { usePOS } from 'libs/hooks/pos'
import { parseNumber } from 'libs/parser'
import { UpOutlined } from '@ant-design/icons'
const { Title } = Typography

export default function POSAction() {
  const { data } = usePOS.useContainer()
  const total = data.map(i => i.price * i.qty).reduce((a, b) => a + b)
  return (
    <div 
      style={{
        padding: 16,
        border: 'solid 1px var(--gray200)',
        borderRadius: 12,
        position: 'fixed',
        bottom: 22,
        width: 'calc(100% - 44px)',
        zIndex: 10
      }}
    >
      <div className='f f-btw mdl' style={{margin: '0 0 12px'}}>
        <Title level={5} style={{margin: 0}}>{data.length} item · Rp {parseNumber(total)}</Title>
        <UpOutlined />
      </div>
      <Button type='primary' block>Select payment</Button>
    </div>
  )
}