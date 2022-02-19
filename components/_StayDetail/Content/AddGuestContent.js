import { DownOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";

import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography';
import { useFloat } from "libs/hooks/float";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useVacation } from "libs/hooks/vacation";

const { Text } = Typography;

const AddGuestContent = ({
  room,
  guest,
  onSave,
}) => {
  const { t } = useTranslation('common')
  const [rooms, setRooms] = useState(() => {
    if (room) {
      return room
    }
    return 0
  });

  const [guests, setGuests] = useState(() => {
    if (guest) {
      return guest
    }
    return 0
  });

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
        <Text style={{ fontSize: 16 }}>{t("Guest")}</Text>
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
          <Text style={{ fontSize: 16 }}>{t("Room")}</Text>
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
        <Button type="primary" size="large" onClick={() => handleSave()}>
          {t("Save")}
        </Button>
      </div>
    </div>
  );
};


export default AddGuestContent