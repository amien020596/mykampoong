import {
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined
} from "@ant-design/icons";

import AccountContext from "libs/hooks/account";
import AddDay from "./AddDay";
import Button from 'antd/lib/button'
import GuestRoom from "./GuestRoom";
import ModalShare from "./ModalShare";
import Typography from 'antd/lib/typography'
import { format } from "date-fns";
import { isloginUser } from "libs/helpers/auth";
import message from 'antd/lib/message';
import { parseNumber } from "libs/helpers/parser/parser";
import { stayCheckAvailability } from "modules/stay/post-stay-check-availability";
import { useEffect } from "react";
import { useGetWishlist } from "modules/wishlist/get-wishlist";
import { useGetWishlistDetail } from "modules/wishlist/get-detail-wishlist";
import { useGlobalContext } from "libs/hooks/global";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useVacation } from "libs/hooks/vacation";

const { Title, Text } = Typography;

function Float() {
  const { t } = useTranslation('common')
  const { data, mutate } = useVacation.useContainer();
  const { modalWishlist, setModalWishlist, setModalMessage, setDataWishlist } = useGlobalContext.useContainer();
  const { setLoginModalVisible } = AccountContext.useContainer()
  const { vacation: item } = data;
  const [selectedValue, setSelectedValue] = useState({ checkin: false, checkout: false, guest: false })

  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);



  function handleClick() {
    setModalShow(true);
  }

  function setOpenModal() {
    setModalWishlist(true)
    setDataWishlist({ 'travel_object_id': data?.vacation?.id })
  }

  const handleClickModalWishlist = () => isloginUser() ? setOpenModal() : setLoginModalVisible(true)

  const handleClickModalMessage = () => isloginUser() ? setModalMessage(true) : setLoginModalVisible(true)


  function handleCloseModal() {
    setModalShow(false);
  }
  const selectedReservationDate = (checkin, checkout) => {
    setSelectedValue({
      ...selectedValue,
      checkin: checkin,
      checkout: checkout
    })

  }
  const selectedGuest = (value) => {
    setSelectedValue({
      ...selectedValue,
      guest: value
    })
  }

  async function handleCheckAvailability() {
    const start_date = data?.form?.start_date || undefined
    const end_date = data?.form?.end_date || undefined

    if (start_date && end_date) {
      const body = {
        start_date: format(start_date, "yyyy-MM-dd"),
        end_date: format(end_date, "yyyy-MM-dd")
      };
      setLoading(true);
      try {
        stayCheckAvailability(data.vacation.slug, body)
          .then(response => {
            if (response.success) {
              mutate({
                ...data,
                listAvailableRoom: response.listAvailableRoom
              })
              message.info(`${t("Found available rooms")}`)
            } else {
              mutate({
                ...data,
                listAvailableRoom: []
              })
              message.info(`${t("Not found available rooms")}`)
            }
            setLoading(false);
          });

      } catch (error) {
        console.log(error);
      }
    } else {
      message.error(`${t("Please select check in and check out date first!")}`);
    }
  }

  return (
    <div className="wrapper">
      <style jsx>
        {`
          .wrapper {
            border-radius: 8px;
            border: solid 1px var(--gray300);
            position: sticky;
            top: 105px;
            z-index: 10;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06),
              0px 1px 3px rgba(0, 0, 0, 0.1);
          }
          .p {
            padding: 28px 24px 24px;
          }
          .action a {
            color: var(--gray800);
            font-weight: 500;
            font-size: 14px;
          }
          .action a:hover {
            color: var(--primary-color);
          }
        `}
      </style>
      <style jsx global>
        {`
          .action .anticon {
            font-size: 20px;
            margin-right: 8px;
          }
        `}
      </style>
      <div className="p">
        <Text>{t("Start from")}</Text>
        <Title level={3} style={{ letterSpacing: ".02em", marginTop: 0 }}>
          Rp. {parseNumber(item.vacation_price * 1)}{" "}
          <span style={{ fontSize: 18, fontWeight: 400 }}>{t("/ room / night")}</span>
        </Title>

        <div style={{ margin: "20px 0" }}>
          <AddDay selectedReservationDate={(checkin, checkout) => { selectedReservationDate(checkin, checkout) }} />
          <div>
            <GuestRoom selectedGuest={(value) => { selectedGuest(value) }} />
          </div>
        </div>
        <Button
          disabled={!selectedValue.checkin || !selectedValue.checkout || !selectedValue.guest}
          block
          type="primary"
          size="large"
          onClick={handleCheckAvailability}
          loading={loading}
        >
          {t("Check room availability")}
        </Button>
      </div>
      <div className="separator" />
      <div className="f mdl p f-btw action" style={{ paddingTop: 16 }}>
        <a onClick={() => handleClickModalMessage()}>
          <MessageOutlined />
          {t("Message")}
        </a>
        <a onClick={handleClick}>
          <ShareAltOutlined />
          {t("Share")}
        </a>
        <a onClick={() => handleClickModalWishlist()}>
          <HeartOutlined />
          {t("Save")}
        </a>
      </div>
      <ModalShare
        visible={modalShow}
        data={data}
        email={data?.vacation?.name}
        onClose={handleCloseModal}
      />
    </div>
  );
}


export default Float