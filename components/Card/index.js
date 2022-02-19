import { Typography } from 'antd'
import { StarFilled, EnvironmentOutlined } from '@ant-design/icons'
import { parseNumber } from 'libs/parser'
import Link from 'next/link'
import Tag from 'components/Tag'
const { Title, Text } = Typography

export default function Card({
  light,
  square,
  stretch,
  data = {}
}) {
  let service = data.service?.toLowerCase()
  service = service === 'staycation' ? 'stay' : service
  return (
    <Link href={`${service}/${data.slug}`}>
      <div className='card'>
        <style jsx>
          {`
          .card {
            width: ${square ? '276px' : stretch ? '260px' : '352px'};
            min-width: ${square ? '276px' : stretch ? '260px' : '352px'};
            margin-right: 20px;
            cursor: pointer;
            margin-bottom: 20px;
          }
          .content {
            padding: ${square || stretch ? '16px 0' : '16px 24px'};
            border-radius: 0 0 8px 8px;
            background: ${light ? 'transparent' : 'var(--gray700)'};
            border: ${light && !square && !stretch && 'solid 1px var(--gray300)'};
            border-top: 0;
          }
          .image {
            height: ${square || stretch ? '266px' : '222px'};
            border-radius: ${square || stretch ? '8px' : '8px 8px 0 0'};
            overflow: hidden;
            position: relative;
          }
          .image img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .tag-wrapper {
            position: absolute;
            top: 12px;
            left: 12px;
          }
        `}
        </style>
        <div className='image'>
          <div className='tag-wrapper'>
            <Tag type={service}>{data.service === 'Staycation' ? 'STAY' : data.service?.toUpperCase()}</Tag>
          </div>
          <img src={data.featured_image} />
        </div>
        <div className='content'>
          <Text style={{ color: light ? 'var(--gray500)' : 'var(--gray300)' }}>
            <EnvironmentOutlined /> {data.location} {/*· 3 days*/}
          </Text>
          <Title level={4} style={{ fontSize: 18, margin: '5px 0', color: light ? 'var(--gray800)' : '#fff', fontWeight: light && 500 }}>{data.name}</Title>
          <Text style={{ color: light ? 'var(--gray500)' : 'var(--gray200)' }}>
            <StarFilled style={{ color: 'var(--orange500)' }} /> {Number(data.rating_review).toFixed(1)} ({data.count_review})
          </Text>
          <Text style={{ fontWeight: 700, display: 'block', marginTop: 17, fontSize: 18, color: light ? 'var(--gray800)' : '#fff' }}>
            Rp {parseNumber(data.vacation_price * 1)} / <span style={{ fontWeight: 400, color: light ? 'var(--gray500)' : 'var(--gray50)' }}>person</span>
          </Text>
        </div>
      </div>
    </Link>
  )
}