import { Typography } from "antd";
const { Text } = Typography;
export default function FooterPublic() {
  return (
    <>
      <style jsx>
        {`
          .logo {
            width: 226px;
            mix-blend-mode: multiply;
          }
        `}
      </style>
      <div className="footer">
        <div className="container f f-btw">
          <div className="f f-c f-start">
            <img src="/images/logo.svg" className="logo" />
            <Text>Your ultimate excursions experience</Text>
          </div>
          <div className="f f-btw" style={{ width: "60%" }}>
            <div className="footer-menu-wrapper">
              <Text className="title-menu">ABOUT</Text>
              <div className="f f-c" style={{ marginTop: 10 }}>
                <a>How Kampoong works</a>
                <a>Newsroom</a>
                <a>Investors</a>
                <a>Careers</a>
              </div>
            </div>
            <div className="footer-menu-wrapper">
              <Text className="title-menu">JOIN US</Text>
              <div className="f f-c" style={{ marginTop: 10 }}>
                <a>Host an experience</a>
                <a>Host your place</a>
                <a>Host a service</a>
              </div>
            </div>
            <div className="footer-menu-wrapper">
              <Text className="title-menu">SUPPORT</Text>
              <div className="f f-c" style={{ marginTop: 10 }}>
                <a>Help center</a>
                <a>Cancellation options</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Text>© 2021 Kampoong, Inc. All rights reserved</Text>
          <Text style={{ margin: "0 10px" }}>·</Text>
          <Text>Privacy</Text>
          <Text style={{ margin: "0 10px" }}>·</Text>
          <Text>Terms</Text>
        </div>
      </div>
    </>
  );
}
