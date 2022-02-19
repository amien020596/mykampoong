import { Empty } from "antd";
import ListReview from "./ListReview";

function Reviews(props) {
  const { data: reviewsData } = props;
  const review = [];

  if (reviewsData == null || reviewsData == []) {
    review.push(<Empty description="No review found" />)
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
export default Reviews;