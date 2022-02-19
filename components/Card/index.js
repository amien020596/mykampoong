import { EnvironmentOutlined, HeartFilled, StarFilled } from '@ant-design/icons'

import Button from 'antd/lib/button'
import Link from 'next/link'
import Modal from 'antd/lib/modal'
import Tag from 'components/Tag'
import Typography from 'antd/lib/typography'
import { deleteWishlist } from 'modules/wishlist/delete-wishlist'
import { message } from 'antd'
import { parseNumber } from 'libs/helpers/parser/parser'
import { useGlobalContext } from 'libs/hooks/global'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography

function Card({
  light,
  square,
  stretch,
  data = {},
}) {

  const { t } = useTranslation('common')
  let service = data.service?.toLowerCase()
  service = service === 'staycation' ? 'stay' : service
  const { route } = useRouter();
  const { query } = useRouter();
  const [visibleModal, setVisibleModal] = useState(false)
  const { setReloadDataWishlist } = useGlobalContext.useContainer();

  const onClose = (e) => {
    e.preventDefault()
    setVisibleModal(false)
  }

  const handleDeleteWishlist = (e, id) => {
    e.preventDefault();

    const slug = query.slug
    deleteWishlist(slug, id)
      .then(response => {
        if (response.success) {
          message.success(response.message)
          setReloadDataWishlist(true)
        } else {
          message.error('failed remove item from wishlist')
        }
        setVisibleModal(false)
      }).catch(() => {
        message.error('failed remove item from wishlist')
        setVisibleModal(false)
      })
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    setVisibleModal(true)
  }
  return (
    <Link href={`/${service}/${data.slug || data.travel_object_slug}`}>
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
          .wishlist-wrapper{
            position: absolute;
            top: 12px;
            right: 12px;
          }
        `}
        </style>
        <div className='image'>
          <div className='tag-wrapper'>
            <Tag type={service || data.service.toLowerCase()}>{data.service === 'Staycation' ? 'STAY' : data.service?.toUpperCase()}</Tag>
          </div>
          {route === '/wishlist/[slug]' && <div className='wishlist-wrapper' onClick={handleWishlist}>
            <HeartFilled style={{ fontSize: 20, color: "#E02401" }} />
          </div>}
          <img src={data.featured_image} />
        </div>
        <div className='content'>
          {data.location && <Text style={{ color: light ? 'var(--gray500)' : 'var(--gray300)' }}>
            <EnvironmentOutlined /> {data.location} {/*· 3 days*/}
          </Text>}
          <Title level={4} style={{ fontSize: 18, margin: '5px 0', color: light ? 'var(--gray800)' : '#fff', fontWeight: light && 500 }}>{data.name || data.travel_object_name}</Title>
          {data.rating_review >= 0 && <Text style={{ color: light ? 'var(--gray500)' : 'var(--gray200)' }}>
            <StarFilled style={{ color: 'var(--orange500)' }} /> {Number(data.rating_review).toFixed(1)} ({data.count_review})
          </Text>}
          <Text style={{ fontWeight: 700, display: 'block', marginTop: 17, fontSize: 18, color: light ? 'var(--gray800)' : '#fff' }}>
            Rp {parseNumber(data.vacation_price * 1)} / <span style={{ fontWeight: 400, color: light ? 'var(--gray500)' : 'var(--gray50)' }}>{t("person")}</span>
          </Text>
        </div>
        <Modal
          title="Remove wishlist"
          visible={visibleModal}
          onCancel={onClose}
          footer={[
            <Button key="back" type="info" onClick={onClose}>
              {t("Cancel")}
            </Button>,
            <Button key="submit" type="danger" onClick={(e) => handleDeleteWishlist(e, data.id)}>
              {t("Remove")}
            </Button>
          ]}
        >
          <p>{t("Are you sure want to remove this item from your wishlist?")}</p>
        </Modal>
      </div>

    </Link>
  )
}

export default Card