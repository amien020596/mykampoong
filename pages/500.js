import Layout from "components/Layout/Public";
import Title from "antd/lib/typography/Title";

export default function Custom500() {
  return (
    <Layout style={{ marginTop: 0 }}>
      <style jsx>
        {`
        .underconstruction{
          width:30vw;
          height:30vh;
        }
        .position{
          position:static;
          width:100vw;
          height:calc(100vh - 83px - 311px);
        }
      `}
      </style>
      <div className="f f-ctr mdl f-c position">
        <img style={{ marginBottom: 20 }} className="underconstruction" src="/images/undraw_server_down.svg" />
        <Title>Server error</Title>
      </div>
    </Layout>
  )
}