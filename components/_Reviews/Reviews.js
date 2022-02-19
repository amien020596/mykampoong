import Empty from "antd/lib/empty";
import ListReview from "./ListReview";
import { useTranslation } from "next-i18next";

const Reviews = ({
  data,
}) => {
  const { t } = useTranslation('common')
  const reviewsData = data;
  const review = [];

  if (reviewsData == null || reviewsData == []) {
    review.push(<Empty key={1} description={t("No review found")} />)
  } else {
    if (reviewsData.length > 5) {
      let slicedDataReview = reviewsData.slice(0, 4);
      slicedDataReview.map((dataListReview, index) => {
        review.push(<ListReview key={index} data={dataListReview} />)
      })
    }

    if (reviewsData.length < 5) {
      reviewsData.map((dataListReview, index) => {
        review.push(<ListReview key={index} data={dataListReview} />)
      })
    }
  }

  return review;
}



export default Reviews