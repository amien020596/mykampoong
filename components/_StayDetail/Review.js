import ReviewItem from "components/Experience/ReviewItem";
import { StarFilled } from "@ant-design/icons";
import Typography from 'antd/lib/typography';
import { useTranslation } from "next-i18next";

const { Title, Text } = Typography;
const Review = ({
  reviews = [],
  count,
  rating,
}) => {
  const { t } = useTranslation('common')
  return (
    <div>
      <style jsx>
        {`
          .review-wrapper {
            margin-top: 33px;
            margin-bottom: 10px;
            margin-left: 0;
            margin-right: 0;
          }
        `}
      </style>
      <Title
        level={4}
        style={{
          letterSpacing: ".03em",
          fontSize: 18,
          fontWeight: 500,
          color: "var(--gray800)"
        }}
      >
        {count || 0} {t("Reviews")}
        <span style={{ fontSize: 14, color: "var(--gray600)", marginLeft: 12 }}>
          <StarFilled
            style={{ color: "var(--orange500)", fontSize: 20, marginRight: 6 }}
          />
          {Number(rating || 0).toFixed(1)}
        </span>
      </Title>
      <div className="f f-w review-wrapper">
        {reviews?.length === 0 && (
          <div className="f f-ctr mdl w-full">
            <Text>{t("No review item")}</Text>
          </div>
        )}
        {reviews !== null &&
          reviews.map((i, index) => (
            <ReviewItem style={{ marginBottom: 36 }} key={index} data={i} />
          ))}
      </div>
    </div>
  );
}


export default Review