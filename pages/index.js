import { useEffect } from 'react'
import { useHome as HomeContext } from 'libs/hooks/home'
import Layout from 'components/Layout/Public'
import Hero from 'components/_Home/Hero'
import Tailor from 'components/_Home/Tailor'
import BestValue from 'components/_Home/BestValue'
import Trip from 'components/_Home/Trip'
import Place from 'components/_Home/Place'
import Experience from 'components/_Home/Experience'

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      data
    },
  }
}

export default function Home({ data }) {
  useEffect(() => {
    document.title = 'Home | MyKampoong'
  })
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

