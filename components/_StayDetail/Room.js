import { bookingAddToCart, useBookNow } from "modules/booking/post-booking";
import { currency, parseDate } from "libs/helpers/parser/parser";

import AccountContext from "libs/hooks/account";
import Button from 'antd/lib/button'
import FacilityItem from "components/Experience/FacilityItem";
import RoomDetail from "./RoomDetail";
import Router from "next/router";
import Typography from 'antd/lib/typography'
import { addToCartDate } from "libs/helpers/date";
import { isloginUser } from "libs/helpers/auth";
import message from 'antd/lib/message';
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { useVacation } from "libs/hooks/vacation";

const { Text, Title } = Typography;
const defaultImage = "http://mykampoong-backend.test/storage/images/image-not-found.jpg"
const Room = ({ price, room, facilities, vacationId }) => {
  const { t } = useTranslation('common')
  const { setLoginModalVisible } = AccountContext.useContainer()
  const { data, mutate } = useVacation.useContainer()

  const [ShowModalRoomDetail, setShowModalRoomDetail] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [srcImage, setSrcImage] = useState(room.photos[0])
  function ChangeShowModalRoomDetail() {
    setShowModalRoomDetail(!ShowModalRoomDetail);
  }

  let form = {
    ...data.form,
    start_date: addToCartDate(data.form.start_date),
    end_date: addToCartDate(data.form.end_date),
  }

  // vacationId is id hotel
  const handleAddtoCart = async (roomTypeId, vacationId) => {
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

  const handleBookNow = async (roomTypeId, vacationId) => {
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
  const onErrorLoad = () => {
    setSrcImage(defaultImage)
  }
  return (
    <div className="room-wrapper f">
      <style jsx>
        {`
          .room-wrapper {
            border-radius: 8px;
            border: solid 1px var(--gray300);
            overflow: hidden;
            margin: 16px 0;
          }
          .content {
            padding: 20px 24px;
            width: 100%;
          }
          .photo {
            width: 215px;
            min-width: 215px;
          }
          .photo img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        `}
      </style>

      <div className="photo">
        <img
          onError={onErrorLoad}
          onLoad={() => { }}
          src={srcImage} />
      </div>
      <div className="content f f-btw">
        <div>
          <Title
            style={{ fontSize: 18, letterSpacing: ".03em", fontWeight: 500 }}
          >
            {room.room_type_name}
          </Title>
          <Text
            style={{
              letterSpacing: ".03em",
              color: "var(--gray600)",
              fontSize: 16
            }}
          >
            {room.room_type_code}
          </Text>
          <div className="f f-w" style={{ margin: "28px 0 10px" }}>
            {facilities.map((facility, index) => (
              <FacilityItem
                small
                width={130}
                title={facility}
                key={index}
              // img="/images/icon/rss.svg"
              />
            ))}
          </div>
          <a
            style={{
              letterSpacing: ".03em",
              fontWeight: 500,
              fontSize: 16,
              display: "block"
            }}
            onClick={ChangeShowModalRoomDetail}
          >
            View more
          </a>
        </div>
        <div>
          <Text
            style={{
              letterSpacing: ".03em",
              color: "var(--gray600)",
              fontSize: 16
            }}
          >

            {`Room Available at ${parseDate(room.date)}`}
          </Text>
        </div>
        <div className="f f-c f-btw">
          <div
            className="f f-c"
            style={{ textAlign: "right", marginBottom: 20 }}
          >
            <Title
              style={{
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: ".03em",
                margin: 0
              }}
            >
              {currency(price)}
            </Title>
            <Text style={{ color: "var(--gray500)" }}>{t("/ room / night")}</Text>
          </div>
          <div className="f f-c">
            <Button
              type="primary"
              loading={addToCartLoading}
              size="small"
              style={{ height: 36, width: 180, marginBottom: 12 }}
              onClick={() => handleAddtoCart(room.id_room_type, vacationId)}
            >
              {t("Add to my trip")}
            </Button>
            <Button
              size="small"
              loading={bookingLoading}
              style={{ height: 36, width: 180 }}
              onClick={() => handleBookNow(room.id_room_type, vacationId)}>
              {t("Book now")}
            </Button>
          </div>
        </div>
      </div>
      {ShowModalRoomDetail && <RoomDetail onClose={ChangeShowModalRoomDetail} price={price} room={room} facilities={facilities} vacationId={vacationId} />}

    </div>
  );
}

export default Room