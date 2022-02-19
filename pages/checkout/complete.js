import Button from 'antd/lib/button'
import CheckoutContext from 'libs/hooks/checkout'
import Layout from 'components/Layout/Checkout'
import MetaHead from 'components/_Meta/MetaHead'
import Typography from 'antd/lib/typography'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';

const { Text, Title } = Typography

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  };
}
const Complete = () => {
  const { t } = useTranslation('common')
  const router = useRouter()

  function handleOnClickMyTrip() {
    router.replace('/mytrip')
  }

  function handleOnClickExploreMore() {
    router.replace('/')
  }

  return (
    <CheckoutContext.Provider initialState={3}>
      <MetaHead description="Complete Payment" title={"Complete Payment | MyKampoong"} />
      <Layout>
        <div className='container'>
          <div className='f f-ctr mdl f-c' style={{ minHeight: '80vh', padding: '70px 0' }}>
            <Title level={2}>{t("Complete")}</Title>
            <div className='f f-ctr mdl f-c' style={{ marginTop: 36 }}>
              <img src='/images/icon/circle-ok.svg' style={{ marginBottom: 16 }} />
              <Title level={2} style={{ color: 'var(--teal500)' }}>{t("Success")}</Title>
            </div>
            <Text style={{ fontSize: 20 }}>{t("You have successfully completed the checkout")}</Text>
            <div style={{ marginTop: 48 }}>
              <Button style={{ marginRight: 12 }} onClick={() => handleOnClickExploreMore()}>{t("Explore More")}</Button>
              <Button type='primary' onClick={() => handleOnClickMyTrip()}>{t("View My Trip")}</Button>
            </div>
          </div>
        </div>
      </Layout>
    </CheckoutContext.Provider>
  )
}

export default Complete