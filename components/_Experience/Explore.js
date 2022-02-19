import Button from 'antd/lib/button'
import CardWrapper from "components/_Stay/CardWrapper";
import Select from 'antd/lib/select'
import Typography from 'antd/lib/typography';
import { useTranslation } from 'next-i18next';

;

const { Title } = Typography;
const { Option } = Select;
const Explore = ({ data
}) => {
  const { t } = useTranslation('common')
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
        {t("Explore all experience")}
      </Title>
      <div style={{ marginTop: 28 }} className="f mdl">
        <Select
          defaultValue="time"
          className="btn-style"
          style={{ marginRight: 12 }}
        >
          <Option value="time">{t("Time of day")}</Option>
        </Select>
        <Select
          defaultValue="price"
          className="btn-style"
          style={{ marginRight: 12 }}
        >
          <Option value="price">{t("Price")}</Option>
        </Select>
        <Select
          defaultValue="guest"
          className="btn-style"
          style={{ marginRight: 12 }}
        >
          <Option value="guest">{t("Guest")}</Option>
        </Select>
        <Select defaultValue="popular" className="btn-style">
          <Option value="popular">{t("Popular first")}</Option>
        </Select>
        <div className="separator" />
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          {t("Nature & outdoor")}
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          {t("Wellness")}
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          {t("Art & culture")}
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          {t("Sightseeing")}
        </Button>
      </div>

      <CardWrapper data={data.data} meta={data.pagination} />

    </div>
  );
}


export default Explore