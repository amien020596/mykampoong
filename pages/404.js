import Layout from "components/Layout/Public";
import Title from "antd/lib/typography/Title";

function Custom() {
  return (
    <Layout style={{ marginTop: 0 }}>
      <style jsx>
        {`
          .underconstruction{
            width:20vw;
            height:20vh;
          }
          .position{
            position:static;
            width:100vw;
            height:calc(100vh - 83px - 311px);
          }
        `}
      </style>
      <div className="f f-ctr mdl f-c position">
        <img style={{ marginBottom: 20 }} className="underconstruction" src="/images/undraw_under_construction.svg" />
        <Title>This page still underconstruction</Title>
      </div>
    </Layout>
  )
}


export default Custom;