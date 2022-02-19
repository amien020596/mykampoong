import { Typography, Popover, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Calendar } from "react-date-range";
import { format } from "date-fns";
import { useFloat } from "libs/hooks/float";
import { useState } from "react";

const { Text } = Typography;
import "assets/datepicker.less";

const Content = ({ onSave = () => {} }) => {
  const [date, setDate] = useState(null);

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

  const [focusCheckIn, setFocusCheckIn] = useState(false);
  const [focusCheckOut, setFocusCheckOut] = useState(false);
  const [labelCheckIn, setLabelCheckIn] = useState("Check In");
  const [labelCheckOut, setLabelCheckOut] = useState("Check Out");

  const handleSaveCheckIn = (date) => {
    setFocusCheckIn(false);
    setLabelCheckIn(format(date, "d MMM yyyy"));

    mutate({ ...data, start_date: date });
  };

  const handleSaveCheckOut = (date) => {
    setFocusCheckOut(false);
    setLabelCheckOut(format(date, "d MMM yyyy"));

    mutate({ ...data, end_date: date });
  };

  return (
    <div className="f mdl" style={{ marginBottom: 20 }}>
      <Popover
        content={<Content onSave={handleSaveCheckIn} />}
        placement="bottomRight"
        trigger="click"
        overlayClassName="custom"
        visible={focusCheckIn}
        onVisibleChange={(e) => setFocusCheckIn(e)}
        getPopupContainer={(triggerNode) => triggerNode.parentNode}
      >
        <div
          className={`f f-btw mdl inputLike group ${focusCheckIn && "focus"}`}
        >
          <Text className="input-label">{labelCheckIn}</Text>
          <DownOutlined />
        </div>
      </Popover>
      <Popover
        content={<Content onSave={handleSaveCheckOut} />}
        placement="bottomRight"
        trigger="click"
        overlayClassName="custom"
        visible={focusCheckOut}
        onVisibleChange={(e) => setFocusCheckOut(e)}
        getPopupContainer={(triggerNode) => triggerNode.parentNode}
      >
        <div
          className={`f f-btw mdl inputLike group ${focusCheckOut && "focus"}`}
        >
          <Text className="input-label">{labelCheckOut}</Text>
          <DownOutlined />
        </div>
      </Popover>
    </div>
  );
}
