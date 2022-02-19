import { EnvironmentOutlined, StarFilled } from '@ant-design/icons'

import Tag from 'antd/lib/tag'
import Typography from 'antd/lib/typography';

const { Text } = Typography
export default function StepExp({ vacation }) {

  function isStaycation(staycation) {
    return staycation !== "Staycation" ? "" : `(${vacation.detail_booking?.days} nights)`
  }

  function isLocatedExist(service) {

    let location = null
    if (service === "Service") {
      location = (
        <div className='f mdl'>
          <EnvironmentOutlined style={{ marginRight: 5 }} />
          <Text style={{ fontSize: 12, color: 'var(--gray600)' }}>
            Serongga, Kec. Gianyar, Kabupaten Gianyar, Bali
          </Text>
        </div>
      )
    }
    return location;

  }
  return (
    <div style={{ marginBottom: 40 }}>
      <style jsx>
        {`
        .images {
        width: 112px;
        height: 112px;
        border-radius: 8px;
        overflow: hidden;
        object-fit: cover;
        margin-right: 16px;
      }
      `}
      </style>
      {/* <Text style={{ fontWeight: 500, fontSize: 16 }}>{`${format(new Date(vacation.detail_booking?.start_date), "MMM d ")} - ${format(new Date(vacation.detail_booking?.end_date), "MMM d")} ${isStaycation(vacation.detail_booking.travel_object.service)}`}</Text> */}
      <div className='f' style={{ marginTop: 20 }}>
        <img src='/images/dump/taylor-simpson-Z8s3PRQVuUk-unsplash.jpg' className='images' />
        <div>
          <div>
            <Tag color='blue'>{`${vacation?.travel_object?.service} `}</Tag>
            <StarFilled style={{ color: 'var(--orange500)', marginRight: 5, marginLeft: 10 }} />
            <Text style={{ fontWeight: 500 }}>
              {`${vacation?.travel_object?.average_rating.toFixed(1)} (${vacation?.travel_object?.count_review})`}
            </Text>
          </div>
          <Text style={{ fontSize: 16 }}>
            {vacation?.travel_object?.name}
          </Text>
          {isLocatedExist(vacation.travel_object.service)}
        </div>
      </div>
    </div>
  )
}