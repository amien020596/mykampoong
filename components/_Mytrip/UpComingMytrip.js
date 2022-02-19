import ItemTrip from './ItemTrip'
import Typography from 'antd/lib/typography'
import { useTranslation } from 'next-i18next';

const { Text } = Typography

const UpComingMyTrip = ({ highlight }) => {
  const { t } = useTranslation('common')
  return (
    <>
      <Text className='agenda-item-title'>
        <span style={{ fontWeight: 500 }}>{t("This Week")} </span>
      </Text>
      <ItemTrip />
    </>
  )
}


export default UpComingMyTrip