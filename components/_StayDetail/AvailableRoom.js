import AuthLoginModal from 'components/Auth/AuthLoginModal';
import Button from 'antd/lib/button'
import Room from "./Room";
import Typography from 'antd/lib/typography';
import { parseDate } from 'libs/helpers/parser/parser';
import { useVacation } from 'libs/hooks/vacation';

const { Title, Text } = Typography;
export default function AvailableRoom({ price, rooms, facilities, vacationId }) {
  const { data, mutate } = useVacation.useContainer();

  const start_date = parseDate(new Date(data.form.start_date));
  const end_date = parseDate(new Date(data.form.end_date));

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
              {`${start_date} - ${end_date}`}
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
      {rooms.map((room, index) => <Room room={room} price={price} key={index} facilities={facilities} vacationId={vacationId} />)}
      <AuthLoginModal />
    </div>
  );
}
