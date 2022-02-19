import { format, parseISO } from "date-fns";

import { DownOutlined } from "@ant-design/icons";
import Menu from 'antd/lib/menu'
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography';
import { useFloat } from "libs/hooks/float";
import { useState } from "react";
import { useVacation } from "libs/hooks/vacation";

const { Text } = Typography;



const AddHourContent = ({ onClick }) => {
  const { data } = useVacation.useContainer();
  const { schedule } = data;

  const scheduleArray = schedule.map((i) => {

    const twoDigit = (time) => ("0" + time).slice(-2);
    const start_hour = twoDigit(new Date(i.start_time).getHours());
    const start_minutes = twoDigit(new Date(i.start_time).getMinutes());
    const start_seconds = twoDigit(new Date(i.start_time).getSeconds());
    const end_hour = twoDigit(new Date(i.end_time).getHours());
    const end_minutes = twoDigit(new Date(i.end_time).getMinutes());
    const end_seconds = twoDigit(new Date(i.end_time).getSeconds());
    return {
      id: i.id,
      text: `${start_hour}:${start_minutes} - ${end_hour}:${end_minutes}`,
      start_hours: `${start_hour}:${start_minutes}:${start_seconds}`,
      end_hours: `${end_hour}:${end_minutes}:${end_seconds}`
    };
  });

  return (
    <div style={{ width: 165 }}>
      <Menu
        getPopupContainer={(node) => node.parentElement}
        style={{ borderRadius: 8, overflow: "hidden" }}
        onClick={onClick}
      >
        {scheduleArray.map((i) => {
          return (
            <Menu.Item key={i.id} label={i.text} starthours={i.start_hours} endhours={i.end_hours}>
              {i.text}
            </Menu.Item>
          )
        })}
      </Menu>
    </div>
  );
};

export default AddHourContent