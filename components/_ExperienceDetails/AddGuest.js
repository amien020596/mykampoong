import { DownOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'

import AddGuestContent from './Content/AddGuestContent'
import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography'
import { useState } from 'react'
import { useTranslation } from 'next-i18next';
import { useVacation } from 'libs/hooks/vacation'

const { Text } = Typography

const AddGuest = (
) => {
  const { t } = useTranslation('common')
  const [focus, setFocus] = useState(false)
  const [label, setLabel] = useState(`${t("Add Guest")}`)
  const handleVisibleChange = e => {
    setFocus(e)
  }
  const { data } = useVacation.useContainer()

  const handleOnSave = () => {
    setFocus(false)
    setLabel(parseLabel())
  }

  const parseLabel = () => {
    const guest = data.form?.guest
    if (guest.adult == 0 && guest?.children == 0 && guest?.infant == 0) {
      return `${t("Add Guest")}`
    }
    return `${data.form?.guest?.adult} ${t("Adult")}, ${data.form?.guest?.children} ${("Children")}, ${data.form?.guest?.infant} ${("Infant")}`
  }

  return (
    <Popover
      content={() => <AddGuestContent onSave={handleOnSave} />}
      placement='bottomLeft'
      overlayStyle={{
        width: 333
      }}
      trigger='click'
      overlayClassName='custom'
      visible={focus}
      onVisibleChange={() => setFocus(!focus)}
      getPopupContainer={triggerNode => triggerNode.parentNode}
    >
      <div className={`f f-btw mdl inputLike group ${focus && 'focus'}`}>
        <Text className='input-label'>{label}</Text>
        <DownOutlined />
      </div>
    </Popover>
  )
}

export default AddGuest