import { Typography, Popover, Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { DateRange, Calendar } from 'react-date-range';

import { useState } from 'react'
const { Text } = Typography
import 'assets/datepicker.less'

const content = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <div>
      <DateRange
        ranges={date}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        rangeColors={['#F97316']}
      />
      <div className='f mdl f-rht'>
        <Button type='link'>Clear</Button>
        <Button type='primary'>Save</Button>
      </div>
    </div>
  )
}

// https://www.npmjs.com/package/react-date-range

export default function AddDates() {
  const [focus, setFocus] = useState(false)

  return (
    <Popover
      content={content()}
      placement='bottomRight'
      trigger='click'
      overlayClassName='custom'
      onVisibleChange={e => setFocus(e)}
    >
      <div className={`f f-btw mdl inputLike group ${focus && 'focus'}`}>
        <Text className='input-label'>Dates</Text>
        <DownOutlined />
      </div>
    </Popover>
  )
}