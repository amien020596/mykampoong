import { useState } from "react";
import { useRouter } from "next/router";
import { Typography, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;
export default function Hero() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        category: "service",
        name: search
      }
    });
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSearch();
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
          Explore Service
        </Title>
        <Text style={{ fontSize: 18, color: "var(--gray500)", letterSpacing: ".03em", display: "block" }}>
          Completing your experience
        </Text>
        <div className="search-wrapper">
          <Input
            placeholder="Search by location or service"
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
        <img src="/images/dump/stay-hero.png" className="hero-image" />
      </div>
    </div>
  );
}
