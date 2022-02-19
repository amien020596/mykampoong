import { format, parseISO } from "date-fns";
import { getToken, isloginUser, requireAuthentication } from "libs/helpers/auth";
import { useEffect, useState } from "react";

import AccountContext from 'libs/hooks/account';
import AddDates from './AddDates';
import AddGuest from './AddGuest';
import AuthLoginModal from 'components/Auth/AuthLoginModal';
import Button from 'antd/lib/button'
import Router from "next/router";
import Steps from 'antd/lib/steps'
import Typography from 'antd/lib/typography'
import message from 'antd/lib/message'
import { parseNumber } from 'libs/helpers/parser/parser'
import { useBookNow } from 'modules/booking/post-booking';
import { useTranslation } from "next-i18next";
import { useVacation } from 'libs/hooks/vacation'

const { Step } = Steps;
const { Title } = Typography


function Float() {
  const { t } = useTranslation('common')

  const { setLoginModalVisible } = AccountContext.useContainer()
  const { data } = useVacation.useContainer()
  const [buttonLoading, setButtonLoading] = useState(false);
  const [valueSelectedForm, setSelectedForm] = useState({ guest: false, date: false })

  let messageBooking = true;

  const callbackFunctionMessage = () => {
    if (messageBooking) {
      setButtonLoading(false)
      message.success(`Success add package to cart`)
      setTimeout(() => {
        Router.push("/checkout");
      }, 500);
    } else {
      message.error(`${t("Failed add package to cart")}`)
      setButtonLoading(false)
    }
  }

  function selectedGuest(value) {
    setSelectedForm({ ...valueSelectedForm, guest: value })
  }

  function selectedDate(value) {
    setSelectedForm({ ...valueSelectedForm, date: value })
  }

  function handleBookNow() {

    if (!isloginUser()) {
      setLoginModalVisible(true)
      return;
    }

    let itemsProcess = 0;
    if (!data?.form) {
      if (!valueSelectedForm.date) {
        message.error(`${t('Pick Date first')}`)
        return;
      }
      if (!valueSelectedForm.guest) {
        message.error(`${t('Pick Guest first')}`)
        return;
      }
      return;
    }
    setButtonLoading(true)

    data?.package.forEach((e, index, array) => {

      const formated_date = format(data.form.date, "yyyy-MM-dd");
      const start_date = format(parseISO(`${formated_date}`), "yyyy-MM-dd HH:mm:ss")
      const end_date = format(parseISO(`${formated_date}`), "yyyy-MM-dd HH:mm:ss")
      const dataForm = {
        "start_date": start_date,
        "end_date": end_date,
        "travel_object_id": e.travel_object.id,
        "total_dewasa": data.form.guest.adult,
        "total_anak_anak": data.form.guest.children,
        "total_balita": data.form.guest.infant
      };

      useBookNow(dataForm).then(response => {
        itemsProcess++;
        messageBooking = messageBooking && response.success;
        if (array.length === itemsProcess) {
          callbackFunctionMessage();
        }
      })
    })
  }

  return (
    <div className='wrapper'>
      <style jsx>
        {`
          .wrapper {
            padding: 28px 24px;
            border-radius: 8px;
            border: solid 1px var(--gray300);
            position: sticky;
            top: 105px;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
          }

        `}
      </style>

      <Steps progressDot current={0} direction="vertical" className='custom'>
        {data?.package.map(e => {
          return <Step title={e.travel_object.name} />
        })}
      </Steps>
      <div className='separator' style={{ marginBottom: 20 }} />

      <div style={{ marginBottom: 20 }} className='f mdl'>
        <AddGuest selectedGuest={(value) => selectedGuest(value)} />
        <AddDates selectedDate={(value) => selectedDate(value)} />
      </div>


      <Title level={3} style={{ letterSpacing: '.02em' }}>Rp. {parseNumber(data.vacation.vacation_price * 1)} <span style={{ fontSize: 18, fontWeight: 400 }}>/ {t("person")}</span></Title>
      <Button block type='primary' size='large' loading={buttonLoading} disabled={!valueSelectedForm.guest || !valueSelectedForm.date} style={{ marginBottom: 12 }} onClick={() => handleBookNow()}>{t("Book now")}</Button>
      <Button block type='primary' size='large' ghost>{t("Customize")}</Button>
      <AuthLoginModal />
    </div>
  )
}


export default Float