import { capitalize, get, keys, values } from 'lodash'
import { useEffect, useState } from 'react'

import Button from 'antd/lib/button'
import ContextMyTrip from 'libs/hooks/mytrip'
import Drawer from 'antd/lib/drawer'
import Empty from 'antd/lib/empty'
import Router from 'next/router'
import Spin from 'antd/lib/spin'
import SubItem from 'components/_Checkout/SubItem'
import Typography from 'antd/lib/typography'
import { authorizeFetchListBooking } from 'modules/booking/get-list-booking'
import { currency } from 'libs/helpers/parser/parser'
import { deleteBookingList } from 'modules/booking/delete-booking'
import { getToken } from 'libs/helpers/auth'
import message from 'antd/lib/message'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography



const MyTrip = () => {
  const { t } = useTranslation('common')

  const { visible, setVisible, data, mutate, fetchData, setFetchData } = ContextMyTrip.useContainer();
  const [totalPrice, setPrice] = useState(0)
  const [keyDataList, setKeyDataList] = useState([])
  const [detailBooking, setDetailBooking] = useState({})
  const [loading, setLoading] = useState(true)

  function deleteCartList(id) {
    deleteBookingList(id)
      .then(() => {
        message.success("Success Remove item from carts")
        setFetchData(true)
      }).catch(error => {
        console.log("error", error)
      });
  }

  function ListDrawer({ section, data }) {
    return (
      <div>
        <div style={{ marginLeft: "0.2rem", marginTop: "0.2rem" }}>
          <Title level={4}>{capitalize(section)}</Title>
        </div>
        {data?.length > 0 && data.map((e, i) => <SubItem service={e.service_slug} key={i} vacation={e.dataBooking} deleteCartList={(id) => deleteCartList(id)} />)}
      </div>
    )
  }

  const fetchingDataVacation = () => {
    let price = 0
    authorizeFetchListBooking()
      .then(response => {
        console.log("response mytrip", response)
        mutate({ ...response.my_trip })
        setLoading(false)
        setFetchData(false)

        let detail_booking = { ...response?.my_trip }
        setDetailBooking(detail_booking);
        setKeyDataList(keys(detail_booking).sort());

        if (Object.keys(detail_booking).length > 0) {
          let value_data_booking = values(detail_booking)
          value_data_booking.map(element => {
            element.forEach(el => {
              if (el.service_slug === 'service') {
                price += parseInt(el.dataBooking.price)
              } else {
                price += el.dataBooking.total_price
              }

            })
          });
        }
        setPrice(price)
      }).catch(error => {
        console.log("res error fetchlistbooking", { error })
      })
  };

  useEffect(() => {
    if (getToken().token) {
      fetchingDataVacation()
    } else {
      setLoading(false)
    }
  }, [visible === true, fetchData])

  return (
    <Drawer
      placement='right'
      width={526}
      visible={visible}
      headerStyle={{ borderBottom: 0 }}
      bodyStyle={{ paddingTop: 10 }}
      closable={false}
      onClose={() => setVisible(false)}
      title={<Title level={2} style={{ fontWeight: 500, letterSpacing: '.03em', fontSize: 28, margin: 0 }}>{t("My Trip")}</Title>}
    >
      <div className='f mdl f-btw' style={{ paddingBottom: 15, borderBottom: 'solid 1px var(--gray300)' }}>
        <Text style={{ fontSize: 16, fontWeight: 500, letterSpacing: '.02em' }}>{t("Your item")}</Text>
        <div className='f f-end'>
          <Text style={{ letterSpacing: '.02em', marginRight: 8 }}>{t("Total")}</Text>
          <Title level={3} style={{ fontWeight: 500, letterSpacing: '.02em', margin: 0 }}>{currency(totalPrice)}</Title>
        </div>
      </div>
      <Spin tip="Loading..." spinning={loading}>
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          {keyDataList.length > 0 && keyDataList.map((element, index) => <ListDrawer key={index} section={element} data={get(detailBooking, element)} />)}
          {keyDataList.length === 0 && <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 60,
            }} description={t('No Itinary Found')} />}
        </div>
        <div className='f f-c'>
          {keyDataList.length > 0 && <Button type='primary' block onClick={() => Router.push('/checkout')} style={{ marginBottom: 12 }}>{t("Continue checkout")}</Button>}
          <Button type='ghost' block onClick={() => setVisible(false)}>{t("Continue browsing")}</Button>
        </div>
      </Spin>
    </Drawer>
  )
}


export default MyTrip