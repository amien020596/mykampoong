import Card from "components/Card";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef, useEffect } from "react";
import { Typography, Tabs } from "antd";
const { Title } = Typography;
export default function CardSlider({
  data = []
}) {


  const hidden = data.length <= 3 ? { display: "none" } : {};

  const btnLeft = useRef(null);
  const btnRight = useRef(null);
  const card = useRef(null);

  function handleOnScrollLeft() {
    let innerWidth = window.innerWidth;
    card.current.scrollLeft = card.current.scrollLeft += innerWidth / 2 > 600 ? innerWidth / 2 : innerWidth - 100;
  }

  function handleOnScrollRight() {
    let innerWidth = window.innerWidth;
    card.current.scrollLeft = card.current.scrollLeft -= innerWidth / 2 > 600 ? innerWidth / 2 : innerWidth - 100;
  }

  useEffect(() => {
    const left = btnLeft.current;
    const right = btnRight.current;

    left.addEventListener("click", handleOnScrollLeft);
    right.addEventListener("click", handleOnScrollRight);

    return () => {
      left.removeEventListener("click", handleOnScrollLeft);
      right.removeEventListener("click", handleOnScrollRight);
    }
  }, [])
  return (
    <div style={{ marginTop: "2rem" }}>
      <style jsx>
        {`.con-cards{
            overflow:auto;
            scroll-behavior:smooth;
            padding-right:15px;
            padding-left:15px;
          }
          .con-cards::-webkit-scrollbar{
            height:0px;
          }
          .con-cards:after{
            content:"";
            display:block;
            min-width:20px;
            height:100px;
            position:relative;
          }
          .content{
            display:flex;
            align-items:center;
            justify-content:flex-start;
          }
          .btn{
            cursor:pointer;
            display:flex;
            align-items: center;
            border-radius:50%;
            max-width:50px
            max-height:50px;
            transition:all 0.2s ease;
            z-index:100;
          }
          .btn#prev {
            box-shadow:0px 0px 16px 3px rgb(0,0,0,0.08);
          }
          .btn#next{
            box-shadow:0px 0px 16px 3px rgb(0,0,0,0.08);
          }
          .btn:hover{
            box-shadow:0px 0px 16px 3px rgba(0,0,0,0.07);
          }
          .btn#prev:hover{
            transform:translate(-5px,0);
          }
          .btn#next:hover{
            transform:translate(5px,0);
          }
          
          `}
      </style>
      <Title style={{ fontWeight: 500, letterSpacing: '.03em' }} level={3}>
        Experience nearby Kanto lampo waterfall
        <a style={{ fontSize: 16, marginLeft: 16 }}>View more</a>
      </Title>
      <div className="content">
        <div id="prev" className="btn" style={hidden} ref={btnLeft}>
          <LeftOutlined style={{ fontSize: "25px", padding: 5, color: "var(--gray400);" }} />
        </div>
        <div className="f f-jcfs con-cards" ref={card}>
          {
            data.map((element, index) => <Card light stretch key={element.id} data={element} />)
          }
        </div>
        <div id="next" className="btn" style={hidden} ref={btnRight}>
          <RightOutlined style={{ fontSize: "25px", padding: 5, color: "var(--gray400);" }} />
        </div>
      </div>
    </div>
  )
}