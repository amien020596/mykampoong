import React, { useState } from 'react';
import { bookingAddToCart, useBookNow } from "modules/booking/post-booking";

import AccountContext from 'libs/hooks/account';
import Button from 'antd/lib/button'
import { CloseOutlined } from "@ant-design/icons";
import FacilityItem from "components/Experience/FacilityItem";
import Gallery from "components/Gallery";
import Router from 'next/router';
import Typography from 'antd/lib/typography';
import { addToCartDate } from 'libs/helpers/date';
import { currency } from 'libs/helpers/parser/parser'
import { isloginUser } from "libs/helpers/auth";
import message from 'antd/lib/message';
import { useTranslation } from 'next-i18next';
import { useVacation } from "libs/hooks/vacation";

const { Title, Text } = Typography;

const RoomDetail = ({ props }) => {
  const { t } = useTranslation('common')
  const { setLoginModalVisible } = AccountContext.useContainer()
  const { data, mutate } = useVacation.useContainer();

  const [bookingLoading, setBookingLoading] = useState(false);
  const [addToCartLoading, setAddToCartLoading] = useState(false);

  const { onClose, price, room, facilities, vacationId } = props

  let form = {
    ...data.form,
    start_date: addToCartDate(data.form.start_date),
    end_date: addToCartDate(data.form.end_date),
  }

  // vacationId is id hotel
  const handleAddtoCart = async vacationId => {
    if (!isloginUser()) {
      setLoginModalVisible(true)
      return;
    }

    setAddToCartLoading(true)
    form = {
      ...form,
      travel_object_id: vacationId
    }

    bookingAddToCart(form)
      .then(response => {
        if (response.message) {
          message.success(response.message)
        } else {
          message.error(response.message)
        }
        setAddToCartLoading(false)
      }).catch(error => {
        console.log(error)
        setAddToCartLoading(false)
      })

  }

  const handleBookNow = async vacationId => {
    if (!isloginUser()) {
      setLoginModalVisible(true)
      return;
    }

    setBookingLoading(true)
    form = {
      ...form,
      travel_object_id: vacationId
    }

    useBookNow(form)
      .then(response => {
        if (response.message) {
          message.success(response.message)
          setTimeout(() => {
            Router.push("/checkout");
          }, 500);
        } else {
          message.error(response.message)
        }
        setBookingLoading(false)
      }).catch(error => {
        console.log(error)
        setBookingLoading(false)
      })

  }


  return (
    <div className="room-detail-container">
      <style jsx>
        {`
        .room-detail-container{
          margin:0;
          padding:0;
          box-sizing: content-box;
          width: 100%;
          height: 100%;
          z-index: 100;
          position: fixed;
          top: 0;
          left:0;
          background-color:#fff;
        }
        .container{
          max-width:100vw;
          width: 100%;
          height:100%;
        }
            .left{
              width: 100%;
              background-color:#fff;
              display:flex;
            }
            .right {
              border-left:2px solid var(--gray300);
              background-color:#fff;
              max-width: 30vw;
              width: 100%;
            }
            .separator {
              height: 1px;
              width: 100%;
              background: var(--gray300);
              margin: 30px 0;
            }
            .gallery-slider{
              margin:auto 100px;
            }
            .info-room-detail{
              margin:20px;
            }
            .book-room{
              border-top:2px solid var(--gray300);
            }
        `}</style>

      <div className="container f">
        <div className="left">
          <div className="gallery-slider">
            <Gallery images={room.photos} />
          </div>
        </div>
        <div className="right">
          <div className="info-room-detail">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div>
                <Title level={3}>{room.room_type_name}</Title>
                <Title style={{ marginTop: 5 }} level={5}>{room.room_type_code}</Title>
              </div>
              <CloseOutlined onClick={onClose} style={{ fontSize: 20 }} />
            </div>
            <div className='separator' />
            <div>
              <Title level={5}>{t("Amenities")}</Title>
              <div className='f f-w' style={{ margin: '28px 0 10px' }}>
                <FacilityItem small width={130} title='Wifi' img='/images/icon/rss.svg' />
                <FacilityItem small width={130} title='Breakfast' img='/images/icon/restaurant.svg' />
                <FacilityItem small width={130} title='Coffee' img='/images/icon/coffee.svg' />
                <FacilityItem small width={130} title='Air Conditioner' img='/images/icon/wallpaper.svg' />
              </div>
              {facilities.length > 0 && facilities.map((f, index) => <div key={index}><Text>{f}</Text><br /></div>)}
            </div>
            <div className='separator' />
            <div>
              <Title level={5}>{t("Room description")}</Title>
              {room.description ? <Text>{room.description}</Text> : <Text>{t("No description found")}</Text>}
            </div>
          </div>
          <div className="book-room">
            <div style={{ margin: 20 }}>
              {/* <div style={{ margin: '20px 0' }} style={{ position: "relative" }}>
                <AddDay />
                <div>
                  <GuestRoom />
                </div>
              </div> */}
              <Title level={3} style={{ letterSpacing: '.02em', margin: "10px 0" }}>{currency(props.price)} <span style={{ fontSize: 18, fontWeight: 400 }}>{t("/ room / night")}</span></Title>
              <div className='f f-c'>
                <Button type='primary' size='small' loading={addToCartLoading} style={{ height: 36, width: "100%", marginBottom: 12 }} onClick={() => handleAddtoCart(vacationId)}>{t("Add to my trip")}</Button>
                <Button size='small' loading={bookingLoading} style={{ height: 36, width: "100%" }} onClick={() => handleBookNow(vacationId)}>{t("Book now")}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetail