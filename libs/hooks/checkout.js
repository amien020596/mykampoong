import { createContainer } from 'unstated-next'
import { useRouter } from 'next/router'
import { useState } from 'react'

const CheckoutProvider = createContainer((state) => {

  const [onCheckFormValidation, setOnCheckFormValidation] = useState(false)
  const [data, mutate] = useState(null)
  const [step, setStep] = useState(() => {
    const router = useRouter();
    if (router.pathname === "/checkout/waiting") {
      return 3
    }
    return 1
  })


  return {
    data, mutate,
    step, setStep,
    onCheckFormValidation, setOnCheckFormValidation,
  }
})

export default CheckoutProvider