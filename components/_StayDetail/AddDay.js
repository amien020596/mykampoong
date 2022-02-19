import "assets/datepicker.less";

import { useEffect, useState } from "react";

import AddDayContent from "./Content/AddDayContent";
import Button from 'antd/lib/button'
import { Calendar } from "react-date-range";
import { DownOutlined } from "@ant-design/icons";
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography';
import { format } from "date-fns";
import { useFloat } from "libs/hooks/float";
import { useTranslation } from "next-i18next";
import { useVacation } from "libs/hooks/vacation";

const { Text } = Typography;

// https://www.npmjs.com/package/react-date-range

const AddDates = ({
  selectedReservationDate = () => { }
}) => {
  const { t } = useTranslation('common')


  const { data, mutate } = useVacation.useContainer();

  const [checkin, setCheckin] = useState(false)
  const [checkout, setCheckout] = useState(false)

  const [focusCheckIn, setFocusCheckIn] = useState(false);
  const [focusCheckOut, setFocusCheckOut] = useState(false);

  function handleDefaultLabel(checkin = false) {
    if (checkin && data?.form?.start_date) {
      return format(data.form.start_date, "d MMM yyyy")
    }

    if (!checkin && data?.form?.end_date) {
      return format(data.form.end_date, "d MMM yyyy")
    }

    return false
  }

  function handleDefaultValue(checkin = false) {
    if (checkin && data?.form?.start_date) {
      return data.form.start_date
    }
    if (!checkin && data?.form?.end_date) {
      return data.form.end_date
    }
    return false
  }

  const [labelCheckIn, setLabelCheckIn] = useState(() => {
    if (handleDefaultLabel(true)) {
      return handleDefaultLabel(true)
    }
    return `${t("Check In")}`
  });

  const [labelCheckOut, setLabelCheckOut] = useState(() => {
    if (handleDefaultLabel(false)) {
      return handleDefaultLabel(false)
    }
    return `${t("Check Out")}`
  });


  const [checkinDate, setcheckinDate] = useState(() => {
    if (handleDefaultValue(true)) {
      return handleDefaultValue(true)
    }
    return false
  })

  const [checkoutDate, setcheckoutDate] = useState(() => {
    if (handleDefaultValue(false)) {
      return handleDefaultValue(false)
    }

    return false
  })

  const handleSaveCheckIn = (date) => {
    setFocusCheckIn(false);
    setCheckin(true);
    selectedReservationDate(true, checkout)
    setLabelCheckIn(format(date, "d MMM yyyy"));
    setcheckinDate(date);
    mutate({
      ...data,
      form: {
        ...data.form,
        start_date: date
      }
    });
  };

  const handleSaveCheckOut = (date) => {
    setFocusCheckOut(false);
    setCheckout(true);
    selectedReservationDate(checkin, true)
    setLabelCheckOut(format(date, "d MMM yyyy"));

    setcheckoutDate(date);

    mutate({
      ...data,
      form: {
        ...data.form,
        end_date: date
      }
    });
  };


  return (
    <div className="f mdl" style={{ marginBottom: 20 }}>
      <Popover
        content={<AddDayContent dateinput={checkinDate} onSave={handleSaveCheckIn} />}
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
        content={<AddDayContent dateinput={checkoutDate} onSave={handleSaveCheckOut} />}
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


export default AddDates