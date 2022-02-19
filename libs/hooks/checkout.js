import { createContainer } from 'unstated-next'
import { useState } from 'react'

const CheckoutProvider = createContainer((initialState = 1) => {
  const [ step, setStep ] = useState(initialState)
  return {
    step, setStep
  }
})

export default CheckoutProvider