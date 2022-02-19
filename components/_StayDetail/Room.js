import { useState } from "react";
import { Typography, Button } from "antd";

import FacilityItem from "components/Experience/FacilityItem";
import RoomDetail from "./RoomDetail";

const { Text, Title } = Typography;

export default function Room({ room, facilities }) {
  const [ShowModalRoomDetail, setShowModalRoomDetail] = useState(false);

  function ChangeShowModalRoomDetail() {
    setShowModalRoomDetail(!ShowModalRoomDetail);
  }
  return (
    <div className="room-wrapper f">
      <style jsx>
        {`
          .room-wrapper {
            border-radius: 8px;
            border: solid 1px var(--gray300);
            overflow: hidden;
            margin: 16px 0;
          }
          .content {
            padding: 20px 24px;
            width: 100%;
          }
          .photo {
            width: 215px;
            min-width: 215px;
          }
          .photo img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        `}
      </style>
      <div className="photo">
        <img src={room.photos[0]} />
      </div>
      <div className="content f f-btw">
        <div>
          <Title
            style={{ fontSize: 18, letterSpacing: ".03em", fontWeight: 500 }}
          >
            {room.room_type_name}
          </Title>
          <Text
            style={{
              letterSpacing: ".03em",
              color: "var(--gray600)",
              fontSize: 16
            }}
          >
            {room.room_type_code}
          </Text>
          <div className="f f-w" style={{ margin: "28px 0 10px" }}>
            {facilities.map((facility) => (
              <FacilityItem
                small
                width={130}
                title={facility}
                // img="/images/icon/rss.svg"
              />
            ))}
          </div>
          <a
            style={{
              letterSpacing: ".03em",
              fontWeight: 500,
              fontSize: 16,
              display: "block"
            }}
            onClick={ChangeShowModalRoomDetail}
          >
            View more
          </a>
        </div>
        <div className="f f-c f-btw">
          <div
            className="f f-c"
            style={{ textAlign: "right", marginBottom: 20 }}
          >
            <Title
              style={{
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: ".03em",
                margin: 0
              }}
            >
              Rp. 500.000
            </Title>
            <Text style={{ color: "var(--gray500)" }}>/ room / night</Text>
          </div>
          <div className="f f-c">
            <Button
              type="primary"
              size="small"
              style={{ height: 36, width: 180, marginBottom: 12 }}
            >
              Add to My trip
            </Button>
            <Button size="small" style={{ height: 36, width: 180 }}>
              Book now
            </Button>
          </div>
        </div>
      </div>
      {ShowModalRoomDetail && (
        <RoomDetail onClose={ChangeShowModalRoomDetail} />
      )}
    </div>
  );
}
