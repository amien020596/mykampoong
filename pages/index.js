import BestValue from 'components/_Home/BestValue'
import Experience from 'components/_Home/Experience'
import Hero from 'components/_Home/Hero'
import { useHome as HomeContext } from 'libs/hooks/home'
import Layout from 'components/Layout/Public'
import Place from 'components/_Home/Place'
import Tailor from 'components/_Home/Tailor'
import Trip from 'components/_Home/Trip'
import { config } from '../constants'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'

export async function getServerSideProps({ locale }) {
  console.log("locales from index", locale)
  const res = await fetch(`${config.NEXT_PUBLIC_API_URL}/home`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data
    },
  }
}

function Home({ data }) {

  // useEffect(() => {
  //   document.title = 'Home | MyKampoong'
  // })

  return (
    <HomeContext.Provider initialState={data}>
      <Layout>
        <Hero />
        <Tailor />
        <BestValue />
        <Trip />
        <Place />
        <Experience />
      </Layout>
    </HomeContext.Provider>
  )
}

export default Home