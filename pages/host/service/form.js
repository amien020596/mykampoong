import { useEffect } from 'react'
import { useServiceForm as ServiceForm } from 'libs/hooks/serviceForm'
import Layout from 'components/Layout/Form'
import ServiceFormWrapper from 'components/_Service/ServiceFormWrapper'
export default function Form() {
  useEffect(() => {
    document.title = 'New service | MyKampoong'
  })
  return (
    <ServiceForm.Provider>
      <Layout>
        <ServiceFormWrapper />
      </Layout>
    </ServiceForm.Provider>

  )
}