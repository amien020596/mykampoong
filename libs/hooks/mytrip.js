import { createContainer } from 'unstated-next'
import { useState } from 'react'

const Context = createContainer(() => {
  const [visible, setVisible] = useState(false)
  const [fetchData, setFetchData] = useState(false)
  const [data, mutate] = useState({})
  return {
    visible, setVisible,
    fetchData, setFetchData,
    data, mutate
  }
})

export default Context