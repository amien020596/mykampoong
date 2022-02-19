import { MenuOutlined, UserOutlined } from '@ant-design/icons'

import AuthLoginModal from 'components/Auth/AuthLoginModal'
import AuthRegisterModal from 'components/Auth/AuthRegisterModal'
import Button from 'antd/lib/button'
import ContextMyTrip from 'libs/hooks/mytrip'
import CreateWishlistModal from 'components/_Wishlish/CreateWishlistModal'
import Link from 'next/link'
import MessageModal from 'components/_Message/MessageModal'
import MyTrip from 'components/Drawer'
import Notification from 'components/Notification'
import PopOverUser from 'components/_Profile/popover'
import Typography from 'antd/lib/typography'
import WishlistModal from 'components/_Wishlish/WishlistModal'
import { isloginUser } from 'libs/helpers/auth'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';

const { Text } = Typography

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})

const Header = () => {
  const { t } = useTranslation("common")
  const router = useRouter();
  const { asPath } = router;

  const { setVisible } = ContextMyTrip.useContainer()
  const isActive = path => {
    return asPath.includes(path)
  }

  function isLogin() {
    isloginUser() ? router.push('/profile') : setLoginModalVisible(true)
  }

  let user = { name: "account", email: "account" };
  if (typeof window !== undefined && isloginUser()) {
    user = JSON.parse(window.localStorage.getItem("USSID"))
  }

  return (
    <div className='header'>
      <div className='container f mdl f-btw'>
        <div className='f mdl'>
          <Link href='/'>
            <a className='logo'>
              <img style={{ paddingTop: 5, paddingBottom: 5 }} height="70" src='/images/headerlogonotagline.png' />
            </a>
          </Link>
          <div className='f mdl'>
            <Link href='/package'>
              <a className={`menu-item ${isActive('/package') && 'active'}`}>
                <Text>{t("Package")}</Text>
              </a>
            </Link>
            <Link href='/stay'>
              <a className={`menu-item ${isActive('/stay') && 'active'}`}>
                <Text>{t("Stay")}</Text>
              </a>
            </Link>
            <Link href='/experience'>
              <a className={`menu-item ${isActive('/experience') && 'active'}`}>
                <Text>{t("Experience")}</Text>
              </a>
            </Link>
            <Link href='/service'>
              <a className={`menu-item ${isActive('/service') && 'active'}`}>
                <Text>{t("Service")}</Text>
              </a>
            </Link>
          </div>
        </div>
        <div>
          <div className='f mdl'>
            <PopOverUser>
              <a className='menu-item profile'
              // onClick={() => isLogin()}
              >
                {/* <Text><UserOutlined style={{ marginRight: 5 }} /> {isloginUser() ? `${user.name || user.email}` : "Account"}</Text> */}
                <Text><UserOutlined style={{ marginRight: 5 }} /> {"Account"}</Text>
              </a>
            </PopOverUser>
            <a className='menu-item' onClick={() => setVisible(true)}>
              <Text><MenuOutlined style={{ marginRight: 5 }} /> {t("My Trip")}</Text>
            </a>
            <Button
              size='small'
              className='btn-black'
              onClick={() => router.push('/checkout')}
              style={{ padding: '0 15px', borderRadius: 8 }}
            >
              {t("Checkout")}
            </Button>
          </div>
        </div>
      </div>
      <MyTrip />
      <Notification />
      <AuthLoginModal />
      <AuthRegisterModal />
      <CreateWishlistModal />
      <WishlistModal />
      <MessageModal />
    </div>
  )
}


export default Header