import { createContainer } from 'unstated-next'
import { useState } from 'react'

const useVacation = createContainer((initialState) => {
  const [data, mutate] = useState(initialState)
  return {
    data, mutate
  }
})

export { useVacation }