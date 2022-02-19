import { CloseOutlined } from "@ant-design/icons";
import { Typography, Button } from 'antd';
import FacilityItem from "components/Experience/FacilityItem";
import Gallery from "components/Gallery";
import AddDay from './AddDay'
import GuestRoom from './GuestRoom'
import { parseNumber } from 'libs/parser'
const { Title, Text } = Typography;

export default function RoomDetail(props) {
  const { onClose } = props
  return (
    <div className="room-detail-container">
      <style jsx>
        {`
        .room-detail-container{
          margin:0;
          padding:0;
          box-sizing: content-box;
          width: 100%;
          height: 100%;
          z-index: 100;
          position: fixed;
          top: 0;
          left:0;
          background-color:#fff;
        }
        .container{
          max-width:100vw;
          width: 100%;
          height:100%;
        }
            .left{
              width: 100%;
              background-color:#fff;
              display:flex;
            }
            .right {
              border-left:2px solid var(--gray300);
              background-color:#fff;
              max-width: 30vw;
              width: 100%;
            }
            .separator {
              height: 1px;
              width: 100%;
              background: var(--gray300);
              margin: 30px 0;
            }
            .gallery-slider{
              margin:auto 100px;
            }
            .info-room-detail{
              margin:20px;
            }
            .book-room{
              border-top:2px solid var(--gray300);
            }
        `}</style>

      <div className="container f">
        <div className="left">
          <div className="gallery-slider">
            <Gallery images={["https://app.mykampoong.com/storage/taro/akomodasi/tegal-dukuh-camp/Taro_Rice Field Cottage_1.jpg", "https://app.mykampoong.com/storage/taro/akomodasi/tegal-dukuh-camp/Taro_Rice Field Cottage_5.jpg"]} />
          </div>
        </div>
        <div className="right">
          <div className="info-room-detail">
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Title level={3}>Family Delux</Title>
              <CloseOutlined onClick={onClose} style={{ fontSize: 20 }} />
            </div>
            <div className='separator' />
            <div>
              <Title level={5}>Amenities</Title>
              <div className='f f-w' style={{ margin: '28px 0 10px' }}>
                <FacilityItem small width={130} title='Wifi' img='/images/icon/rss.svg' />
                <FacilityItem small width={130} title='Breakfast' img='/images/icon/restaurant.svg' />
                <FacilityItem small width={130} title='Coffee' img='/images/icon/coffee.svg' />
                <FacilityItem small width={130} title='Air Conditioner' img='/images/icon/wallpaper.svg' />
              </div>
            </div>
            <div className='separator' />
            <div>
              <Title level={5}>Room description</Title>
              <Text> Bersantai di kamar Classic kami yang menawarkan fasilitas bernuansa Bali dalam suasana yang benar-benar modern. Kamar seluas 34 meter persegi memiliki pilihan tempat tidur king atau tempat tidur twin. Kamar mandi dengan 4-perlengkapannya dilengkapi rain shower dan bathtub.</Text>
            </div>
          </div>
          <div className="book-room">
            <div style={{ margin: 20 }}>
              <div style={{ margin: '20px 0' }} style={{ position: "relative" }}>
                <AddDay />
                <div>
                  <GuestRoom />
                </div>
              </div>
              <Title level={3} style={{ letterSpacing: '.02em', margin: "10px 0" }}>Rp. {parseNumber(5000000 * 1)} <span style={{ fontSize: 18, fontWeight: 400 }}>/ room / night</span></Title>
              <div className='f f-c'>
                <Button type='primary' size='small' style={{ height: 36, width: "100%", marginBottom: 12 }}>Add to My trip</Button>
                <Button size='small' style={{ height: 36, width: "100%" }}>Book now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}