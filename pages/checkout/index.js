import Checkout from 'components/_Checkout'
import CheckoutContext from 'libs/hooks/checkout'
import Layout from 'components/Layout/Checkout'
import MetaHead from 'components/_Meta/MetaHead'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  };
}
export default function CheckoutPage() {

  return (
    <CheckoutContext.Provider>
      <MetaHead description="Checkout Payment" title={"Checkout | MyKampoong"} />
      <Layout>
        <Checkout />
      </Layout>
    </CheckoutContext.Provider>
  )
}