import { groupBy, isEmpty, map, values } from 'lodash'
import { useEffect, useState } from 'react'

import Button from 'antd/lib/button'
import CheckoutProvider from 'libs/hooks/checkout'
import Empty from 'antd/lib/empty'
import Modal from 'antd/lib/modal'
import Router from 'next/router'
import Spin from 'antd/lib/spin'
import StepExp from './StepExp'
import Steps from 'antd/lib/steps'
import Tag from 'antd/lib/tag'
import Typography from 'antd/lib/typography'
import { authorizeFetchListBooking } from 'modules/booking/get-list-booking'
import { dateCheckout } from 'libs/helpers/date'
import { deleteBookingList } from 'modules/booking/delete-booking'
import { getToken } from 'libs/helpers/auth'
import message from 'antd/lib/message'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography
const { Step } = Steps
function Itinenary() {
  const { t } = useTranslation('common');
  const { data, mutate } = CheckoutProvider.useContainer()
  const [dataBooking, setDataBooking] = useState({})
  const [refetch, setRefetchDataBooking] = useState(false)
  const [loading, setLoading] = useState(true)
  const [visibleModal, setVisibleModal] = useState(false)
  const [dataModal, setDataModal] = useState({})

  let messageBooking = true;

  useEffect(() => {
    if (data) {
      let data_booking = [];
      let detail_booking = { ...data?.my_trip }
      values(detail_booking).map((f) => {
        const grouped = groupBy(f, item => `"${dateCheckout(item.dataBooking.end_date)} - ${dateCheckout(item.dataBooking.start_date)} . ${item.dataBooking.detail_total_guest}"`)
        data_booking.push(grouped)
      })
      setDataBooking(data_booking);
    }
  }, [data])

  useEffect(() => {
    if (getToken().token != null) {
      authorizeFetchListBooking()
        .then(response => {
          mutate({ ...response })
          setLoading(false)
          setRefetchDataBooking(false)
        })
    } else {
      setLoading(false)
    }
  }, [refetch])

  const callbackFunctionMessage = () => {
    if (messageBooking) {
      message.success(`${t("Success Remove items from cart")}`)
    } else {
      message.error(`${t('Failed remove package items from cart')}`)
    }
  }

  function handleOpenModal(data = {}) {
    setVisibleModal(true)
    setDataModal(data)
  }
  const onClose = () => setVisibleModal(false)



  const handleSaveToWishList = () => {
    message.info(`${t("moved to wish list")}`)
    setVisibleModal(false)
  }

  const deleteListCart = () => {
    let idListArray = [];
    let itemList = 0;
    let listCartData = dataModal;

    map(listCartData, list => {
      idListArray.push(list.dataBooking.id)
    })

    idListArray.forEach((id, index, array) => {
      deleteBookingList(id)
        .then(response => {
          itemList++;
          messageBooking = messageBooking && response.success;
          if (array.length === itemList) {
            callbackFunctionMessage();
            setRefetchDataBooking(true)
          }
        }).catch(() => {
          messageBooking = false;
          callbackFunctionMessage();
        });
    })
    setVisibleModal(false)
  }



  function cardPackage(value) {
    const data = value[0].dataBooking;

    return (
      <>
        <div style={{ marginBottom: 8 }}>
          <Tag
            style={{
              background: 'var(--teal100)',
              color: 'var(--teal600)',
              border: 0,
              fontWeight: 500,
              letterSpacing: '.04em'
            }}
          >
            {data.travel_object.service}
          </Tag>
          <Text style={{ fontSize: 12 }}>· &nbsp;{data.days === 0 ? `1 ${t("days")}` : `${data.days} ${t("days")}`} &nbsp; ·</Text>
          {/* <EnvironmentOutlined style={{ margin: '0 5px 0 10px' }} /> */}
          {/* <Text style={{ fontSize: 12 }}>Various Places</Text> */}
        </div>
        {/* <div key={`1`}>
          <Text style={{ fontSize: 16 }}>{"name object"}</Text>
          <br></br>
        </div> */}
      </>
    )
  }

  function DetailCard(props) {
    return (
      <>
        <Steps progressDot current={null} direction="vertical" className='custom'>
          <Step title={<StepExp vacation={props.data.dataBooking} />} />
        </Steps>
      </>
    )

  }

  const handleClickExplore = () => Router.push('/')

  const Itinenary = () => {
    return (
      <>
        <style jsx>
          {`
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 20px 0;
          }
        `}
        </style>
        <Title level={2}>{t("Itinenary")}</Title>
        {
          map(dataBooking, objectBooking => {

            const objectKey = Object.keys(objectBooking);

            return map(objectKey, (objectKey, index) => {

              let value = objectKey.slice(1)
              value = value.slice(0, value.length - 1).replace(`${t(". 0 Guest")}`, "");
              return (
                <div key={index}>
                  <div className='f mdl f-btw'>
                    <Title level={4}>{value}</Title>
                    <Button size='small' onClick={() => handleOpenModal(objectBooking[objectKey])}>{t("Delete")}</Button>

                  </div>
                  <div className='separator' />
                  {cardPackage(objectBooking[objectKey])}
                  <div className='separator' />
                  {map(objectBooking[objectKey], (data, index) => <DetailCard key={index} data={data} />)}
                </div>
              )
            })

          })
        }
        <Modal
          title="Remove item"
          visible={visibleModal}
          onCancel={onClose}
          footer={[
            <Button key="back" onClick={handleSaveToWishList}>
              {t("Add to wishlist item")}
            </Button>,
            <Button key="submit" type="primary" onClick={deleteListCart}>
              {t("Remove")}
            </Button>
          ]}
        >
          <p>{t("Are you sure want to remove this item from your cart?")}</p>
        </Modal>
      </>
    )
  }
  const EmptyItinenary = () => {
    return (
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 100,
        }}
        description={
          <span>
            {t("No Itinenary Found")}
          </span>
        }
      >
        <Button type="primary" onClick={() => handleClickExplore()}>{t("Explore My Kampoong")}</Button>
      </Empty>
    )
  }

  return (
    <div>
      <Spin spinning={loading}>
        {isEmpty(data?.my_trip) ? EmptyItinenary() : Itinenary()}
      </Spin>
    </div>
  )
}



export default Itinenary