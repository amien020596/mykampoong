import "assets/datepicker.less";

import Button from 'antd/lib/button'
import { Calendar } from "react-date-range";
import { DownOutlined } from "@ant-design/icons";
import Popover from 'antd/lib/popover'
import Typography from 'antd/lib/typography';
import { format } from "date-fns";
import { useFloat } from "libs/hooks/float";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const AddDatesContent = ({
  onSave = () => { },
}) => {
  const { t } = useTranslation('common')
  const [date, setDate] = useState(new Date());
  const minDate = new Date();
  const handleSelect = (data) => {
    setDate(data);
  };

  const handleReset = () => {
    setDate(new Date());
  };

  return (
    <div>
      <Calendar minDate={minDate} date={date} onChange={handleSelect} color="#F97316" />
      <div className="f mdl f-rht">
        <Button type="link" onClick={handleReset}>
          {t("Clear")}
        </Button>
        <Button type="primary" onClick={() => onSave(date)}>
          {t("Save")}
        </Button>
      </div>
    </div>
  );
};


export default AddDatesContent