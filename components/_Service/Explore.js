import { Typography, Button, Select } from "antd";
import CardWrapper from "components/_Stay/CardWrapper";

const { Title } = Typography;
const { Option } = Select;

export default function Explore({ data, title = true }) {
  const service = data?.data || [];
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

      {title && (
        <Title level={3} style={{ fontWeight: 500, letterSpacing: ".03em" }}>
          Explore all services
        </Title>
      )}
      <div style={{ marginTop: 28 }} className="f mdl">
        <Select
          defaultValue="price"
          className="btn-style"
          style={{ marginRight: 12 }}
        >
          <Option value="price">Price</Option>
        </Select>
        <Select defaultValue="popular" className="btn-style">
          <Option value="popular">Popular first</Option>
        </Select>
        <div className="separator" />
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          Interpreter & tour guide
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          Photography & videography
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          Rental vehicle
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          Airport pickup
        </Button>
      </div>

      <CardWrapper data={data.data} meta={data.pagination} />

    </div>
  );
}
