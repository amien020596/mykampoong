import { format, parseISO } from "date-fns";

import AddHourContent from "./Content/AddHourContent";
import { DownOutlined } from "@ant-design/icons";
import Menu from 'antd/lib/menu'
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography';
import { useFloat } from "libs/hooks/float";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useVacation } from "libs/hooks/vacation";

const { Text } = Typography;


const AddHour = ({
  selectedHour = () => { },
}) => {
  const { t } = useTranslation('common')
  const [focus, setFocus] = useState(false);
  const [label, setLabel] = useState(`${t("Add hour")}`);

  const { data, mutate } = useFloat.useContainer();

  const handleClick = (value) => {
    const { label: menuLabel, starthours: start_hours, endhours: end_hours } = value.item.props;
    selectedHour(true)
    setLabel(menuLabel);
    setFocus(false);


    mutate({
      ...data,
      // scheduleId: value.key,
      scheduleId: "0",
      start_hours,
      end_hours
    });
  };

  return (
    <Popover
      content={<AddHourContent onClick={handleClick} />}
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

export default AddHour