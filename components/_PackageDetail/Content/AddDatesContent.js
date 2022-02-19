import 'assets/datepicker.less'

import { Calendar, DateRange } from 'react-date-range';

import Button from 'antd/lib/button'
import { DownOutlined } from '@ant-design/icons'
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography'
import { format } from 'date-fns';
import { parseDate } from 'libs/helpers/parser/parser';
import { useState } from 'react'
import { useTranslation } from 'next-i18next';
import { useVacation } from 'libs/hooks/vacation';

const { Text } = Typography

const AddDatesContent = ({
  onSave = () => { },
}) => {
  const { t } = useTranslation('common')
  const [date, setDate] = useState(new Date())
  const minDate = new Date()
  const handleChange = date => {
    setDate(date)
  }
  return (
    <div>
      <Calendar
        minDate={minDate}
        date={date}
        onChange={handleChange}
        color='#F97316'
      />
      <div className='f mdl f-rht'>
        <Button type='link'>{t("Clear")}</Button>
        <Button type='primary' onClick={() => onSave(date)}>{t("Save")}</Button>
      </div>
    </div>
  )
}


export default AddDatesContent