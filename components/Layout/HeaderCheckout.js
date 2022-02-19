import CheckoutContext from 'libs/hooks/checkout'
import Link from 'next/link'
import { RightOutlined } from '@ant-design/icons'
import Typography from 'antd/lib/typography'

const { Text } = Typography

export default function HeaderCheckout() {
  const { step } = CheckoutContext.useContainer()
  return (
    <div className='header' style={{ boxShadow: 'var(--shadowBase)' }}>
      <div className='container f mdl f-btw'>
        <div className='f mdl'>
          <Link href="/">
            <a className='logo'>
              <img height="70" style={{ paddingTop: 5, paddingBottom: 5 }} src='/images/headerlogonotagline.png' />
            </a>
          </Link>
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
            <RightOutlined style={{ color: step < 2 && 'var(--gray400)' }} />
            <a className={`menu-item ${step < 3 && 'disabled'}`}>
              <Text>3. Complete</Text>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}