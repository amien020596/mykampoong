import { Typography } from 'antd'
const { Text } = Typography
import ItemTrip from './ItemTrip'
export default function UpComingMyTrip({
  highlight
}) {
  return (
    <>
      <Text className='agenda-item-title'>
        <span style={{ fontWeight: 500 }}>This Week </span>
      </Text>
      <ItemTrip />
    </>
  )
}