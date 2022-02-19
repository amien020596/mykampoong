import { createContainer } from 'unstated-next'
import { useState } from 'react'
const Context = createContainer(() => {
  const [visible, setVisible] = useState(false)
  return {
    visible, setVisible
  }
})

export default Context