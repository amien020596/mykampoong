import Typography from 'antd/lib/typography'

const { Text } = Typography

export default function Item({ img, title }) {
  return (
    <div className='item'>
      <style jsx>
        {`
          .item {
            margin: 0 10px;
            cursor: pointer;
          }
          .image {
            height: 266px;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 10px;
          }
        `}
      </style>
      <div className='image'>
        <img src={img} />
      </div>
      <Text style={{ fontSize: 20, fontWeight: 500, color: 'var(--gray800)' }}>
        {title}
      </Text>
    </div>
  )
}