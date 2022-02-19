import { Typography } from "antd";
import { useHome } from "libs/hooks/home";
import Scrollbars from "react-custom-scrollbars";
import Card from "../../Card";
const { Title } = Typography;

export default function BestValue() {
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
              {section.title}
            </Title>
            <Scrollbars
              autoHide
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
