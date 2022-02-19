import { HeartOutlined, MessageOutlined, ShareAltOutlined } from '@ant-design/icons'
import { bookingAddToCart, useBookNow } from 'modules/booking/post-booking'
import { currency, parseNumber } from 'libs/helpers/parser/parser'

import AccountContext from 'libs/hooks/account'
import AddDates from './AddDates'
import AddGuest from './AddGuest'
import Available from './Available'
import Button from 'antd/lib/button'
import { CheckAvailabilityExperience } from 'modules/experience/post-check-availability'
import ModalShare from 'components/_StayDetail/ModalShare'
import Typography from 'antd/lib/typography'
import { format } from 'date-fns'
import { isloginUser } from 'libs/helpers/auth'
import message from 'antd/lib/message'
import { useExperience } from 'libs/hooks/experience'
import { useGlobalContext } from 'libs/hooks/global'
import { useState } from 'react'
import { useTranslation } from 'next-i18next';
import { useVacation } from 'libs/hooks/vacation'

const { Title, Text } = Typography


function Float() {
  const { t } = useTranslation('common')
  const { data } = useVacation.useContainer()
  const { visibleDrawer, setVisibleDrawer } = useExperience.useContainer()
  const { vacation: vacationProperties } = data
  const [modalShow, setModalShow] = useState(false)
  const { setModalWishlist, setModalMessage, setDataWishlist } = useGlobalContext.useContainer();
  const { setLoginModalVisible } = AccountContext.useContainer()

  const handleOpenDrawer = () => {
    setVisibleDrawer(!visibleDrawer)
  }

  function setOpenModal() {
    setModalWishlist(true)
    setDataWishlist({ 'travel_object_id': vacationProperties?.id })
  }

  const handleClickModal = () => isloginUser() ? setOpenModal() : setLoginModalVisible(true)

  const handleClickModalMessage = () => isloginUser() ? setModalMessage(true) : setLoginModalVisible(true)


  function handleClick() {
    setModalShow(true)
  }
  function handleCloseModal() {
    setModalShow(false)
  }

  const handleCheckAvailability = async () => {
    message.info("running function to check avaiability experience")
    // CheckAvailabilityExperience()
  }

  function handleBookNow() {

    if (!data.form?.guest || (data.form?.guest.adult === 0 && data.form?.guest.children === 0 && data.form?.guest.infant === 0)) {
      message.error('Pick Guest first')
      return;
    }

    if (!data.form?.date) {
      message.error('Pick Date first')
      return;
    }
    const dataDateBooking = { ...data.form?.date[0] || null }

    const dataForm = {
      "start_date": format(dataDateBooking?.startDate, "yyyy-MM-dd HH:mm:ss"),
      "end_date": format(dataDateBooking?.endDate, "yyyy-MM-dd HH:mm:ss"),
      "travel_object_id": vacationProperties.id,
      "total_dewasa": data.form?.guest?.adult || 1,
      "total_anak_anak": data.form?.guest?.children || 0,
      "total_balita": data.form?.guest?.infant || 0
    };

    useBookNow(dataForm).then(response => {

      if (response.success) {
        setButtonLoading(false)
        message.success(`${t('Success add experience to cart')}`)
        setTimeout(() => {
          Router.push("/checkout");
        }, 500);
      } else {
        message.error(`${t('Failed add experience to cart')}`)
      }
    }).catch(error => {
      message.error(`${t('internal server error')}`)
    })
  }


  function addToCart() {

    if (!data.form?.guest || (data.form?.guest.adult === 0 && data.form?.guest.children === 0 && data.form?.guest.infant === 0)) {
      message.error('Pick Guest first')
      return;
    }

    if (!data.form?.date) {
      message.error('Pick Date first')
      return;
    }
    const dataDateBooking = { ...data.form?.date[0] || null }

    const dataForm = {
      "start_date": format(dataDateBooking?.startDate, "yyyy-MM-dd HH:mm:ss"),
      "end_date": format(dataDateBooking?.endDate, "yyyy-MM-dd HH:mm:ss"),
      "travel_object_id": vacationProperties.id,
      "total_dewasa": data.form?.guest?.adult || 0,
      "total_anak_anak": data.form?.guest?.children || 0,
      "total_balita": data.form?.guest?.infant || 0
    };

    bookingAddToCart(dataForm).then(response => {
      if (response.success) {
        message.success(`${t('Success add experience to cart')}`)
      } else {
        message.error(`${t('Failed add experience to cart')}`)
      }
    }).catch(error => {
      message.error(`${t('internal server error')}`)
    })
  }



  return (
    <div className='wrapper'>
      <style jsx>
        {`
          .wrapper {
            border-radius: 8px;
            border: solid 1px var(--gray300);
            position: sticky;
            top: 105px;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
          }
          .p {
            padding: 28px 24px 24px;
          }
          .action a {
            color: var(--gray800);
            font-weight: 500;
            font-size: 14px;
          }
          .action a:hover {
            color: var(--primary-color)
          }
         
        `}
      </style>
      <style jsx global>
        {`
         .action .anticon {
            font-size: 20px;
            margin-right: 8px;
          }
        `}
      </style>
      <div className='p'>
        <Text>{t("Start from")}</Text>
        <Title level={3} style={{ letterSpacing: '.02em', marginTop: 0 }}>{currency(vacationProperties.vacation_price)}<span style={{ fontSize: 18, fontWeight: 400 }}>/ {t("person")}</span></Title>

        <div style={{ margin: '20px 0 10px' }} className='f mdl'>
          <AddGuest />
          <AddDates />
        </div>
        <div>
          <Available />
          <Available />
          <Button block type='ghost' size='large' style={{ margin: '12px 0' }} onClick={handleOpenDrawer}>{t("View more dates")}</Button>
        </div>
        <Button block type='primary' size='large' onClick={() => handleCheckAvailability()}>{t("Check availability")}</Button>
      </div>
      <div className='separator' />
      <div className='f mdl p f-btw action' style={{ paddingTop: 16 }}>
        <a onClick={() => handleClickModalMessage()}>
          <MessageOutlined />
          {t("Message")}
        </a>
        <a onClick={handleClick}>
          <ShareAltOutlined />
          {t("Share")}
        </a>
        <a onClick={() => handleClickModal()}>
          <HeartOutlined />
          {t("Save")}
        </a>
      </div>
      <ModalShare visible={modalShow} data={data} onClose={handleCloseModal} />
    </div>
  )
}


export default Float;