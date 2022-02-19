import { EnvironmentOutlined } from '@ant-design/icons'
import Typography from 'antd/lib/typography'

const { Text } = Typography
export default function Desa() {
  return (
    <div className='f desa'>
      <style jsx>
        {`
          .desa {
            border-radius: 8px;
            overflow: hidden;
            border: solid 1px var(--gray300);
            width: 512px;
            min-width: 512px;
            margin: 0 20px 20px 0;
          }
          .content {
            padding: 20px;
          }
          .photo {
            height: 117px;
            width: 177px;
            overflow: hidden;
          }
          .photo img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        `}
      </style>
      <div className='photo'>
        <img src='/images/dump/taylor-simpson-Z8s3PRQVuUk-unsplash.jpg' />
      </div>
      <div className='content'>
        <div>
          <EnvironmentOutlined style={{ marginRight: 5 }} />
          <Text style={{ fontSize: 13, color: 'var(--gray600)' }}>Gianyar, Bali</Text>
        </div>
        <Text style={{ fontSize: 18, fontWeight: 500, letterSpacing: '.03em', display: 'block', marginBottom: 4 }}>Desa Wisata Taro Tegalalang</Text>
        <Text style={{ color: 'var(--gray500)', fontWeight: 500 }}>7 Package · 19 Experience · 6 Stay</Text>
      </div>
    </div>
  )
}