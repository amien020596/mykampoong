import 'assets/datepicker.less'

import { Calendar, DateRange } from 'react-date-range';

import AddDatesContent from './Content/AddDatesContent';
import Button from 'antd/lib/button'
import { DownOutlined } from '@ant-design/icons'
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography'
import { format } from 'date-fns';
import { useState } from 'react'
import { useTranslation } from 'next-i18next';
import { useVacation } from 'libs/hooks/vacation';

;

const { Text } = Typography



// https://www.npmjs.com/package/react-date-range

const AddDates = () => {
  const { t } = useTranslation('common')
  const [focus, setFocus] = useState(false)
  const [label, setLabel] = useState(`${t("Add Date")}`)
  const handleOnSave = (date) => {
    setLabel(format(date[0].startDate, "d MMM yyyy") + " - " + format(date[0].endDate, "d MMM yyyy"))
    setFocus(false)
  }

  return (
    <Popover
      content={<AddDatesContent onSave={handleOnSave} />}
      placement='bottomRight'
      trigger='click'
      overlayClassName='custom'
      visible={focus}
      onVisibleChange={e => setFocus(e)}
      getPopupContainer={triggerNode => triggerNode.parentNode}
    >
      <div className={`f f-btw mdl inputLike group ${focus && 'focus'}`}>
        <Text className='input-label'>{label}</Text>
        <DownOutlined />
      </div>
    </Popover>
  )
}

export default AddDates