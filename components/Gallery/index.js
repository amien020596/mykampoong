import { Typography } from "antd";
import { set } from "date-fns";
import { useState } from "react";
import GalleryAllPicture from "./GalleryAllPicture";

const { Text } = Typography;
export default function Gallery({ preview = true, images = [] }) {

  let [active, setActive] = useState(0);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [activeSlider, setActiveSlider] = useState('');
  let lengthImages = 0;
  if (images !== null) {
    lengthImages = images.length;
  }

  const thumbnailImage =
    images?.[active] ||
    "https://app.mykampoong.com/storage/images/image-not-found.jpg";

  function handlePrev() {
    let maxLength = lengthImages - 1;
    if (0 === active) {
      setActive(maxLength)
    } else {
      setActive(active - 1);
    }
  }
  function handleNext() {
    if (lengthImages - 1 === active) {
      setActive(0)
    } else {
      setActive(active + 1);
    }

  }
  function handleMouseOver() {
    if (images !== null) {
      setActiveSlider("active");
    }
  }
  function handleMouseLeave() {
    setActiveSlider("");
  }

  return (
    <div>
      <style jsx>
        {`
          .preview {
            width: 100%;
            border-radius: 8px 8px 0 0;
            overflow: hidden;
            height: 352px;
            cursor: pointer;
          }
          .preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .thumbnail-wrapper {
            margin-top: 10px;
          }
          .thumbnail-item {
            height: 81px;
            width: 121px;
            overflow: hidden;
            margin-right: 8px;
            border-radius: ${preview ? "0" : "8px"};
            cursor: pointer;
          }
          .thumbnail-item:first-child {
            border-radius: ${preview ? "0 0 0 8px" : "8px"};
          }
          .thumbnail-item.more {
            width: 167px;
            border: solid 1px var(--gray300);
            border-radius: ${preview ? "0 0 8px 0" : "8px"};
            margin-right: 0;
          }
          .thumbnail-item img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .swiper-button{
            position: absolute;
            top: 50%;
            background-size:15px 20px;
            background-position: center;
            background-repeat: no-repeat;
            background-color:#fff;
            border-radius:50%;
            z-index:10;
            content:'';
            width: 40px;
            height: 40px;
            cursor:pointer;
            opacity:0;
            visibility:hidden;
            box-shadow: 0px 0px 4px 1px #00000073;
          }
          .active{
            opacity:1;
            visibility:visible;
            transition:all .3s ease;
          }
          .swiper-button-next{
            color:#000;
            left:auto;
            right:-2%;
            background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
          }
          .swiper-button-prev{
            color:#000;
            left:-2%;
            right:auto;
            background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
          }
          [class^=swiper-button-] {
            transition: all 0.3s ease;
          }
        `}
      </style>
      {preview && (
        <div style={{ position: "relative" }}>
          <div className={`swiper-button swiper-button-prev ${activeSlider}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handlePrev}></div>
          <div className={`swiper-button swiper-button-next ${activeSlider}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleNext}></div>
          <div className="preview" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <img src={thumbnailImage} />
          </div>
        </div>
      )}
      <div className="thumbnail-wrapper f mdl">
        {images?.map((image, index) => {
          if (index < 4) {
            return (
              <div
                className="thumbnail-item"
                key={index}
                onClick={() => setActive(index)}
              >
                <img src={image} />
              </div>
            );
          }
        })}
        {images?.length > 0 && (
          <>
            <div
              className="thumbnail-item more f f-ctr mdl"
              onClick={() => setGalleryVisible(true)}
            >
              <Text style={{ letterSpacing: ".03em", color: "var(--gray800)" }}>
                View all {images.length} images
              </Text>
            </div>
            <GalleryAllPicture
              visible={galleryVisible}
              images={images}
              onClose={() => setGalleryVisible(false)}
            />
          </>
        )}
      </div>
    </div>
  );
}
