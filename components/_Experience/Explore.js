import { Typography, Button, Select } from "antd";
import CardWrapper from "components/_Stay/CardWrapper";
const { Title } = Typography;
const { Option } = Select;
export default function Explore({ data }) {
  return (
    <div className="container" style={{ marginBottom: 100 }}>
      <style jsx>
        {`
          .separator {
            height: 25px;
            width: 1px;
            background: var(--gray300);
            display: inline-block;
            margin: 0 28px;
          }
        `}
      </style>
      <Title level={3} style={{ fontWeight: 500, letterSpacing: ".03em" }}>
        Explore all experience
      </Title>
      <div style={{ marginTop: 28 }} className="f mdl">
        <Select
          defaultValue="time"
          className="btn-style"
          style={{ marginRight: 12 }}
        >
          <Option value="time">Time of day</Option>
        </Select>
        <Select
          defaultValue="price"
          className="btn-style"
          style={{ marginRight: 12 }}
        >
          <Option value="price">Price</Option>
        </Select>
        <Select
          defaultValue="guest"
          className="btn-style"
          style={{ marginRight: 12 }}
        >
          <Option value="guest">Guest</Option>
        </Select>
        <Select defaultValue="popular" className="btn-style">
          <Option value="popular">Popular first</Option>
        </Select>
        <div className="separator" />
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          Nature & outdoor
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          Wellness
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          Art & culture
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          Sightseeing
        </Button>
      </div>

      <CardWrapper data={data.data} meta={data.pagination} />

    </div>
  );
}
