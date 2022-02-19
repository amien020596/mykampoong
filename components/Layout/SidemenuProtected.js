import { Menu } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  CalendarOutlined,
  UserOutlined,
  AppstoreOutlined,
  MessageOutlined,
  DollarOutlined,
  QrcodeOutlined,
  SafetyCertificateOutlined
} from '@ant-design/icons'

const menu = [
  {
    title: 'Profile',
    link: '/host',
    icon: <UserOutlined />
  },
  {
    title: 'Agenda',
    link: '/host/agenda',
    icon: <CalendarOutlined />
  },
  {
    title: 'POS',
    link: '/host/pos',
    icon: <QrcodeOutlined />
  },
  {
    title: 'Message',
    link: '/host/message',
    icon: <MessageOutlined />
  },
  {
    title: 'Service',
    link: '/host/service',
    icon: <AppstoreOutlined />
  },
  {
    title: 'Product',
    link: '/host/product',
    icon: <SafetyCertificateOutlined />
  },
  {
    title: 'Order',
    link: '/host/order',
    icon: <DollarOutlined />
  },

]

export default function Sidemenu() {
  const router = useRouter()
  const { asPath } = router
  return (
    <div className='sidemenu'>
      <style jsx>
        {`
          .sidemenu {
            max-width: 200px;
            width: 100%;
            border-right: solid 1px var(--gray200);
            height: calc(100vh - 70px);
            padding-top: 28px;
            background: #fff;
            position: sticky;
            top: 70px;
          }
        `}
      </style>
      <Menu mode="vertical" selectedKeys={[asPath]}>
        {
          menu.map(item =>
            <Menu.Item key={item.link} icon={item.icon}>
              <Link href={item.link}>
                <a>
                  {item.title}
                </a>
              </Link>
            </Menu.Item>
          )
        }
      </Menu>
    </div>
  )
}