import { Button } from 'antd/lib/radio'
import { DeleteFilled } from '@ant-design/icons'
import Link from 'next/link'
import Paragraph from 'antd/lib/typography/Paragraph'
import Typography from 'antd/lib/typography'

const { Text } = Typography

export default function CardWishlist({
  light,
  square,
  stretch,
  data = {},
  handleDelete = () => { }
}) {

  const images = [
    'https://app.mykampoong.com/storage/images/1519727530.jpg',
    'https://app.mykampoong.com/storage/images/1519727530.jpg',
    'https://app.mykampoong.com/storage/images/1519727530.jpg'
  ]

  let service = data.service?.toLowerCase()
  service = service === 'staycation' ? 'stay' : service

  let styleCard = {
    container: "grid-container-3",
    grid: "grid-3"
  }

  if (images.length === 2) {
    styleCard = {
      container: "grid-container-2",
      grid: "grid-2"
    }
  }
  if (images.length === 1) {
    styleCard = {
      container: "grid-container-1",
      grid: "grid-1"
    }
  }
  const handleDeleteWishlist = (e) => {
    e.preventDefault();
    handleDelete(data.slug)
  }
  return (
    <Link href={`/${service}/${data.slug}`}>
      <div className='card'>
        <style jsx>
          {`
        .card {
          width: ${square ? '276px' : stretch ? '260px' : '352px'};
          min-width: ${square ? '276px' : stretch ? '260px' : '352px'};
          margin-right: 20px;
          cursor: pointer;
          border:1px solid #cccccc;
          border-radius:10px;
          margin-bottom: 20px;
        }
        .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: row;
          padding: 8px 16px; 
          border-radius: 0 0 8px 8px;
          background: ${light ? 'transparent' : 'var(--gray700)'};
          border: ${light && !square && !stretch && 'solid 1px var(--gray300)'};
          border-top: solid 1px var(--gray300);
        }
        .wishlisttrash{
          padding:8px;
        }
        .wishlisttrash:hover{
          background-color:#61676838;
          border-radius:5px;
        }
        
        .image {
          height: ${square || stretch ? '187px' : '222px'};
          overflow: hidden;
          position: relative;
        }
        .image img {
          height: 100%;
          width: 100%;
          padding:5px;
          object-fit: cover;
        }
        .tag-wrapper {
          position: absolute;
          top: 12px;
          left: 12px;
        }
        .row-wishlist{
          display:flex;
          flex-wrap: wrap;
        }
        .column-wishlist{
          flex: 50%;
          max-width: 50%;
        }
        .column-wishlist img{
          width: 100%;
        }
        
        .grid-container-3{
          display:grid;
          grid-template-columns : auto auto;
          grid-gap:0px;
        }
        
        .grid-container-3 .grid-3:first-child{
          grid-row: span 2;
        }
        
        .grid-container-2{
          display:grid;
          grid-template-columns : auto auto;
          grid-gap:0px;
        }

        .grid-2{
          height:185px;
        }

        .grid-container-1{
          display:grid;
          grid-template-columns : 1fr;
          grid-gap:0px;
        }
        
        .grid-1{
          height:185px;
        }
        
      `}
        </style>
        <div className='image'>
          {/* <div className='tag-wrapper'>
            <Tag type={service}>{data.service === 'Staycation' ? 'STAY' : data.service?.toUpperCase()}</Tag>
          </div> */}
          <div className={styleCard.container}>
            {images.map((f, index) => {
              return (
                <div key={index} className={styleCard.grid}>
                  <img src={f} />
                </div>
              )
            })}
          </div>
        </div>
        <div className='content'>
          <div className="f f-c" >
            <Text strong>{data.name}</Text>
            <Paragraph style={{ marginBottom: 0 }}>{data.name_wishlist}</Paragraph>
          </div>
          <div className="wishlisttrash" onClick={(e) => handleDeleteWishlist(e)}>
            <DeleteFilled className="wishlisttrashicon" />
          </div>
        </div>
      </div>
    </Link>
  )
}