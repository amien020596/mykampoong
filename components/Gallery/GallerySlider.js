import { Typography, Button } from 'antd';
import { CloseOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from 'react';
const { Title, Text } = Typography;

export default function GallerySlider({
  onClose,
  prevClick,
  nextClick,
  indexOpen = 0,
  dataImages = [],
}) {

  let max = dataImages.length;
  const currentNumber = indexOpen + 1;
  const source = dataImages[indexOpen]

  return (
    <div className="content">
      <style jsx>
        {`
          .content{
            margin:0;
            padding:0;
            box-sizing: content-box;
            width: 100%;
            height: 100%;
            z-index: 100;
            position: fixed;
            top: 0;
            left:0;
            background-color:#4e4e4e;
          }
          .gallery-images {
           
          }
          .gallery-images-slider{
           
          }
          .gallery-images-slider-header{
            padding:25px;
            height:10%;
          }
          .images-slider{
           
          }
          .preview{
            margin:10%;
            width:800px;
            height:500px;
            display:flex;
            justify-content:center;
          }
          .swiper-button{
            width:auto;
            height:auto;
            padding:10px;
            border:2px solid #ffffff;
            border-radius:50%;
            box-sizing: content-box;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .swiper-button:hover{
            cursor:pointer;
          }
          .preview img{
            max-width: 100%;
            max-height: 100%;
          }
        `}
      </style>
      <div className="gallery-images-slider">
        <div className="gallery-images-slider-header f f-btw f-center">
          <Button style={{ backgroundColor: "transparent", color: "#ffffff" }} onClick={onClose}>View All {max} Images</Button>
          <Text level={2} style={{ color: "#ffffff" }}>{currentNumber}/{max}</Text>
          <CloseOutlined style={{ cursor: "pointer", fontSize: 20, color: "#ffffff" }} onClick={onClose} />

        </div>
        <div className="container">
          <div className="images-slider f f-btw f-center">
            {dataImages.length > 1 && <div className={`swiper-button swiper-button-prev `} >
              <LeftOutlined style={{ fontSize: 20, color: "#ffffff" }} onClick={prevClick} />
            </div>}
            <div className="preview" >
              <img src={source} />
            </div>
            {dataImages.length > 1 && <div className={`swiper-button swiper-button-next `} onClick={nextClick}>
              <RightOutlined style={{ fontSize: 20, color: "#ffffff" }} />
            </div>}
          </div>
        </div>
      </div>
    </div>
  )
}

