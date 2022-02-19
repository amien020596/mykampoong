import AddGuestContent from './Content/AddGuestContent'
import { DownOutlined } from "@ant-design/icons";
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography';
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useVacation } from "libs/hooks/vacation";

const { Text } = Typography;


const AddGuest = ({
  selectedGuest = () => { },
}) => {
  const { t } = useTranslation('common')
  const { data, mutate } = useVacation.useContainer();

  const [focus, setFocus] = useState(false);
  const [label, setLabel] = useState(() => {
    if (data?.form?.rooms && data?.form?.guests) {
      const rooms = data.form.rooms;
      const guests = data.form.guests

      return `${guests} ${guests > 1 ? `${t("Guests")}` : `${t("Guest")}`}, ${rooms} ${rooms > 1 ? `${t("Rooms")}` : `${t("Room")}`}`
    }
    return `${t("Guest / Room")}`
  });

  const [guest, setGuest] = useState(() => {
    if (data?.form?.guests) {
      return data.form.guests
    }
    return false
  })

  const [room, setRoom] = useState(() => {
    if (data?.form?.rooms) {
      return data.form.rooms
    }
    return false
  })

  const handleVisibleChange = (e) => {
    setFocus(e);
  };

  const handleSave = (values) => {
    const { rooms, guests } = values;
    selectedGuest(true)
    setLabel(`${guests} ${guests > 1 ? `${t("Guests")}` : `${t("Guest")}`}, ${rooms} ${rooms > 1 ? `${t("Rooms")}` : `${t("Room")}`}`);
    mutate({
      ...data,
      form: {
        ...data.form,
        total_dewasa: guests,
        guests,
        rooms,
      }
    });
    setFocus(false);
  };

  return (
    <Popover
      content={<AddGuestContent guest={guest} room={room} onSave={handleSave} />}
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

export default AddGuest