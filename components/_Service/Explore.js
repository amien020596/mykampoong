import Button from 'antd/lib/button'
import CardWrapper from "components/_Stay/CardWrapper";
import Select from 'antd/lib/select'
import Typography from 'antd/lib/typography';
import { useTranslation } from 'next-i18next';

const { Title } = Typography;
const { Option } = Select;

const Explore = ({ data, title = true }) => {
  const { t } = useTranslation('common')
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
          {t("Explore all services")}
        </Title>
      )}
      <div style={{ marginTop: 28 }} className="f mdl">
        <Select
          defaultValue="price"
          className="btn-style"
          style={{ marginRight: 12 }}
        >
          <Option value="price">{t("Price")}</Option>
        </Select>
        <Select defaultValue="popular" className="btn-style">
          <Option value="popular">{t("Popular first")}</Option>
        </Select>
        <div className="separator" />
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          {t("Interpreter & tour guide")}
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          {t("Photography & videography")}
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          {t("Rental vehicle")}
        </Button>
        <Button className="btn-rad" style={{ marginRight: 12 }}>
          {t("Airport pickup")}
        </Button>
      </div>

      <CardWrapper data={data.data} meta={data.pagination} />

    </div>
  );
}



export default Explore