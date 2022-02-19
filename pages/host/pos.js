import Head from 'next/head'
import MetaHead from 'components/_Meta/MetaHead'
import POSMobileWrapper from 'components/_Dashboard/POS/POSMobileWrapper'
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

export default function POSPage() {
  return (
    <PosContext.Provider>

      <MetaHead description="POS" title={"POS | MyKampoong"} />
      <POSMobileWrapper products={dummy} />
    </PosContext.Provider>
  )
}