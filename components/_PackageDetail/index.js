import { EnvironmentOutlined, HeartOutlined, UploadOutlined } from '@ant-design/icons'

import AccountContext from 'libs/hooks/account'
import Breadcrumb from './Breadcrumb'
import Experience from 'components/Experience'
import ExploreNearby from './ExploreNearby'
import Float from './Float'
import Gallery from 'components/Gallery'
import Location from 'components/_StayDetail/Location'
import Paragraph from "antd/lib/typography/Paragraph";
import Tag from 'components/Tag'
import Typography from 'antd/lib/typography'
import { isloginUser } from 'libs/helpers/auth'
import { useGlobalContext } from 'libs/hooks/global'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useVacation } from 'libs/hooks/vacation'

const { Text, Title } = Typography

export default function PackageDetail() {
  const { t } = useTranslation('common')
  const [ellipsis, setEllipsis] = useState(true)
  const { data } = useVacation.useContainer()
  const dataPackage = data?.package || [];
  const { setModalWishlist } = useGlobalContext.useContainer();
  const { setLoginModalVisible } = AccountContext.useContainer()

  function openReadMore() {
    setEllipsis(false);
  }

  const handleClickModal = () => isloginUser() ? setModalWishlist(true) : setLoginModalVisible(true)

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
            margin-bottom:8.5rem;
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

      <div className='f mdl f-btw'>
        <Breadcrumb />
        <div className='action f mdl'>
          <a className='menu-item'>
            <Text><UploadOutlined style={{ marginRight: 5 }} /> Share</Text>
          </a>
          <a className='menu-item' onClick={() => handleClickModal()}>
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
              {ellipsis && <p className="readmore" onClick={openReadMore}>{t("Read More")}</p>}
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

            <Title level={3} style={{ fontWeight: 500, marginTop: 20 }}>{t("Things to know")}</Title>
            <Title level={4} style={{ fontSize: 18, fontWeight: 500, marginBottom: 20 }}>{t("Guest Requirement")}</Title>
            <Text style={{ fontSize: 16, lineHeight: '22.67px' }}>
              Up to 10 guests ages 5 and up can attend. Parents may also bring children under 2 years of age.
              <a style={{ marginTop: 10, fontWeight: 500, display: 'block' }}>{t("Read More")}</a>
            </Text>
            <Title level={4} style={{ fontSize: 18, fontWeight: 500, marginBottom: 20 }}>{t("What to Bring")}</Title>
            <Text style={{ fontSize: 16, lineHeight: '22.67px' }}>
              · Camera or gopro<br />
              · Bag
              <a style={{ marginTop: 10, fontWeight: 500, display: 'block' }}>{t("Read More")}</a>
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