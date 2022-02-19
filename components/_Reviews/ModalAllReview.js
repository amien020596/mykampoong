import { useRef, useState } from "react";

import Empty from 'antd/lib/empty'
import ListReview from "components/_Reviews/ListReview";
import Modal from "antd/lib/modal/Modal";
import Review from "components/_StayDetail/Review";
import Scrollbars from "react-custom-scrollbars";
import Select from 'antd/lib/select'
import { StarFilled } from "@ant-design/icons";
import Typography from 'antd/lib/typography';
import { useTranslation } from "next-i18next";
import { useVacation } from 'libs/hooks/vacation';

const { Option } = Select
const { Title, Text } = Typography;
const ModalAllReview = ({
  dataReview = [],
  onClose = () => { },
  visible = false,
}) => {
  const { t } = useTranslation('common')
  const { data } = useVacation.useContainer()
  const { vacation: item } = data

  let review = dataReview

  const [dataReviews, setDataReview] = useState(() => {
    if (review == null || review == []) {
      return [];
    } else {
      return review;
    }
  })

  function onClose() {
    onClose();
  }

  function onChangeFilter(value) {
    if (value !== "all") {
      const datafilter = review.filter(f => f.rating.toString() === value.toString())
      setDataReview(datafilter)
    } else {
      setDataReview(review)
    }
  }
  let margin = dataReviews.length > 0 ? { margin: "0 50px", marginTop: 20, width: "calc(100%-50px)", height: "100%" } : { width: "calc(100%-50px)", height: "100%" };
  return (
    <Modal
      visible={visible}
      title={
        <div className="review-filter">
          <div style={{ position: "absolute", top: 22 }}>
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
          </div>
          <Select defaultValue='all' className='btn-style filter-position' onChange={onChangeFilter} style={{ marginLeft: 12, position: "absolute", top: 16, left: 200 }} >
            <Option value='all'>{t("All Ratings")}</Option>
            <Option value='5'>5 Star</Option>
            <Option value='4'>4 Star</Option>
            <Option value='3'>3 Star</Option>
            <Option value='2'>2 Star</Option>
            <Option value='1'>1 Star</Option>
            <Option value='0'>0 Star</Option>
          </Select>
        </div>
      }
      onCancel={onClose}
      footer={false}
      width="1166px"
    >
      <style jsx>
        {`
          .review-filter {
            height:40px;
          }
        `}
      </style>
      <Scrollbars style={{ height: 530, width: "100%" }}>
        <div
          style={margin}
        >
          {dataReviews.length > 0 && dataReviews.map((dataListReview, index) => <ListReview key={index} data={dataListReview} />)}
          {dataReviews.length == 0 && <div style={{
            display: "flex", justifyContent: "center", position: "absolute", top: "50%", left: "50%",
            msTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)"
          }}><Empty description={`${("No review found")}`} /></div>}
        </div>
      </Scrollbars>
    </Modal>
  )
}


export default ModalAllReview