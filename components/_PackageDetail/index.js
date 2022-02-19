import { Typography } from 'antd'
import { HeartOutlined, UploadOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { useVacation } from 'libs/hooks/vacation'
import Paragraph from "antd/lib/typography/Paragraph";
import Breadcrumb from './Breadcrumb'
import Tag from 'components/Tag'
import Gallery from 'components/Gallery'
import Experience from 'components/Experience'
import SimilarPackage from './SimilarPackage'
import ExploreNearby from './ExploreNearby'
import Float from './Float'
import Location from 'components/_StayDetail/Location'
import { useState } from 'react'
import MetaHead from 'components/_Meta/MetaHead';

const { Text, Title } = Typography

export default function PackageDetail() {
  const [ellipsis, setEllipsis] = useState(true)
  const { data } = useVacation.useContainer()
  const dataPackage = data?.package || [];
  function openReadMore() {
    setEllipsis(false);
  }

  return (
    <div className='container'>
      <style jsx>
        {`
          .left {
            max-width: 683px;
            width: 100%;
            margin-bottom: 70px;
          }
          .right {
            width: 100%;
            margin-left: 100px;
            max-width: calc(100% - 683px - 100px);
          }
          .info-wrapper {
            margin: 40px 0;
          }
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 60px 0;
          }
          .info-item {
            min-width: calc(100% / 3)
          }
          .readmore{
            font-size:14px;
            margin-bottom:0;
            color:#F97316;
          }
          .readmore:hover{
            cursor:pointer
          }
        `}
      </style>
      <MetaHead
        site_name={'mykampoong'}
        // title={dataPackage?.vacation?.name}
        // description={dataPackage?.vacation?.description}
        // image={dataPackage?.vacation?.featured_image}
        imagetype={'image/jpg'}
        imagewidth={'1200'}
        imageheight={'1200'}
      />
      <div className='f mdl f-btw'>
        <Breadcrumb />
        <div className='action f mdl'>
          <a className='menu-item'>
            <Text><UploadOutlined style={{ marginRight: 5 }} /> Share</Text>
          </a>
          <a className='menu-item'>
            <Text><HeartOutlined style={{ marginRight: 5 }} /> Save</Text>
          </a>
        </div>
      </div>

      <div className='f'>
        <div className='left'>
          <div>
            <Gallery images={data?.vacation?.vacation_images} />
            <Title level={2} style={{ fontWeight: 500, marginTop: 30 }}>{data?.vacation.name}</Title>
            <div>
              <Tag type={data?.vacation.service.toLowerCase()}>{data?.vacation.service}</Tag>
              <Text style={{ margin: '0 10px 0 5px' }}>·</Text>
              <EnvironmentOutlined style={{ marginRight: 5 }} />
              <Text>{data?.vacation.location}</Text>
            </div>

            <div className='info-wrapper f f-btw mdl'>
              <div className='info-item'>
                <img src='/images/icon/time.svg' style={{ marginRight: 18 }} />
                <Text style={{ fontWeight: 500 }}>3 Days</Text>
              </div>
              <div className='info-item'>
                <img src='/images/icon/people.svg' style={{ marginRight: 18 }} />
                <Text style={{ fontWeight: 500 }}>Up to 10 people</Text>
              </div>
              <div className='info-item'>
                <img src='/images/icon/tag-alt.svg' style={{ marginRight: 18 }} />
                <Text style={{ fontWeight: 500 }}>Save up to <span style={{ fontWeight: 600, color: 'var(--gray800)' }}>Rp. 1.570.000</span></Text>
              </div>
            </div>

            <Title level={3} style={{ fontWeight: 500 }}>Highlight</Title>
            <Text style={{ fontSize: 16, lineHeight: '22.67px' }}>
              <Paragraph ellipsis={ellipsis ? { rows: 3, expandable: false, symbol: "" } : false}>
                {data?.vacation.description}
                7.30-8.00 am by collecting from your hotel.
                Get your gem in experience with us with explore most incredible place, with visit most of the best waterfalls

                1. Kant Lampo Waterfall. it's one of best waterfalls for swim that location in hidden way Bali's jungle and the waterfall trough into rocky that make this waterfall unique and fantastic for isnta foto!

                2. Next visit Goa Gajah, or Elephant Cave, is located on the island of Bali near Ubud, in Indonesia. Built in the 9th century, it served as a sanctuary.
              </Paragraph>
              {ellipsis && <p className="readmore" onClick={openReadMore}>Read more</p>}
            </Text>

            <div className='separator' />
            {dataPackage.length > 0 &&
              dataPackage.map((exp) =>
                <div key={exp.id}>
                  <Experience dataexp={exp} />
                  <div className='separator' />
                </div>
              )
            }

            <Location />

            <Title level={3} style={{ fontWeight: 500, marginTop: 20 }}>Things to know</Title>
            <Title level={4} style={{ fontSize: 18, fontWeight: 500, marginBottom: 20 }}>Guest Requirement</Title>
            <Text style={{ fontSize: 16, lineHeight: '22.67px' }}>
              Up to 10 guests ages 5 and up can attend. Parents may also bring children under 2 years of age.
              <a style={{ marginTop: 10, fontWeight: 500, display: 'block' }}>Read More</a>
            </Text>
            <Title level={4} style={{ fontSize: 18, fontWeight: 500, marginBottom: 20 }}>What to Bring</Title>
            <Text style={{ fontSize: 16, lineHeight: '22.67px' }}>
              · Camera or gopro<br />
              · Bag
              <a style={{ marginTop: 10, fontWeight: 500, display: 'block' }}>Read More</a>
            </Text>

          </div>
          <div className='separator' />

        </div>
        <div className='right'>
          <Float />
        </div>
      </div>
      {data?.nearBy.length > 0 && <ExploreNearby data={data?.nearBy} />}

      {/* <SimilarPackage /> */}

    </div>
  )
}