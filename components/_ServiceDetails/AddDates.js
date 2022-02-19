import { useState } from "react";
import { Calendar } from "react-date-range";
import { Typography, Popover, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useFloat } from "libs/hooks/float";
import { format } from "date-fns";

const { Text } = Typography;
import "assets/datepicker.less";

const Content = ({ onSave = () => {} }) => {
  const [date, setDate] = useState(new Date());

  const handleSelect = (data) => {
    setDate(data);
  };

  const handleReset = () => {
    setDate(new Date());
  };

  return (
    <div>
      <Calendar date={date} onChange={handleSelect} color="#F97316" />
      <div className="f mdl f-rht">
        <Button type="link" onClick={handleReset}>
          Clear
        </Button>
        <Button type="primary" onClick={() => onSave(date)}>
          Save
        </Button>
      </div>
    </div>
  );
};

// https://www.npmjs.com/package/react-date-range

export default function AddDates() {
  const { data, mutate } = useFloat.useContainer();

  const [focus, setFocus] = useState(false);
  const [label, setLabel] = useState("Add dates");

  const handleSave = (date) => {
    setFocus(false);
    setLabel(format(date, "d MMM yyyy"));

    mutate({ ...data, date });
  };

  return (
    <Popover
      content={<Content onSave={handleSave} />}
      placement="bottomRight"
      trigger="click"
      visible={focus}
      onVisibleChange={(e) => setFocus(e)}
      overlayClassName="custom"
    >
      <div className={`f f-btw mdl inputLike group ${focus && "focus"}`}>
        <Text className="input-label">{label}</Text>
        <DownOutlined />
      </div>
    </Popover>
  );
}
