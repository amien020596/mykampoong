import { useEffect } from 'react'
import Layout from 'components/Layout/Checkout'
import Checkout from 'components/_Checkout'
import CheckoutContext from 'libs/hooks/checkout'
export default function CheckoutPage() {
  useEffect(() => {
    document.title = `Checkout | MyKampoong`
  })
  return (
    <CheckoutContext.Provider>
      <Layout>
        <Checkout />
      </Layout>
    </CheckoutContext.Provider>
  )
}