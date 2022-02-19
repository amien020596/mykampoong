import { createContainer } from 'unstated-next'
import { useState } from 'react'

const initialState = {
  visibleDrawer: false
}

const useExperience = createContainer(() => {

  const [visibleDrawer, setVisibleDrawer] = useState(initialState.visibleDrawer)
  return {
    visibleDrawer, setVisibleDrawer
  }
})

export { useExperience }