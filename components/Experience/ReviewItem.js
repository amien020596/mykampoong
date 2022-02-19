import { Typography, Avatar } from 'antd'
import { parseDate } from 'libs/parser'
const { Text, Paragraph } = Typography

export default function ReviewItem({ style, data = {} }) {
  return (
    <div className='f review-item' style={style}>
      <style jsx>
        {`
          .comment {
            padding: 12px 16px;
            margin-top: 10px;
            border-radius: 0 8px 8px 8px;
            border: solid 1px var(--gray300);
            max-width: 400px;
          }
          .review-item {
            margin-right: 40px;
            min-width: 460px;
          }
        `}
      </style>
      <Avatar src='/images/dump/ava.jpg' size={44} style={{ minWidth: 44 }} />
      <div style={{ marginLeft: 15 }}>
        <Text style={{ fontSize: 16, fontWeight: 500, color: 'var(--gray800)', display: 'block' }}>
          {data.tourist}
          <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--gray600)', marginLeft: 10, letterSpacing: '.03em' }}>
            · &nbsp; {data.date && parseDate(data.date)}
          </span>
        </Text>

        <div className='comment'>
          <Paragraph
            style={{ letterSpacing: '.03em' }}
            ellipsis={{
              rows: 3,
              expandable: true,
              symbol: 'Read More'
            }}>
            {data.review_text}
          </Paragraph>
          {/* <a style={{ display: 'block', marginTop: 5, fontWeight: 500, letterSpacing: '.03em' }}>Read More</a> */}
        </div>

      </div>
    </div>
  )
}