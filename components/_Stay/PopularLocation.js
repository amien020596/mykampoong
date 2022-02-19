import Location from './Location'
import Typography from 'antd/lib/typography'
import { useTranslation } from 'next-i18next';

const { Title } = Typography

const PopularLocation = ({ data }) => {
  const { t } = useTranslation('common')
  data = data?.slice(0, 8)
  return (
    <div className='container' style={{ padding: '32px 0' }}>
      <Title style={{ fontWeight: 500, letterSpacing: '.03em' }} level={3}>
        {t("Popular Location")}
        <a style={{ fontSize: 16, marginLeft: 16 }}>{t("View more")}</a>
      </Title>
      <div className='f f-w' style={{ marginTop: 32 }}>
        {
          data?.map((item, index) => <Location key={index} data={item} />)
        }
      </div>
    </div>
  )
}



export default PopularLocation