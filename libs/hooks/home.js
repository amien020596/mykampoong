import { createContainer } from 'unstated-next'
import { useState } from 'react'

const useHome = createContainer((initialState = {}) => {
  const [data, mutate] = useState(initialState)
  return {
    data, mutate
  }
})

export { useHome }