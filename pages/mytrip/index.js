import { useEffect, useState } from 'react';

import Button from 'antd/lib/button'
import CardSlider from "components/_Mytrip/CardSlider";
import Head from 'next/head';
import Layout from "../../components/Layout/Public";
import MetaHead from 'components/_Meta/MetaHead';
import OnGoingMyTrip from "components/_Mytrip/OnGoingMyTrip";
import PastMyTrip from "components/_Mytrip/PastMyTrip";
import Payment from 'components/_Checkout/Payment';
import Tabs from 'antd/lib/tabs'
import Typography from 'antd/lib/typography';
import UpComingMyTrip from "components/_Mytrip/UpComingMytrip";
import WaitingPaymentMyTrip from "components/_Mytrip/WaitingPayment";
import { authorizeFetchListPendingPayment } from 'modules/myPersonalTrip/get-pending-payment';
import { message } from 'antd';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const data = []

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  };
}
const index = () => {
  const [pendingPaymentData, setPendingPaymentData] = useState([])

  useEffect(() => {
    authorizeFetchListPendingPayment()
      .then(response => {
        if (response?.my_trip) {
          setPendingPaymentData(response.my_trip)
        }
      })
      .catch()

  }, [])

  const openUrlPayment = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      message.error('open payment link error')
    }
  }
  const { t } = useTranslation('common')
  return (
    <>
      <style jsx>
        {`
          .hero-image {
            height: 234px;
          }
        `}
      </style>

      <MetaHead description="My Trip" title={"My Trip | MyKampoong"} />
      <Layout>
        <div className="hero-image" style={{ padding: "30px 0", height: "100%" }}>
          <div className="container">
            <Title level={1} style={{ fontWeight: 500, letterSpacing: ".03em", margin: "12px 0" }}>
              {t("My Trip")}
            </Title>
            <Tabs defaultActiveKey="1">
              <TabPane tab={t("On Going")} key="1">
                <OnGoingMyTrip />
              </TabPane>
              <TabPane tab={t("Wating For Payment")} key="2">

                {pendingPaymentData.length > 0 && pendingPaymentData.map((pendingPayment, index) => {
                  return (
                    <div key={index}>
                      <div className='f mdl f-btw'>
                        <Button type="primary" style={{ marginBottom: 10 }} onClick={() => openUrlPayment(pendingPayment.url_payment)}>{t("Continue checkout")}</Button>
                        <Text className='agenda-item-title'>
                          <span style={{ fontWeight: 500 }}>Total </span>
                          Rp 7.000.000??
                        </Text>
                      </div>
                      {
                        pendingPayment.data_trip.map((datatrip, index) => {
                          return <WaitingPaymentMyTrip key={index} data={datatrip} />
                        })
                      }
                    </div>)
                })

                }

              </TabPane>
              <TabPane tab={t("Upcoming")} key="3">
                <UpComingMyTrip />
              </TabPane>
              <TabPane tab={t("Past")} key="4">
                <PastMyTrip />
              </TabPane>
            </Tabs>
            {/* slider review  */}

            <CardSlider data={data} />
          </div>
        </div>
      </Layout >
    </>
  )
}


export default index