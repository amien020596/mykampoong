import { LeftOutlined, SearchOutlined } from "@ant-design/icons";

import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import Typography from 'antd/lib/typography';
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const { Title, Text } = Typography;

const Search = ({ data = {} }) => {
  const { t } = useTranslation('common')
  const router = useRouter();
  const { category, name } = router.query;
  const [search, setSearch] = useState(name);
  const { vacation } = data;

  return (
    <div style={{ padding: "29px 0 35px" }}>
      <div className="container">
        <Button type="text" style={{ padding: "0", marginBottom: 10 }} onClick={() => router.back()}>
          <LeftOutlined />
          {t("Back")}
        </Button>
        <Title level={1} style={{ fontWeight: 500, letterSpacing: ".03em", margin: "12px 0" }}>
          {vacation?.length || 0} {t("Result in")} <span style={{ textTransform: "capitalize" }}>{category}</span>
        </Title>
        <Text style={{ fontSize: 18, color: "var(--gray500)", letterSpacing: ".03em", display: "block" }}>
          {t("Save more, same experience with our package")}
        </Text>

        <div className="search-wrapper">
          <Input
            placeholder={`${t("Search by location or activity")}`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ maxWidth: 431 }}
          />
          <Button
            className="btn-black"
            style={{
              height: 36,
              padding: "0 10px",
              position: "absolute",
              right: 8,
              top: 8
            }}
          >
            <SearchOutlined />
          </Button>
        </div>
      </div>
    </div>
  );
}


export default Search