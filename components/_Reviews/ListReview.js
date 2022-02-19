import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";
import { date } from "libs/helpers/date";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ListReview(props) {
  const [ellipsis, setEllipsis] = useState(true)
  const { t } = useTranslation('common')
  const { data = {} } = props;
  function openReadMore() {
    setEllipsis(false);
  }

  return (
    <div>
      <style jsx>
        {`
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 8px 0 12px 0;
          }
          .image-review-user{
            width:44px;
            height:44px;
            border-radius:50%;
            margin-right:12px;
          }
          .review{
            display:flex;
            margin-bottom:12px;
          }
          .review-user{
            display:flex;
            flex-direction:column;
          }
          .readmore{
            font-size:14px;
            margin-bottom:0;
            color:#F97316;
          }
          .readmore:hover{
            cursor:pointer
          }
        `}
      </style>
      <div className="review">
        <div>
          <img className="image-review-user" alt="user pic" src={"/images/icon/profile-default.png"} />
        </div>
        <div className="review-user">
          <Text strong>{data ? data.tourist : 'No user found'}</Text>
          <Text>{data ? data.rating : '0'}/5 {data ? date(data.date) : 'No time found'}</Text>
        </div>
      </div>
      <Paragraph ellipsis={ellipsis ? { rows: 3, expandable: false, symbol: "" } : false}>
        {data ? data.review_text : 'No review found'}
      </Paragraph>
      {ellipsis && <p className="readmore" onClick={openReadMore}>{t("Read More")}</p>}
      <div className='separator' />
    </div>

  )
}