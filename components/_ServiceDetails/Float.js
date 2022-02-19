import AddDates from "./AddDates";
import AddHour from "./AddHour";
import { useVacation } from "libs/hooks/vacation";
import { useFloat } from "libs/hooks/float";
import { parseNumber } from "libs/parser";
import { format } from "date-fns";
import { Typography, Button, message } from "antd";
import { bookingAddToCart } from "modules/booking/post-booking";
import {
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined
} from "@ant-design/icons";
import ModalShare from "components/_StayDetail/ModalShare";
import { useState } from "react";

const { Title, Text } = Typography;

export default function Float() {
  const { data } = useVacation.useContainer();
  const { data: floatData } = useFloat.useContainer();
  const { vacation: item } = data;

  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState({});

  function handleClick() {
    setModalShow(true);
  }

  function handleCloseModal() {
    setModalShow(false);
  }

  async function handleAddToTrip() {
    const { scheduleId, date } = floatData;

    if (scheduleId && date) {
      setLoading({ ...loading, addToTrip: true });
      try {
        const body = {
          travel_object_id: data.vacation.id,
          schedule_id: scheduleId,
          start_date: format(date, "yyyy-MM-dd kk:mm:ss"),
          end_date: format(date, "yyyy-MM-dd kk:mm:ss")
        };

        const res = await bookingAddToCart(body);
        const parsed = await res.json();

        if (parsed.success) {
          message.success(parsed.message);
        } else {
          message.error(parsed.message);
        }

        setLoading({ ...loading, addToTrip: false });
      } catch (error) {
        console.log(error);
      }
    } else {
      message.error(
        "Please insert the schedule and date first before adding to My Trip"
      );
    }
  }

  return (
    <div className="wrapper">
      <style jsx>
        {`
          .wrapper {
            border-radius: 8px;
            border: solid 1px var(--gray300);
            position: sticky;
            top: 105px;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06),
              0px 1px 3px rgba(0, 0, 0, 0.1);
          }
          .p {
            padding: 28px 24px 24px;
          }
          .action a {
            color: var(--gray800);
            font-weight: 500;
            font-size: 14px;
          }
          .action a:hover {
            color: var(--primary-color);
          }
        `}
      </style>
      <style jsx global>
        {`
          .action .anticon {
            font-size: 20px;
            margin-right: 8px;
          }
        `}
      </style>
      <div className="p">
        <Text>Start from</Text>
        <Title level={3} style={{ letterSpacing: ".02em", marginTop: 0 }}>
          Rp. {parseNumber(item.vacation_price)}{" "}
          <span style={{ fontSize: 18, fontWeight: 400 }}>/ hour</span>
        </Title>

        <div style={{ margin: "20px 0" }} className="f mdl">
          <AddHour />
          <AddDates />
        </div>
        <Button
          block
          type="primary"
          size="large"
          style={{ marginBottom: 12 }}
          onClick={handleAddToTrip}
          loading={loading.addToTrip}
        >
          Add to My Trip
        </Button>
        <Button block type="primary" size="large" ghost>
          Book now
        </Button>
      </div>
      <div className="separator" />
      <div className="f mdl p f-btw action" style={{ paddingTop: 16 }}>
        <a>
          <MessageOutlined />
          Message
        </a>
        <a onClick={handleClick}>
          <ShareAltOutlined />
          Share
        </a>
        <a>
          <HeartOutlined />
          Save
        </a>
      </div>
      <ModalShare visible={modalShow} data={data} onClose={handleCloseModal} />
    </div>
  );
}
