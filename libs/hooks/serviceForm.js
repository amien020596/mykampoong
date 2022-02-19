import { createContainer } from 'unstated-next'
import { useState } from 'react'

const useServiceForm = createContainer(() => {
  const [locationVisible, setLocationVisible] = useState(false)
  return {
    locationVisible,
    setLocationVisible
  }
})

export { useServiceForm }