import { MinusOutlined, PlusOutlined } from '@ant-design/icons'

import Button from 'antd/lib/button'
import InputNumber from 'antd/lib/input-number'

export default function Input({ onChange, value }) {
  return (
    <div className='f mdl'>
      <style jsx global>
        {`
          .input-number {
            max-width: 58px;
          }
          .input-number input {
            max-width: 58px;
            text-align: center;
          }
        `}
      </style>
      <Button
        size='small'
        style={{ padding: '0 6px' }}
        onClick={() => onChange(value - 1)}
      >
        <MinusOutlined />
      </Button>
      <InputNumber
        defaultValue={1}
        min={1}
        bordered={false}
        size='small'
        value={value}
        className='input-number'
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        size='small'
        style={{ padding: '0 6px' }}
        onClick={() => onChange(value + 1)}
      >
        <PlusOutlined />
      </Button>
    </div>
  )
}