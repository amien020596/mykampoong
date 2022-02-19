import { EnvironmentOutlined, StarFilled } from "@ant-design/icons";
import { parseDate, parseName } from "libs/helpers/parser/parser";

import Avatar from 'antd/lib/avatar'
import Breadcrumb from "./Breadcrumb";
import Button from 'antd/lib/button'
import Float from "./Float";
import { useFloat as FloatContext } from "libs/hooks/float";
import Gallery from "components/Gallery";
import Location from "components/_StayDetail/Location";
import ModalAllReview from "components/_Reviews/ModalAllReview";
import Reviews from "components/_Reviews/Reviews";
import Tag from "components/Tag";
import Typography from 'antd/lib/typography';
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useVacation } from "libs/hooks/vacation";

const { Text, Title } = Typography;
const MINIMUM_REVIEW_SHOW_BUTTON = 5;



const ServiceDetails = () => {
  const { t } = useTranslation('common')
  const [visibleModalReview, setVisibleModalReview] = useState(false);
  const { data } = useVacation.useContainer();
  const { vacation: item, review: reviewsData } = data;

  const review = [];
  let lengthReview = 0;

  if (reviewsData == null || reviewsData == []) {
    lengthReview = 0;
  } else {
    lengthReview = reviewsData.length;
  }

  function toggleModalAllReview() {
    setVisibleModalReview(!visibleModalReview);
  }

  return (
    <div className="container">
      <style jsx>
        {`
          .left {
            max-width: 683px;
            width: 100%;
            margin-bottom: 70px;
          }
          .right {
            width: 100%;
            margin-left: 100px;
            max-width: calc(100% - 683px - 100px);
          }
          .info-wrapper {
            margin: 40px 0;
          }
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 30px 0;
          }
          .info-item {
            min-width: calc(100% / 3);
          }
        `}
      </style>
      <div className="f mdl f-btw" style={{ padding: "28px 0" }}>
        <Breadcrumb />
      </div>

      <div className="f" style={{ marginBottom: 50 }}>
        <div className="left">
          <div>
            <Gallery images={item.vacation_images} />
            <Title level={2} style={{ fontWeight: 500, marginTop: 30 }}>
              {item.name}
            </Title>
            <div style={{ marginBottom: 42 }}>
              <Tag type={item.service.toLowerCase()}>{item.service}</Tag>
              <Text style={{ margin: "0 10px 0 5px" }}>·</Text>
              <StarFilled style={{ color: "var(--orange500)" }} />
              &nbsp;
              <Text>
                {Number(item.rating_review).toFixed(1)} ({item.count_review})
              </Text>
              <Text style={{ margin: "0 10px 0 5px" }}>·</Text>
              <EnvironmentOutlined style={{ marginRight: 5 }} />
              <Text>{item.location}</Text>
            </div>
            <div className="info-wrapper f mdl">
              <div className="info-item">
                <img src="/images/icon/time.svg" style={{ marginRight: 20 }} />
                <Text style={{ fontWeight: 500 }}>{t("Up to hour hours", { hour: 4 })}</Text>
              </div>
              <div className="info-item">
                <img
                  src="/images/icon/chat-alt.svg"
                  style={{ marginRight: 20 }}
                />
                <Text style={{ fontWeight: 500 }}>English, Bahasa</Text>
              </div>
            </div>
            <Title
              level={4}
              style={{ fontWeight: 500, letterSpacing: ".03em" }}
            >
              {t("Description")}
            </Title>
            <Text style={{ fontSize: 16, lineHeight: "22.67px" }}>
              {item.description}
              {/* <a style={{ marginTop: 10, fontWeight: 500, display: "block" }}>
                Read More
              </a> */}
            </Text>
            <div className="separator" />
            <div className="f f-btw" style={{ marginTop: 30 }}>
              <div>
                <Title
                  level={4}
                  style={{
                    letterSpacing: ".03em",
                    fontSize: 18,
                    fontWeight: 500
                  }}
                >
                  {t("Hosted by")} {item.tourist_actors.owner_name}
                </Title>
                <Text style={{ color: "var(--gray500)" }}>
                  {t("Joined since")}{" "}
                  {parseDate(item.tourist_actors.joined_date, {
                    year: "numeric",
                    month: "long"
                  })}
                </Text>
                <div style={{ marginTop: 24 }}>
                  <Button>{t("Send message")}</Button>
                </div>
              </div>
              <div>
                <Avatar size={58}>
                  {parseName(item.tourist_actors.owner_name)}
                </Avatar>
              </div>
            </div>
            <div className="separator" />
            <Location data={item} />
            <div className="separator" />
          </div>
        </div>
        <div className="right">
          <FloatContext.Provider>
            <Float />
          </FloatContext.Provider>
        </div>
      </div>
      <Title
        level={4}
        style={{
          letterSpacing: ".03em",
          fontSize: 18,
          fontWeight: 500,
          color: "var(--gray800)"
        }}
      >
        {item.count_review || 0} {t("Reviews")}
        <span style={{ fontSize: 14, color: "var(--gray600)", marginLeft: 12 }}>
          <StarFilled
            style={{ color: "var(--orange500)", fontSize: 20, marginRight: 6 }}
          />
          {Number(item.rating_review || 0).toFixed(1)}
        </span>
      </Title>
      <Reviews data={reviewsData} />
      {lengthReview > MINIMUM_REVIEW_SHOW_BUTTON && (
        <Button onClick={toggleModalAllReview}>
          {t("View all length reviews", { length: lengthReview })}
        </Button>
      )}
      <ModalAllReview
        dataReview={reviewsData}
        visible={visibleModalReview}
        onClose={toggleModalAllReview}
      />
    </div>
  );
}


export default ServiceDetails