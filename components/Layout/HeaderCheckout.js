import { Typography } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import CheckoutContext from 'libs/hooks/checkout'
const { Text } = Typography

export default function HeaderCheckout() {
  const { step } = CheckoutContext.useContainer()
  return (
    <div className='header' style={{boxShadow: 'var(--shadowBase)'}}>
      <div className='container f mdl f-btw'>
        <div className='f mdl'>
          <a className='logo'>
            <img src='/images/logo.svg' />
          </a>
        </div>
        <div>
          <div className='f mdl'>
            <a className='menu-item'>
              <Text>1. Itinenary</Text>
            </a>
            <RightOutlined />
            <a className={`menu-item ${step < 2 && 'disabled'}`}>
              <Text>2. Payment</Text>
            </a>
            <RightOutlined style={{color: step < 2 && 'var(--gray400)'}}/>
            <a className={`menu-item ${step < 3 && 'disabled'}`}>
              <Text>3. Complete</Text>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}