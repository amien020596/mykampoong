import Button from 'antd/lib/button'
import Input from 'antd/lib/input'
import { SearchOutlined } from "@ant-design/icons";
import Typography from 'antd/lib/typography';
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography;

const Hero = () => {
  const { t } = useTranslation('common')

  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        category: "package",
        name: search
      }
    });
  };

  const handleEnter = (e) => {
    // if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="container f mdl f-btw" style={{ padding: "30px 0" }}>
      <style jsx>
        {`
          .hero-image {
            height: 261px;
            width: 655px;
            object-fit: cover;
            border-radius: 8px;
            overflow: hidden;
          }
        `}
      </style>
      <div>
        <Title level={1} style={{ fontWeight: 500, letterSpacing: ".03em", margin: "12px 0" }}>
          {t("Explore Package")}
        </Title>
        <Text style={{ fontSize: 18, color: "var(--gray500)", letterSpacing: ".03em", display: "block" }}>
          {t("Save more, same experience with our package")}
        </Text>
        <div className="search-wrapper">
          <Input
            placeholder={t("Search by location or activity")}
            style={{ maxWidth: 431 }}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleEnter}
            value={search}
          />
          <Button
            className="btn-black"
            onClick={handleSearch}
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
      <div>
        <img src="/images/dump/package-hero.jpg" className="hero-image" />
      </div>
    </div>
  );
}



export default Hero