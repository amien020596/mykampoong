import Layout from 'components/Layout/Form'
import { useServiceForm as ServiceForm } from 'libs/hooks/serviceForm'
import ServiceFormWrapper from 'components/_Service/ServiceFormWrapper'
import { useEffect } from 'react'

export default function Form() {
  // useEffect(() => {
  //   document.title = 'New service | MyKampoong'
  // })
  return (
    <ServiceForm.Provider>
      <Layout>
        <ServiceFormWrapper />
      </Layout>
    </ServiceForm.Provider>

  )
}