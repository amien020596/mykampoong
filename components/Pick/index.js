import Card from "components/Card";
import Scrollbars from "react-custom-scrollbars";
import Typography from 'antd/lib/typography';
import { useTranslation } from 'next-i18next';

const { Title } = Typography;
const Pick = ({ data }) => {
  const { t } = useTranslation('common')
  return (
    <div className="container" style={{ paddingBottom: 20 }}>
      <Title level={3} style={{ letterSpacing: ".03em", fontWeight: 500 }}>
        {data?.title || "Gianyar, Bali"}
        {data?.subtitle && (
          <span
            style={{
              fontSize: 16,
              color: "var(--gray600)",
              fontWeight: 400,
              margin: "0 12px"
            }}
          >
            {data?.subtitle}
          </span>
        )}
        <a style={{ marginLeft: 8, fontSize: 16 }}>{t("View more")}</a>
      </Title>
      <Scrollbars style={{ height: 530, width: "100%" }}>
        <div
          className="f"
          style={{ width: "calc(100% + 20px)", marginTop: 20 }}
        >
          {data.services.map((i) => (
            <Card light stretch key={i.id} data={i} />
          ))}
        </div>
      </Scrollbars>
    </div>
  );
}




export default Pick
