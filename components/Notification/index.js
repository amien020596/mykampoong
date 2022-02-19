import Drawer from 'antd/lib/drawer'
import NotificationItem from './NotificationItem'
import Scrollbars from 'react-custom-scrollbars'
import Typography from 'antd/lib/typography'
import { useGlobalContext } from 'libs/hooks/global'
import { useTranslation } from 'react-i18next'

const { Title } = Typography



export default function Notification() {
  const { t } = useTranslation()
  const { drawerNotificationVisible, setDrawerNotificationVisible } = useGlobalContext.useContainer()

  const data =
    [
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
      { name: "data 1" },
    ]


  return (
    <Drawer
      placement='right'
      width={360}
      visible={drawerNotificationVisible}
      headerStyle={{ borderBottom: 0 }}
      bodyStyle={{ paddingTop: 10, paddingLeft: 0, paddingRight: 0, overflow: 'hidden' }}
      closable={false}
      onClose={() => setDrawerNotificationVisible(!drawerNotificationVisible)}
      title={<Title level={2} style={{ fontWeight: 500, letterSpacing: '.03em', fontSize: 28, margin: 0 }}>{t("Notifications")}</Title>}
    >

      <div className='f mdl f-btw' style={{ marginBottom: 15, marginLeft: 10, marginRight: 10, borderTop: 'solid 1px var(--gray300)' }} >
        <Scrollbars autoHide universal={true} style={{ height: "calc(100vh - 100px)" }}>
          <div>
            {data.map((data, index) => {
              return <NotificationItem key={index} />
            })}
          </div>
        </Scrollbars>
      </div>
    </Drawer>
  )
}