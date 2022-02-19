import { Avatar, Typography, Button } from 'antd'
import { parseNumber } from 'libs/parser'
import { useState } from 'react'
import { usePOS } from 'libs/hooks/pos'
import InputNumber from 'components/InputNumber'
const { Text } = Typography

export default function POSProductItem({ product }) {
  const [qty, setQty] = useState(0)
  const { data, mutate } = usePOS.useContainer()

  const handleSetQty = value => {
    const newData = {
      id: product.id,
      price: product.price,
      qty: value
    }
    if (data.length == 0) {
      mutate([newData])
    }
    if (data.length > 0 && value !== 0) {
      const filtered = data.filter(i => i.id !== product.id)
      mutate([...filtered, newData])
    }
    if (data.length > 0 && value == 0) {
      const filtered = data.filter(i => i.id !== product.id)
      mutate([...filtered])
    }
    setQty(value)
  }

  return (
    <div className='f' style={{ margin: '16px 0 32px' }}>
      <Avatar size={84} shape='square' style={{ minWidth: 84 }} />
      <div
        className='f f-btw f-end'
        style={{
          marginLeft: 16,
          width: '100%',
          padding: '5px 0 16px',
          marginBottom: -16,
          borderBottom: 'solid 1px var(--gray200)'
        }}
      >
        <div style={{ height: '100%' }}>
          <Text>{product.name}</Text>
          <Text style={{ fontWeight: 500, display: 'block' }}>Rp {parseNumber(product.price)}</Text>
        </div>
        {qty > 0 && <InputNumber onChange={handleSetQty} value={qty} />}
        {qty == 0 && <Button size='small' onClick={() => handleSetQty(1)}>Add</Button>}
      </div>
    </div>
  )
}