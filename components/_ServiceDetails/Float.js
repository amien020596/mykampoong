import {
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined
} from "@ant-design/icons";
import { bookingAddToCart, useBookNow } from "modules/booking/post-booking";
import { format, parseISO } from "date-fns";

import AccountContext from "libs/hooks/account";
import AddDates from "./AddDates";
import AddHour from "./AddHour";
import AuthLoginModal from "components/Auth/AuthLoginModal";
import Button from 'antd/lib/button'
import ModalShare from "components/_StayDetail/ModalShare";
import Router from "next/router";
import Typography from 'antd/lib/typography'
import { isloginUser } from "libs/helpers/auth";
import message from 'antd/lib/message';
import { parseNumber } from "libs/helpers/parser/parser";
import { useFloat } from "libs/hooks/float";
import { useGlobalContext } from "libs/hooks/global";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { useVacation } from "libs/hooks/vacation";

const { Title, Text } = Typography;

const Float = () => {
  const { t } = useTranslation('common')
  const { setLoginModalVisible } = AccountContext.useContainer()
  const { data } = useVacation.useContainer();
  const { data: floatData } = useFloat.useContainer();
  const { setModalWishlist, setModalMessage, setDataWishlist } = useGlobalContext.useContainer();
  const { vacation: item } = data;
  const [selectedReservation, setSelectedReservation] = useState({ hour: false, dates: false })
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState({});
  const [loadingBookNow, setLoadingBookNow] = useState(false);

  function handleClick() {
    setModalShow(true);
  }

  function handleCloseModal() {
    setModalShow(false);
  }


  function setOpenModal() {
    setModalWishlist(true)
    setDataWishlist({ 'travel_object_id': item?.id })
  }

  const handleClickModal = () => isloginUser() ? setOpenModal() : setLoginModalVisible(true)

  const handleClickModalMessage = () => isloginUser() ? setModalMessage(true) : setLoginModalVisible(true)

  const selectedDates = (value) => {
    setSelectedReservation(
      {
        ...selectedReservation,
        dates: value
      }
    )
  }
  const selectedHour = (value) => {
    setSelectedReservation(
      {
        ...selectedReservation,
        hour: value
      }
    )
  }

  async function handleAddToTrip() {
    if (!isloginUser()) {
      setLoginModalVisible(true)
      return;
    }

    const { scheduleId, date, start_hours, end_hours } = floatData;

    if (scheduleId && date && start_hours && end_hours) {
      setLoading({ ...loading, addToTrip: true });
      try {

        const formated_date = format(date, "yyyy-MM-dd");
        const start_date = format(parseISO(`${formated_date} ${start_hours}`), "yyyy-MM-dd HH:mm:ss")
        const end_date = format(parseISO(`${formated_date} ${end_hours}`), "yyyy-MM-dd HH:mm:ss")

        const dataForm = {
          travel_object_id: data.vacation.id,
          schedule_id: scheduleId,
          start_date: start_date,
          end_date: end_date
        };

        bookingAddToCart(dataForm)
          .then(response => {

            if (response.success) {
              // message.success(parsed.message);
              message.success(response.message);
            } else {
              // message.error(parsed.message);
              message.error("Failed add to my trip");
            }
            setLoading({ ...loading, addToTrip: false });
          });

      } catch (error) {
        console.log(error);
      }
    } else {
      message.error(`${t("Please insert the schedule and date first before adding to My Trip")}`);
    }
  }

  const handleBookNow = async () => {
    if (!isloginUser()) {
      setLoginModalVisible(true)
      return;
    }
    const { scheduleId, date, start_hours, end_hours } = floatData;

    if (scheduleId && date && start_hours && end_hours) {
      setLoadingBookNow(true)
      try {

        const formated_date = format(date, "yyyy-MM-dd");
        const start_date = format(parseISO(`${formated_date} ${start_hours}`), "yyyy-MM-dd HH:mm:ss")
        const end_date = format(parseISO(`${formated_date} ${end_hours}`), "yyyy-MM-dd HH:mm:ss")

        const dataForm = {
          travel_object_id: data.vacation.id,
          schedule_id: scheduleId,
          start_date: start_date,
          end_date: end_date
        };

        useBookNow(dataForm)
          .then(response => {
            if (response.success) {
              message.success(response.message);
              setTimeout(() => {
                Router.push("/checkout");
              }, 500);
            } else {
              message.error(`${t("Failed add to my trip")}`);
            }
            setLoadingBookNow(false)
          });

      } catch (error) {
        console.log(error);
      }
    } else {
      message.error(`${t("Please insert the schedule and date first before adding to My Trip")}`);
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
          Rp. {parseNumber(item.vacation_price)}{" "}
          <span style={{ fontSize: 18, fontWeight: 400 }}>{t("/ hour")}</span>
        </Title>

        <div style={{ margin: "20px 0" }} className="f mdl">
          <AddHour selectedHour={(value) => { selectedHour(value) }} />
          <AddDates selectedDates={(value) => { selectedDates(value) }} />
        </div>
        <Button
          block
          type="primary"
          size="large"
          style={{ marginBottom: 12 }}
          onClick={handleAddToTrip}
          loading={loading.addToTrip}
          disabled={!selectedReservation.hour || !selectedReservation.dates}
        >
          {t("Add to my trip")}
        </Button>
        <Button loading={loadingBookNow} block type="primary" size="large" ghost onClick={() => { handleBookNow() }} disabled={!selectedReservation.hour || !selectedReservation.dates}>
          {t("Book now")}
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
        <a onClick={() => handleClickModal()}>
          <HeartOutlined />
          {t("Save")}
        </a>
      </div>
      <ModalShare visible={modalShow} data={data} onClose={handleCloseModal} />
      <AuthLoginModal />
    </div>
  );
}


export default Float