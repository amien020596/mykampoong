import { debounce, flatten, map, values } from "lodash";
import { fetchListBooking, useListBooking } from "modules/booking/get-list-booking";
import { getToken, requireAuthentication } from "libs/helpers/auth";
import { useEffect, useState } from "react";

import Button from 'antd/lib/button'
import CheckoutContext from "libs/hooks/checkout";
import Float from "./Float";
import Itinenary from "./Itinenary";
import { LeftOutlined } from "@ant-design/icons";
import Payment from "./Payment";
import message from 'antd/lib/message';
import { postDataPayment } from "modules/payment/post-payment-data";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Checkout() {
  const { t } = useTranslation("common")
  const [dataVacation, setDataVacation] = useState([]);
  const [paymentCode, setPaymentCode] = useState('');
  const { data, mutate, step, setStep, setOnCheckFormValidation } = CheckoutContext.useContainer();
  const router = useRouter();

  let messageBooking = true;
  let url_payment_array = [];

  const callbackFunctionMessage = () => {
    if (messageBooking) {

      // if (url_payment_array.length === 1) {
      //   message.info(`${("Redirecting to Payment gateway")}`)
      //   url_payment_array.forEach((url, index) => {
      //     setTimeout(() => {
      //       location.replace(url);
      //     }, 1000)
      //   })
      // } else {
      message.info(`${t('Opening new tab for Payment gateway')}`)
      url_payment_array.forEach((url, index) => {
        setTimeout(() => {
          window.open(url)
        }, 1000)
      })
      // }
    } else {
      message.error(`${t('Failed payment')}`)
    }
  }

  const handleBack = () => {
    if (step === 1) {
      router.back();
    } else {
      setStep(step - 1);
    }
  };

  useEffect(() => {
    if (getToken().token != null) {
      fetchListBooking().then(res => res.json()).then(res => {
        mutate({ ...res })
      })
    }
  }, [step])

  useEffect(() => {
    let dataCheckout = data?.my_trip || false
    if (dataCheckout) {
      dataCheckout = flatten(values(dataCheckout))
      setDataVacation(dataCheckout)
    }
  }, [data])

  function sendPaymentDataToServer() {
    setOnCheckFormValidation(true)
  }

  //  function to get value data from form payment 
  function submitedPaymentDataForm(formDataPayment) {
    postDataPayment(paymentCode, formDataPayment)
      .then(response => {
        if (response.success) {
          url_payment_array.push(response.url_payment)
          callbackFunctionMessage();
        } else {
          // if payment confirmation failed
          messageBooking = false;
        }
      }).catch(() => {
        message.error("payment error")
      })
  }

  return (
    <div>
      <style jsx>
        {`
          .left {
            max-width: 644px;
            width: 100%;
            margin-bottom: 70px;
          }
          .right {
            width: calc(100% - 644px);
            margin-left: 100px;
          }
        `}
      </style>
      <div className="container">
        <div className="f" style={{ padding: "35px 0" }}>
          <div className="left">
            <div style={{ width: "100%" }}>
              <Button
                type="text"
                style={{ padding: "0", marginBottom: 20 }}
                onClick={() => handleBack()}
              >
                <LeftOutlined />
                {step === 1 && `${t("Back")}`}
                {step === 2 && `${t("Itinenary")}`}
              </Button>

              {step === 1 && <Itinenary />}
              {step === 2 && <Payment submit={(value) => submitedPaymentDataForm(value)} />}
            </div>
          </div>
          <div className="right">
            <Float send={() => sendPaymentDataToServer()} sendCode={(code) => setPaymentCode(code)} />
          </div>
        </div>
      </div>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     linkpayment: state.checkout.linkpayment || []
//   }
// }

// const mapDispatchToProps = {
//   setLinkPayment
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Checkout);



export default Checkout