import { useState } from 'react'
import { Typography, Popover, Button, Input } from 'antd'
import { DownOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons'
const { Text } = Typography
const content = () => {
  return (
    <div style={{padding: '10px 18px'}}>
      <div className='f mdl f-btw' style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 16 }}>Adults</Text>
        <div className='f mdl'>
          <Button style={{ height: 32, padding: '0 8px' }}><MinusOutlined /></Button>
          <Input bordered={false} style={{ width: 50, textAlign: 'center', fontSize: 16, appearance: 'none' }} defaultValue={0} />
          <Button style={{ height: 32, padding: '0 8px' }}><PlusOutlined /></Button>
        </div>
      </div>
      <div className='f mdl f-btw' style={{ marginBottom: 24 }}>
        <div className='f f-c'>
          <Text style={{ fontSize: 16 }}>Children</Text>
          <Text style={{ fontSize: 12 }}>Age 2-12</Text>
        </div>
        <div className='f mdl'>
          <Button style={{ height: 32, padding: '0 8px' }}><MinusOutlined /></Button>
          <Input bordered={false} style={{ width: 50, textAlign: 'center', fontSize: 16, appearance: 'none' }} defaultValue={0} />
          <Button style={{ height: 32, padding: '0 8px' }}><PlusOutlined /></Button>
        </div>
      </div>
      <div className='f mdl f-btw' style={{ marginBottom: 32 }}>
        <div className='f f-c'>
          <Text style={{ fontSize: 16 }}>Infants</Text>
          <Text style={{ fontSize: 12 }}>Under 2</Text>
        </div> 
        <div className='f mdl'>
          <Button style={{ height: 32, padding: '0 8px' }}><MinusOutlined /></Button>
          <Input bordered={false} style={{ width: 50, textAlign: 'center', fontSize: 16, appearance: 'none' }} defaultValue={0} />
          <Button style={{ height: 32, padding: '0 8px' }}><PlusOutlined /></Button>
        </div>
      </div>
      <div className='f f-rht'>
        <Button type='primary' size='large'>Save</Button>
      </div>
    </div>
  )
}
export default function AddGuest() {
  const [focus, setFocus] = useState(false)
  const handleVisibleChange = e => {
    setFocus(e)
  }
  return (
    <Popover
      content={content()}
      placement='bottomLeft'
      overlayStyle={{ 
        width: 333
      }}
      trigger='click'
      overlayClassName='custom'
      onVisibleChange={handleVisibleChange}
    >
      <div className={`f f-btw mdl inputLike group ${focus && 'focus'}`}>
        <Text className='input-label'>Guest</Text>
        <DownOutlined />
      </div>
    </Popover>
  )
}