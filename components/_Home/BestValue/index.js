import Card from "../../Card";
import Scrollbars from "react-custom-scrollbars";
import Typography from 'antd/lib/typography';
import { useHome } from "libs/hooks/home";
import { useTranslation } from "next-i18next";

const { Title } = Typography;

function BestValue() {
  const { t } = useTranslation("common")
  const { data } = useHome.useContainer();
  const section = data.sectionThree;
  return (
    <>
      {section.package.length > 0 && (
        <div className="wrapper">
          <style jsx>
            {`
              .wrapper {
                padding: 92px 0;
                background: #27272a;
              }
            `}
          </style>
          <div className="container">
            <Title style={{ textAlign: "center", color: "#fff" }}>
              {t(`${section.title}`)}
            </Title>
            <Scrollbars
              autoHide
              universal
              style={{ width: "100%", height: 430, marginTop: 70 }}
            >
              <div className="f">
                {section.package.map((i) => (
                  <Card key={i.id} data={i} />
                ))}
              </div>
            </Scrollbars>
          </div>
        </div>
      )}
    </>
  );
}

export default BestValue