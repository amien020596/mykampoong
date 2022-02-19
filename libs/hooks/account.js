import { createContainer } from 'unstated-next'
import { useState } from 'react'

function useAccount() {
  const [loginModalVisible, setLoginModalVisible] = useState(false)
  const [registerModalVisible, setRegisterModalVisible] = useState(false)
  return {
    loginModalVisible,
    setLoginModalVisible,
    registerModalVisible,
    setRegisterModalVisible
  }
}

const AccountContext = createContainer(useAccount);

export default AccountContext