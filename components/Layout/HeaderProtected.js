import { MessageOutlined, NotificationOutlined } from '@ant-design/icons'

import Avatar from 'antd/lib/avatar'
import Badge from 'antd/lib/badge'
import Typography from 'antd/lib/typography'

const { Text } = Typography
export default function HeaderProtected() {
  return (
    <div className='header'>
      <div className='container f f-btw mdl'>
        <a className='logo'>
          <img height="70" style={{ paddingTop: 5, paddingBottom: 5 }} src='/images/headerlogonotagline.png' />
          <Text style={{ fontSize: 20, color: 'var(--gray600)', marginLeft: 6, letterSpacing: '.03em' }}>Host</Text>
        </a>
        <div className='f mdl'>
          <a className='menu-item'>
            <Badge dot>
              <MessageOutlined style={{ fontSize: 16 }} />
            </Badge>
          </a>
          <a className='menu-item'>
            <NotificationOutlined style={{ fontSize: 16 }} />
          </a>
          <div className='menu-item'>
            <Avatar src='/images/dump/ava.jpg' size={32} />
          </div>
        </div>
      </div>
    </div>
  )
}