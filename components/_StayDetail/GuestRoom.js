import { useState } from "react";
import { Typography, Popover, Button, Input } from "antd";
import { useFloat } from "libs/hooks/float";
import { DownOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Content = ({ onSave = () => {} }) => {
  const [rooms, setRooms] = useState(0);
  const [guests, setGuests] = useState(0);

  const handleRoomChange = (type) => {
    if (type === "PLUS") {
      setRooms(rooms + 1);
    }
    if (type === "MINUS") {
      setRooms(rooms > 0 ? rooms - 1 : 0);
    }
  };
  const handleGuestChange = (type) => {
    if (type === "PLUS") {
      setGuests(guests + 1);
    }
    if (type === "MINUS") {
      setGuests(guests > 0 ? guests - 1 : 0);
    }
  };

  const handleSave = () => {
    const data = {
      rooms,
      guests
    };
    onSave(data);
  };

  return (
    <div style={{ padding: "10px 18px" }}>
      <div className="f mdl f-btw" style={{ marginBottom: 24 }}>
        <Text style={{ fontSize: 16 }}>Guest</Text>
        <div className="f mdl">
          <Button
            style={{ height: 32, padding: "0 8px" }}
            onClick={() => handleGuestChange("MINUS")}
          >
            <MinusOutlined />
          </Button>
          <Input
            bordered={false}
            style={{
              width: 50,
              textAlign: "center",
              fontSize: 16,
              appearance: "none"
            }}
            defaultValue={guests}
            value={guests}
          />
          <Button
            style={{ height: 32, padding: "0 8px" }}
            onClick={() => handleGuestChange("PLUS")}
          >
            <PlusOutlined />
          </Button>
        </div>
      </div>
      <div className="f mdl f-btw" style={{ marginBottom: 24 }}>
        <div className="f f-c">
          <Text style={{ fontSize: 16 }}>Room</Text>
        </div>
        <div className="f mdl">
          <Button
            style={{ height: 32, padding: "0 8px" }}
            onClick={() => handleRoomChange("MINUS")}
          >
            <MinusOutlined />
          </Button>
          <Input
            bordered={false}
            style={{
              width: 50,
              textAlign: "center",
              fontSize: 16,
              appearance: "none"
            }}
            defaultValue={rooms}
            value={rooms}
          />
          <Button
            style={{ height: 32, padding: "0 8px" }}
            onClick={() => handleRoomChange("PLUS")}
          >
            <PlusOutlined />
          </Button>
        </div>
      </div>
      <div className="f f-rht">
        <Button type="primary" size="large" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default function AddGuest() {
  const { data, mutate } = useFloat.useContainer();

  const [focus, setFocus] = useState(false);
  const [label, setLabel] = useState("Guest / Room");

  const handleVisibleChange = (e) => {
    setFocus(e);
  };

  const handleSave = (values) => {
    const { rooms, guests } = values;
    setLabel(
      `${guests} ${guests > 1 ? "Guests" : "Guest"}, ${rooms} ${
        rooms > 1 ? "Rooms" : "Room"
      }`
    );
    mutate({ ...data, guests, rooms });
    setFocus(false);
  };

  return (
    <Popover
      content={<Content onSave={handleSave} />}
      placement="bottomLeft"
      overlayStyle={{
        width: 333
      }}
      trigger="click"
      overlayClassName="custom"
      visible={focus}
      onVisibleChange={handleVisibleChange}
      getPopupContainer={(triggerNode) => triggerNode.parentNode}
    >
      <div className={`f f-btw mdl inputLike ${focus && "focus"}`}>
        <Text className="input-label">{label}</Text>
        <DownOutlined />
      </div>
    </Popover>
  );
}
