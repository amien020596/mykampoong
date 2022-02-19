import { Typography, Avatar, Tooltip } from 'antd'
import { ConsoleSqlOutlined, EnvironmentOutlined, StarFilled } from '@ant-design/icons'
import { parseName } from 'libs/parser'
import Tag from 'components/Tag'
import Gallery from 'components/Gallery'
import FacilityItem from './FacilityItem'
import Scrollbars from 'react-custom-scrollbars'
import ReviewItem from './ReviewItem'
import ListReview from 'components/_Reviews/ListReview'
import Reviews from 'components/_Reviews/Reviews'
const { Text, Title, Paragraph } = Typography

export default function Experience({ dataexp }) {
  const data = dataexp?.travel_object
  const { review: reviewsData } = dataexp

  return (
    <div>
      <div className='f mdl f-btw' style={{ marginBottom: 40 }}>
        <div>
          <Title level={3} style={{ fontWeight: 500, marginBottom: 10 }}>{data.name}</Title>
          <div>
            <Tag type={data.service.toLowerCase()}>{data.service}</Tag>
            <Text style={{ margin: '0 10px 0 5px' }}>·</Text>
            <StarFilled style={{ marginRight: 10, color: 'var(--orange500)' }} /><Text style={{ fontWeight: 500 }}>{Number(data.rating_review).toFixed(1)} ({data.count_review})</Text>
            <Text style={{ margin: '0 10px' }}>·</Text>
            <EnvironmentOutlined style={{ marginRight: 5 }} />
            <Text>{data.location}</Text>
          </div>
        </div>
        <Tooltip title={data.tourist_actors.owner_name}>
          <Avatar size={58}>{parseName(data.tourist_actors.owner_name)}</Avatar>
        </Tooltip>

      </div>

      <Title level={4} style={{ letterSpacing: '.03em', fontSize: 18, fontWeight: 500, marginBottom: 20 }}>Description</Title>
      <Paragraph
        ellipsis={{ rows: 4, expandable: true, symbol: <a style={{ display: 'block', marginTop: 10, fontWeight: 500 }}>Read More</a> }}
        style={{ fontSize: 16, lineHeight: '22.67px' }}
      >
        {data.description}
      </Paragraph>

      <Title level={4} style={{ letterSpacing: '.03em', fontSize: 18, fontWeight: 500, marginBottom: 20 }}>Gallery</Title>
      <Gallery preview={false} images={data.vacation_images} />

      <Title level={4} style={{ letterSpacing: '.03em', fontSize: 18, fontWeight: 500, marginBottom: 20, marginTop: 40 }}>Amenities</Title>
      <div className='f f-w' style={{ maxWidth: 400 }}>
        <FacilityItem title='Wifi' img='/images/icon/rss.svg' />
        <FacilityItem title='Breakfast' img='/images/icon/restaurant.svg' />
        <FacilityItem title='Coffee' img='/images/icon/coffee.svg' />
        <FacilityItem title='Air Conditioner' img='/images/icon/wallpaper.svg' />
      </div>

      {reviewsData !== undefined && <Reviews data={reviewsData || []} />}
      {/* <Title level={4} style={{letterSpacing: '.03em',fontSize: 18, fontWeight: 500, marginBottom: 40, marginTop: 40 }}>
        28 Reviews
        <div style={{ marginLeft: 10, display: 'inline' }}>
          <StarFilled style={{ color: 'var(--orange500)', marginRight: 10 }} />
          <span style={{ fontWeight: 400, fontSize: 16 }}>4.7</span>
        </div>
      </Title>

      <Scrollbars style={{ width: '100%', height: 160 }}>
        <div className='f' style={{paddingBottom: 10}}>
          <ReviewItem />
          <ReviewItem />
        </div>
      </Scrollbars> */}

    </div>
  )
}