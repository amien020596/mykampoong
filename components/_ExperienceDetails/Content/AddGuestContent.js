import { DownOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons'

import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography'
import { useState } from 'react'
import { useTranslation } from 'next-i18next';
import { useVacation } from 'libs/hooks/vacation'

const { Text } = Typography


const AddGuestContent = ({
  onSave = () => { }
}) => {
  const { t } = useTranslation('common')
  const { data, mutate } = useVacation.useContainer()

  const handleDecreaseGuest = (type, value) => {
    if (value == 0) return;
    mutate({
      ...data,
      form: {
        ...data.form,
        guest: {
          adult: (type == 'ADULT' ? data.form?.guest?.adult - 1 : data.form?.guest?.adult) || 0,
          children: (type == 'CHILDREN' ? data.form?.guest?.children - 1 : data.form?.guest?.children) || 0,
          infant: (type == 'INFANT' ? data.form?.guest?.infant - 1 : data.form?.guest?.infant) || 0
        }
      }
    })
  }

  const handleIncreaseGuest = (type, value) => {
    mutate({
      ...data,
      form: {
        ...data.form,
        guest: {
          adult: (type == 'ADULT' ? data.form?.guest?.adult + 1 : data.form?.guest?.adult) || 0,
          children: (type == 'CHILDREN' ? data.form?.guest?.children + 1 : data.form?.guest?.children) || 0,
          infant: (type == 'INFANT' ? data.form?.guest?.infant + 1 : data.form?.guest?.infant) || 0
        }
      }
    })
  }

  return (
    <div style={{ padding: '10px 18px' }}>
      <div className='f mdl f-btw' style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 16 }}>{t("Adults")}</Text>
        <div className='f mdl'>
          <Button style={{ height: 32, padding: '0 8px' }} onClick={() => handleDecreaseGuest('ADULT', data.form?.guest?.adult)}><MinusOutlined /></Button>
          <Input bordered={false} style={{ width: 50, textAlign: 'center', fontSize: 16, appearance: 'none' }} defaultValue={0} value={data.form?.guest?.adult || 0} />
          <Button style={{ height: 32, padding: '0 8px' }} onClick={() => handleIncreaseGuest('ADULT', data.form?.guest?.adult)}><PlusOutlined /></Button>
        </div>
      </div>
      <div className='f mdl f-btw' style={{ marginBottom: 24 }}>
        <div className='f f-c'>
          <Text style={{ fontSize: 16 }}>{t("Children")}</Text>
          <Text style={{ fontSize: 12 }}>{t("Age 2-12")}</Text>
        </div>
        <div className='f mdl'>
          <Button style={{ height: 32, padding: '0 8px' }} onClick={() => handleDecreaseGuest('CHILDREN', data.form?.guest?.children)}><MinusOutlined /></Button>
          <Input bordered={false} style={{ width: 50, textAlign: 'center', fontSize: 16, appearance: 'none' }} defaultValue={0} value={data.form?.guest?.children || 0} />
          <Button style={{ height: 32, padding: '0 8px' }} onClick={() => handleIncreaseGuest('CHILDREN', data.form?.guest?.children)}><PlusOutlined /></Button>
        </div>
      </div>
      <div className='f mdl f-btw' style={{ marginBottom: 32 }}>
        <div className='f f-c'>
          <Text style={{ fontSize: 16 }}>{t("Infants")}</Text>
          <Text style={{ fontSize: 12 }}>{t("Under 2")}</Text>
        </div>
        <div className='f mdl'>
          <Button style={{ height: 32, padding: '0 8px' }} onClick={() => handleDecreaseGuest('INFANT', data.form?.guest?.infant)}><MinusOutlined /></Button>
          <Input bordered={false} style={{ width: 50, textAlign: 'center', fontSize: 16, appearance: 'none' }} defaultValue={0} value={data.form?.guest?.infant || 0} />
          <Button style={{ height: 32, padding: '0 8px' }} onClick={() => handleIncreaseGuest('INFANT', data.form?.guest?.infant)}><PlusOutlined /></Button>
        </div>
      </div>
      <div className='f f-rht'>
        <Button type='primary' size='large' onClick={() => onSave()}>{t("Save")}</Button>
      </div>
    </div>
  )
}


export default AddGuestContent