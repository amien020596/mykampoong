import { Select, Typography, Empty } from "antd";
import Modal from "antd/lib/modal/Modal";
import Review from "components/_StayDetail/Review";
import { useRef, useState } from "react";
import { useVacation } from 'libs/hooks/vacation';
import { StarFilled } from "@ant-design/icons";
import ListReview from "components/_Reviews/ListReview";
import Scrollbars from "react-custom-scrollbars";
const { Option } = Select
const { Title, Text } = Typography;
const review = [
  {
    id: 1,
    avatar: "/images/icon/profile-default.png",
    date: "12 desember 2020",
    rating: "4",
    review: "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }, {
    id: 1,
    avatar: "/images/icon/profile-default.png",
    date: "12 desember 2020",
    rating: "3",
    review: "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 1,
    avatar: "/images/icon/profile-default.png",
    date: "12 desember 2020",
    rating: "5",
    review: "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 1,
    avatar: "/images/icon/profile-default.png",
    date: "12 desember 2020",
    rating: "2",
    review: "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id: 1,
    avatar: "/images/icon/profile-default.png",
    date: "12 desember 2020",
    rating: "1",
    review: "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
]

export default function ModalAllReview(props) {
  const { data } = useVacation.useContainer()
  const { vacation: item } = data

  let review = props.dataReview

  const [dataReview, setDataReview] = useState(() => {
    if (review == null || review == []) {
      return [];
    } else {
      return review;
    }
  })

  function onClose() {
    props.onClose();
  }

  function onChangeFilter(value) {
    if (value !== "all") {
      const datafilter = review.filter(f => f.rating.toString() === value.toString())
      setDataReview(datafilter)
    } else {
      setDataReview(review)
    }
  }
  let margin = dataReview.length > 0 ? { margin: "0 50px", marginTop: 20, width: "calc(100%-50px)", height: "100%" } : { width: "calc(100%-50px)", height: "100%" };
  return (
    <Modal
      visible={props.visible}
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
              {item.count_review || 0} Reviews
              <span style={{ fontSize: 14, color: "var(--gray600)", marginLeft: 12 }}>
                <StarFilled
                  style={{ color: "var(--orange500)", fontSize: 20, marginRight: 6 }}
                />
                {Number(item.rating_review || 0).toFixed(1)}
              </span>
            </Title>
          </div>
          <Select defaultValue='all' className='btn-style filter-position' onChange={onChangeFilter} style={{ marginLeft: 12, position: "absolute", top: 16, left: 200 }} >
            <Option value='all'>All Ratings</Option>
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
          {dataReview.length > 0 && dataReview.map((dataListReview, index) => <ListReview key={index} data={dataListReview} />)}
          {dataReview.length == 0 && <div style={{
            display: "flex", justifyContent: "center", position: "absolute", top: "50%", left: "50%",
            msTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)"
          }}><Empty description={"No review found"} /></div>}
        </div>
      </Scrollbars>
    </Modal>
  )
}