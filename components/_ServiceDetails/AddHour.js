import { Typography, Popover, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useVacation } from "libs/hooks/vacation";
import { useFloat } from "libs/hooks/float";

import { useState } from "react";
const { Text } = Typography;

const Content = ({ onClick }) => {
  const { data } = useVacation.useContainer();
  const { schedule } = data;

  const scheduleArray = schedule.map((i) => {
    const twoDigit = (time) => ("0" + time).slice(-2);
    const start_hour = twoDigit(new Date(i.start_time).getHours());
    const start_minutes = twoDigit(new Date(i.start_time).getMinutes());
    const end_hour = twoDigit(new Date(i.end_time).getHours());
    const end_minutes = twoDigit(new Date(i.end_time).getMinutes());
    return {
      id: i.id,
      text: `${start_hour}:${start_minutes} - ${end_hour}:${end_minutes}`
    };
  });

  return (
    <div style={{ width: 165 }}>
      <Menu
        getPopupContainer={(node) => node.parentElement}
        style={{ borderRadius: 8, overflow: "hidden" }}
        onClick={onClick}
      >
        {scheduleArray.map((i) => (
          <Menu.Item key={i.id} label={i.text}>
            {i.text}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default function AddDates() {
  const [focus, setFocus] = useState(false);
  const [label, setLabel] = useState("Add hour");

  const { data, mutate } = useFloat.useContainer();

  const handleClick = (value) => {
    const { label: menuLabel } = value.item.props;

    setLabel(menuLabel);
    setFocus(false);

    mutate({ ...data, scheduleId: value.key });
  };

  return (
    <Popover
      content={<Content onClick={handleClick} />}
      placement="bottomRight"
      getPopupContainer={(node) => node.parentElement}
      trigger="click"
      visible={focus}
      overlayClassName="custom no-padding"
      onVisibleChange={(e) => setFocus(e)}
    >
      <div className={`f f-btw mdl inputLike group ${focus && "focus"}`}>
        <Text className="input-label">{label}</Text>
        <DownOutlined />
      </div>
    </Popover>
  );
}
