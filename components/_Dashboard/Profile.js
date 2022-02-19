import { Avatar, Typography, Button, Tag } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  DownOutlined
} from "@ant-design/icons";
import ContentWrapper from "./ContentWrapper";
const { Title, Text } = Typography;

export default function Profile() {
  return (
    <ContentWrapper style={{ width: "calc(100% - 425px)" }}>
      <div className="f">
        <Avatar
          size={120}
          src="/images/dump/ava.jpg"
          style={{ minWidth: 120 }}
        />
        <div style={{ marginLeft: 32 }}>
          <Title level={2} style={{ fontSize: 24, fontWeight: 400 }}>
            Maudy Ayunda
          </Title>
          <div className="f mdl">
            <div className="availability mdl">
              <span className="dot" />
              <Text style={{ fontSize: 16, fontWeight: 500, marginRight: 8 }}>
                Active
              </Text>
              <DownOutlined />
            </div>
            <Text style={{ marginLeft: 16 }}>
              This mean you’ll always accept incoming order
            </Text>
          </div>
          <div style={{ margin: "12px 0" }}>
            <Tag>Bahasa</Tag>
            <Tag>English</Tag>
          </div>
          <div style={{ margin: "20px 0" }}>
            <div style={{ margin: "8px 0" }}>
              <EnvironmentOutlined style={{ marginRight: 8 }} />
              <Text className="text">
                Serongga, Kec. Gianyar, Kabupaten Gianyar, Bali
              </Text>
            </div>
            <div style={{ margin: "8px 0" }}>
              <MailOutlined style={{ marginRight: 8 }} />
              <Text className="text">maudyayunda@gmail.com</Text>
            </div>
            <div style={{ margin: "8px 0" }}>
              <PhoneOutlined style={{ marginRight: 8 }} />
              <Text className="text">08214567892</Text>
            </div>
          </div>
          <div>
            <Button style={{ marginRight: 12 }}>Edit profile</Button>
            <Button>Set availability</Button>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}
