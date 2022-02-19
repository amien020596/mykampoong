import { createContainer } from 'unstated-next'
import { useState } from 'react'

const useGlobalContext = createContainer((initialState = {}) => {
  const [dataGlobal, setDataGlobal] = useState(initialState)
  const [modalWishlist, setModalWishlist,] = useState(false)
  const [modalCreateWishlist, setModalCreateWishlist] = useState(false)
  const [modalMessage, setModalMessage] = useState(false);
  const [drawerNotificationVisible, setDrawerNotificationVisible] = useState(false);
  const [dataWishlist, setDataWishlist] = useState([]);
  const [reloadDataWishlist, setReloadDataWishlist] = useState(false)

  return {
    dataGlobal, setDataGlobal,
    dataWishlist, setDataWishlist,
    modalWishlist, setModalWishlist,
    reloadDataWishlist, setReloadDataWishlist,
    drawerNotificationVisible, setDrawerNotificationVisible,
    modalCreateWishlist, setModalCreateWishlist,
    modalMessage, setModalMessage,
  }
})

export { useGlobalContext }