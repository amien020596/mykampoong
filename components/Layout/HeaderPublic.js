import { Typography, Button } from 'antd'
import { UserOutlined, MenuOutlined } from '@ant-design/icons'
import MyTrip from 'components/MyTrip'
import AuthLoginModal from 'components/Auth/AuthLoginModal'
import AuthRegisterModal from 'components/Auth/AuthRegisterModal'
import Link from 'next/link'
import ContextMyTrip from 'libs/hooks/mytrip'
import AccountContext from 'libs/hooks/account'
import { useRouter } from 'next/router'
const { Text } = Typography

export default function Header() {
  const router = useRouter();
  const { asPath } = router;
  const { setLoginModalVisible } = AccountContext.useContainer()
  const { setVisible } = ContextMyTrip.useContainer()
  const isActive = path => {
    return asPath.startsWith(path)
  }

  return (
    <div className='header'>
      <div className='container f mdl f-btw'>
        <div className='f mdl'>
          <Link href='/'>
            <a className='logo'>
              <img src='/images/logo.svg' />
            </a>
          </Link>
          <div className='f mdl'>
            <Link href='/package'>
              <a className={`menu-item ${isActive('/package') && 'active'}`}>
                <Text>Package</Text>
              </a>
            </Link>
            <Link href='/stay'>
              <a className={`menu-item ${isActive('/stay') && 'active'}`}>
                <Text>Stay</Text>
              </a>
            </Link>
            <Link href='/experience'>
              <a className={`menu-item ${isActive('/experience') && 'active'}`}>
                <Text>Experience</Text>
              </a>
            </Link>
            <Link href='/service'>
              <a className={`menu-item ${isActive('/service') && 'active'}`}>
                <Text>Service</Text>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className='f mdl'>
            <a className='menu-item' onClick={() => setLoginModalVisible(true)}>
              <Text><UserOutlined style={{ marginRight: 5 }} /> Account</Text>
            </a>
            <a className='menu-item' onClick={() => setVisible(true)}>
              <Text><MenuOutlined style={{ marginRight: 5 }} /> My Trip</Text>
            </a>
            <Button
              size='small'
              className='btn-black'
              onClick={() => router.push('/checkout')}
              style={{ padding: '0 15px', borderRadius: 8 }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <MyTrip />
      <AuthLoginModal />
      <AuthRegisterModal />
    </div>
  )
}