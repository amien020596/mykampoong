import "assets/datepicker.less";

import AddDatesContent from "./Content/AddDatesContent";
import Button from 'antd/lib/button'
import { Calendar } from "react-date-range";
import { DownOutlined } from "@ant-design/icons";
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography';
import { format } from "date-fns";
import { useFloat } from "libs/hooks/float";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const { Text } = Typography;



// https://www.npmjs.com/package/react-date-range

const AddDates = ({
  selectedDates = () => { }
}) => {
  const { t } = useTranslation('common')
  const { data, mutate } = useFloat.useContainer();

  const [focus, setFocus] = useState(false);
  const [label, setLabel] = useState(`${t("Add dates")}`);

  const handleSave = (date) => {
    setFocus(false);
    setLabel(format(date, "d MMM yyyy"));
    selectedDates(true)

    mutate({ ...data, date });
  };

  return (
    <Popover
      content={<AddDatesContent onSave={handleSave} />}
      placement="bottomRight"
      trigger="click"
      visible={focus}
      onVisibleChange={(e) => setFocus(e)}
      overlayClassName="custom"
      getPopupContainer={triggerNode => triggerNode.parentNode}
    >
      <div className={`f f-btw mdl inputLike group ${focus && "focus"}`}>
        <Text className="input-label">{label}</Text>
        <DownOutlined />
      </div>
    </Popover>
  );
}

export default AddDates