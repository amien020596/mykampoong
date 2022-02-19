import { Steps, Typography, Tag } from 'antd'
import { EnvironmentOutlined, StarFilled } from '@ant-design/icons'
const { Text } = Typography
export default function StepExp() {
  return (
    <div style={{marginBottom: 40}}>
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
      <Text style={{ fontWeight: 500, fontSize: 16 }}>Mar 29 - Mar 1 (2 nights)</Text>
      <div className='f' style={{marginTop: 20}}>
        <img src='/images/dump/taylor-simpson-Z8s3PRQVuUk-unsplash.jpg' className='images' />
        <div>
          <div>
            <Tag color='blue'>STAY</Tag>
            <StarFilled style={{color: 'var(--orange500)', marginRight: 5, marginLeft: 10}} />
            <Text style={{fontWeight: 500}}>4.7 (28)</Text>
          </div>
          <Text style={{fontSize: 16}}>Guest house Ngurah Rai</Text>
          <div className='f mdl'>
            <EnvironmentOutlined style={{ marginRight: 5 }} />
            <Text style={{fontSize: 12, color: 'var(--gray600)'}}>
              Serongga, Kec. Gianyar, Kabupaten Gianyar, Bali
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}