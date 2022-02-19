import { Typography, Button } from "antd";
import Room from "./Room";
const { Title, Text } = Typography;
export default function AvailableRoom({ rooms, facilities }) {
  return (
    <div className="container">
      <style jsx>
        {`
          .tag-like {
            padding: 2px 10px;
            border-radius: 8px;
            background: var(--orange100);
            display: inline-block;
            margin-left: 12px;
          }
        `}
      </style>
      <div className="f f-btw mdl" style={{ marginBottom: 28 }}>
        <Title level={3} style={{ letterSpacing: ".03em", fontWeight: 500 }}>
          Available Room
          <div className="tag-like">
            <Text style={{ fontSize: 16 }}>
              {/* Apr 1 - Apr 3 · 2 Guest / 1 Room */}
              Tomorrow
            </Text>
          </div>
        </Title>
        <Button
          className="btn-black"
          style={{ padding: "0 40px", borderRadius: 8, zIndex: 1 }}
        >
          Change
        </Button>
      </div>
      {rooms.map((room, index) => (
        <Room room={room} key={index} facilities={facilities} />
      ))}
    </div>
  );
}
