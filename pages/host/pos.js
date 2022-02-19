import POSMobileWrapper from 'components/_Dashboard/POS/POSMobileWrapper'
import Head from 'next/head'
import { usePOS as PosContext } from 'libs/hooks/pos'

const dummy = [
  {
    id: Math.random(),
    name: 'Mie ayam original',
    price: 25000
  },
  {
    id: Math.random(),
    name: 'Nasi goreng babat',
    price: 35000
  },
]

export default function POSPage(){
  return (
    <PosContext.Provider>
      <Head>
        <title>POS | MyKampoong</title>
      </Head>
      <POSMobileWrapper products={dummy}/>
    </PosContext.Provider>
  )
}