import Button from 'antd/lib/button';
import { CloseOutlined } from "@ant-design/icons";
import GallerySlider from "./GallerySlider";
import Masonry from "react-masonry-css";
import PropTypes from "prop-types";
import { useState } from "react";

const propTypes = {
  /**
   * Set visiblity of modal
   */
  visible: PropTypes.bool.isRequired,

  /**
   * Set images data
   */
  images: PropTypes.arrayOf(PropTypes.object),

  /**
   * Set function on close function
   */
  onClose: PropTypes.func
};

const defaultProps = {
  visible: false,
  images: [],
  onClose: () => { }
};

function GalleryAllPicture(props) {
  const [openImages, setOpenImages] = useState(false)
  const [indexOpen, setIndexOpen] = useState(0)
  const { visible,
    images,
    onClose, ...restProps } = props;

  const handleSliderClose = () => {
    setOpenImages(false)
  }
  const handleSliderOpen = (e, index) => {
    e.preventDefault();
    setIndexOpen(index)
    setOpenImages(true)
  }
  const handleOnClose = () => {
    if (onClose) onClose();
  };

  const handleNextClick = () => {
    if ((indexOpen + 1) === images.length) {
      setIndexOpen(0)
    } else {
      setIndexOpen(indexOpen + 1)
    }
  }
  const handlePrevClick = () => {
    if (indexOpen === 0) {
      setIndexOpen(images.length - 1)
    } else {
      setIndexOpen(indexOpen - 1)
    }
  }
  return (
    <>
      {visible && (
        <div className="gallery-picture" {...restProps}>
          <style jsx>
            {`
              .gallery-picture {
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                width: 100vw;
                background: #fff;
                z-index: 100;
              }

              .gallery-picture__header {
                padding: 12px 16px;
                position: fixed;
                width: 100%;
                top: 0;
                z-index: 2;
                background: #fff;
              }

              .gallery-picture__body {
                height: 100vh;
                overflow: auto;
              }

              .gallery-picture__container {
                max-width: 794px;
                padding-top: 123px;
                width: 100%;
                margin: 0 auto;
              }
            `}
          </style>

          <style jsx global>
            {`
              .masonry-grid {
                display: flex;
                margin-left: -30px;
                width: auto;
              }

              .masonry-grid__column {
                padding-left: 30px; /* gutter size */
                background-clip: padding-box;
              }

              .masonry-grid__column > div {
                background: grey;
                margin-bottom: 30px;
              }

              .masonry-grid__column > div > img {
                width: 100%;
              }
            `}
          </style>

          <div className="f f-rht gallery-picture__header">
            <Button
              onClick={handleOnClose}
              icon={<CloseOutlined style={{ fontSize: 22 }} />}
              type="text"
              style={{ padding: 0 }}
            />
          </div>
          <div className="gallery-picture__body">
            <div className="gallery-picture__container">
              <Masonry
                breakpointCols={2}
                className="masonry-grid"
                columnClassName="masonry-grid__column"
              >
                {images.map((image, index) => {
                  return (
                    <div key={index} onClick={(e) => handleSliderOpen(e, index)} style={{ cursor: "pointer" }}>
                      <img src={image} />
                    </div>
                  )
                }
                )}
              </Masonry>
              {openImages && <GallerySlider onClose={handleSliderClose} prevClick={handlePrevClick} nextClick={handleNextClick} dataImages={images} indexOpen={indexOpen} />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

GalleryAllPicture.propTypes = propTypes;
GalleryAllPicture.defaultProps = defaultProps;

export default GalleryAllPicture;
