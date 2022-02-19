import { flatten, values } from 'lodash'
import { useEffect, useState } from 'react'

import Button from 'antd/lib/button'
import CheckoutContext from 'libs/hooks/checkout'
import SubItem from './SubItem'
import Typography from 'antd/lib/typography'
import axios from 'axios'
import { getConfirmationPayment } from 'modules/payment/get-confirmation-payment'
import message from 'antd/lib/message';
import { parseNumber } from 'libs/helpers/parser/parser'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { withSuccess } from 'antd/lib/modal/confirm'

const { Title, Text } = Typography


const Float = ({ ...props }) => {
  const { t } = useTranslation('common');
  const { step, setStep, data, mutate } = CheckoutContext.useContainer()
  const [dataVacation, setDataVacation] = useState(() => {
    if (data?.my_trip) {
      return data.my_trip
    } else {
      return false
    }

  })
  const [totalPayment, setTotalPayment] = useState(0)


  const router = useRouter()

  const handleNext = () => {
    if (step < 2) {
      // this page for itinenary
      getConfirmationPayment()
        .then(response => {

          if (response.success) {
            props.sendCode(response.number_invoice)
            setStep(step + 1)
          }
        }).catch(() => {
          message.error("failed to confirm payment")
        })

    } else {
      props.send()
    }
  }

  useEffect(() => {

    let sum = 0;
    let dataCheckout = data?.my_trip || false

    if (dataCheckout) {
      dataCheckout = flatten(values(dataCheckout))
      dataCheckout.forEach(e => sum += e.dataBooking.total_price_with_fee)
    }
    setDataVacation(dataCheckout)
    setTotalPayment(sum)
  }, [data])

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
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 16px 0;
          }

        `}
      </style>
      {dataVacation && <Title level={3} style={{ letterSpacing: '.02em', margin: 0, fontWeight: 500 }}>{t("Price Details")}</Title>}
      <div>
        {dataVacation && dataVacation.map((data, index) => <SubItem key={index} vacation={data.dataBooking} service={data.service_slug} page={"checkout"} />)}
      </div>

      {dataVacation && <Text style={{ fontSize: 12, fontWeight: 500, display: 'block', marginTop: 20 }}>{t("Tax and service fee included")}</Text>}
      {dataVacation && <div className='separator' />}
      <div className='f mdl f-btw'>
        <Title level={3} style={{ letterSpacing: '.02em', margin: 0 }}>{t("Total")}</Title>
        <Title level={3} style={{ letterSpacing: '.02em', margin: 0 }}>{`Rp. ${parseNumber(totalPayment)}`}</Title>
      </div>
      <Button onClick={() => handleNext()} block type='primary' size='large' style={{ marginTop: 12 }} disabled={data?.my_trip && dataVacation ? false : true}>
        {step === 1 && `${t('Continue to payment')}`}
        {step === 2 && `${t('Checkout')}`}
      </Button>
      {
        step === 2 &&
        <div style={{ marginTop: 16 }} className='f f-btw mdl'>
          <Title level={5} style={{ color: 'var(--gray600)' }}>{t("Once you click Checkout, we will redirect you to MC Payment.")}</Title>
          <img src='/images/bank/mcpay.jpg' />
        </div>
      }
    </div>
  )
}


export default Float