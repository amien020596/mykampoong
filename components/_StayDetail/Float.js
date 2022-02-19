import GuestRoom from "./GuestRoom";
import AddDay from "./AddDay";
import ModalShare from "./ModalShare";

import { Typography, Button, message } from "antd";
import {
  HeartOutlined,
  MessageOutlined,
  ShareAltOutlined
} from "@ant-design/icons";
import { useVacation } from "libs/hooks/vacation";
import { useFloat } from "libs/hooks/float";
import { parseNumber } from "libs/parser";
import { format } from "date-fns";
import { useState } from "react";
import { stayCheckAvailability } from "modules/stay/post-stay-check-availability";

const { Title, Text } = Typography;

export default function Float() {
  const { data } = useVacation.useContainer();
  const { data: floatData } = useFloat.useContainer();
  const { vacation: item } = data;

  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setModalShow(true);
  }

  function handleCloseModal() {
    setModalShow(false);
  }

  async function handleCheckAvailability() {
    const { start_date, end_date } = floatData;

    if (start_date && end_date) {
      const body = {
        start_date: format(start_date, "yyyy-MM-dd"),
        end_date: format(end_date, "yyyy-MM-dd")
      };
      setLoading(true);
      try {
        const res = await stayCheckAvailability(data.vacation.slug, body);
        const parsed = await res.json();

        if (parsed.success) {
          console.log(parsed);
        } else {
          message.error(parsed.message);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      message.error("Please select check in and check out date first!");
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
            z-index: 10;
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
          Rp. {parseNumber(item.vacation_price * 1)}{" "}
          <span style={{ fontSize: 18, fontWeight: 400 }}>/ room / night</span>
        </Title>

        <div style={{ margin: "20px 0" }}>
          <AddDay />
          <div>
            <GuestRoom />
          </div>
        </div>
        <Button
          block
          type="primary"
          size="large"
          onClick={handleCheckAvailability}
          loading={loading}
        >
          Check room availability
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
      <ModalShare
        visible={modalShow}
        data={data}
        email={data?.vacation?.name}
        onClose={handleCloseModal}
      />
    </div>
  );
}
