import 'assets/datepicker.less'

import { Calendar, DateRange } from 'react-date-range';

import Button from 'antd/lib/button'
import { DownOutlined } from '@ant-design/icons'
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography'
import { format } from 'date-fns';
import { useState } from 'react'
import { useTranslation } from 'next-i18next';
import { useVacation } from 'libs/hooks/vacation';

const AddDatesContent = ({
  onSave = () => { }
}) => {
  const { t } = useTranslation('common')
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const { data, mutate } = useVacation.useContainer()
  const minDate = new Date();

  const handleDateChange = (itemSelection) => {
    setDate(itemSelection)
    mutate({
      ...data,
      form: {
        date: itemSelection
      }
    })
  }

  return (
    <div>
      <DateRange
        ranges={date}
        minDate={minDate}
        onChange={item => handleDateChange([item.selection])}
        moveRangeOnFirstSelection={false}
        rangeColors={['#F97316']}
      />
      <div className='f mdl f-rht'>
        <Button type='link'>{t("Clear")}</Button>
        <Button type='primary' onClick={() => onSave(data.form.date)}>{t("Save")}</Button>
      </div>
    </div>
  )
}

export default AddDatesContent