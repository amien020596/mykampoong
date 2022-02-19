import { Typography } from 'antd'
const { Text } = Typography

export default function TailorItem({ img, title, description }) {
  return (
    <div className='f f-c f-ctr mdl item'>
      <style jsx>
        {`
          .item {
            width: calc(100% / 4);
            position: relative;
          }
          .item::after {
            content: '';
            position: absolute;
            height: 3px;
            width: 100px;
            background: #000;
            left: 80%;
            border-radius: 2px;
          }
          .item:last-child::after {
            display: none;
          }
        `}
      </style>
      <img src={img} /> 
      <Text style={{ fontWeight: 500, color: '#71717A', margin: '10px 0 5px' }}>{description}</Text>
      <Text style={{ fontSize: 16, color: '#27272A', fontWeight: 500 }}>{title}</Text>
    </div>
  )
}