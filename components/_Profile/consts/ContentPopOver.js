import { destroyToken, isloginUser } from 'libs/helpers/auth';

import AccountContext from 'libs/hooks/account';
import Badge from 'antd/lib/badge';
import Button from "antd/lib/button";
import Divider from 'antd/lib/divider';
import Link from 'next/link'
import Popover from "antd/lib/popover";
import Text from "antd/lib/typography/Text";
import { map } from 'lodash';
import { useGlobalContext } from 'libs/hooks/global';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';

const ContentPopOver = () => {
  const { t } = useTranslation('common')

  const itemsMenu = [
    { text: `${t("Message")}`, login: true, path: "/message", countMessage: 1 },
    { text: `${t("Notifications")}`, login: true, path: null, countMessage: null },
    { text: `${t("Wishlist")}`, login: true, path: "/wishlist", countMessage: null },
    { text: `${t("Login")}`, login: false, path: null, countMessage: null },
    { text: `${t("Sign up")}`, login: false, path: null, countMessage: null },
    { text: `${t("Account")}`, login: true, path: "/profile", countMessage: null },
    { text: `${t("Help")}`, login: false, path: "/help", countMessage: null },
    { text: `${t("Sign out")}`, login: true, path: null, countMessage: null }

  ];

  const { setLoginModalVisible, setRegisterModalVisible } = AccountContext.useContainer()
  const { setDrawerNotificationVisible } = useGlobalContext.useContainer();
  const router = useRouter();
  const { asPath } = router;
  const isActive = path => {
    return asPath.startsWith(path)
  }

  function isLogin() {
    isloginUser() ? router.push('/profile') : setLoginModalVisible(true)
  }

  function logout() {
    destroyToken()
    router.push('/')
    return;
  }

  function onClick(value) {
    console.log("value click", value)
    if (value.text === `${t("Login")}`) {
      setLoginModalVisible(true)
    }
    if (value.text === `${t("Sign up")}`) {
      setRegisterModalVisible(true)
    }
    if (value.text === `${t("Sign out")}`) {
      logout()
    }
    if (value.text === `${t("Notifications")}`) {
      setDrawerNotificationVisible(true)
    }
  }

  let menubar = itemsMenu.map((menu, index) => {
    if (menu.login === isloginUser()) {
      if (index === 5) {
        return (
          <div key={index}>
            <div className="separator" />
            <Link href={menu.path}>
              <a className={`menu-popover-profile`}>
                <Text strong>{menu.text}</Text>
              </a>
            </Link>
          </div>
        )
      } else {
        if (menu.path) {
          return (
            <Link href={menu.path} key={index}>
              <div className="f mdl f-btw">
                <a className={`menu-popover-profile`}>
                  {menu.countMessage ? (<Badge dot>
                    <Text strong>{menu.text}</Text>
                  </Badge>) : (<Text strong>{menu.text}</Text>)}
                </a>
                {menu.countMessage && (<Text>{menu.countMessage} {t("unread")}</Text>)}
              </div>
            </Link>
          )
        }
        return (
          <div key={index} className="f mdl f-btw" onClick={() => onClick(menu)}>
            <a className={`menu-popover-profile`}>
              <Text strong>{menu.text}</Text>
            </a>
            {menu.countMessage && (<Text>{menu.countMessage} {t("unread")}</Text>)}
          </div>
        )
      }
    }
    return null;
  })

  menubar[6] = (
    <Link href="/help" key={6}>
      <div className="f mdl f-btw">
        <a className={`menu-popover-profile`}>
          <Text strong>{t("Help")}</Text>
        </a>
      </div>
    </Link>)

  return (
    <div className={'f f-c popover-profile'}>
      <style jsx>
        {`
        .separator {
          height: 1px;
          width: 100%;
          background: var(--gray300);
          margin-bottom: 5px;
        }
        `}
      </style>
      {menubar}
      {/* <Link href='/stay'>
        <div className="f mdl f-btw">
          <a className={`menu-popover-profile`}>
            <Text strong>Message</Text>
          </a>
          <Text>1 unread</Text>
        </div>
      </Link>
      <Link href='/package'>
        <div className="f mdl f-btw">
          <a className={`menu-popover-profile`}>
            <Badge dot>
              <Text strong>Notifications</Text>
            </Badge>
          </a>
          <Text>1 unread</Text>
        </div>
      </Link>
      <Link href='/service'>
        <a className={`menu-popover-profile`}>
          <Text strong>Wishlist</Text>
        </a>
      </Link>
      <Link href='/'>
        <a className={`menu-popover-profile`}>
          <Text strong>Login</Text>
        </a>
      </Link>
      <Link href='/'>
        <a className={`menu-popover-profile`}>
          <Text strong>Sign up</Text>
        </a>
      </Link>
      <div className="separator" />
      <Link href='/profile'>
        <a className={`menu-popover-profile`}>
          <Text strong>Account</Text>
        </a>
      </Link>
      <Link href='/'>
        <a className={`menu-popover-profile`}>
          <Text strong>Help</Text>
        </a>
      </Link>
      <Link href='/'>
        <a className={`menu-popover-profile`}>
          <Text strong>Sign out</Text>
        </a>
      </Link> */}

    </div>
  );
}

export default ContentPopOver