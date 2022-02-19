import Button from "antd/lib/button";
import Card from "components/Card";
import Empty from "antd/lib/empty";
import Pagination from "components/common/Pagination";
import Router from 'next/router'

export default function CardWrapper({ data = [], meta = {} }) {

  const handleClickExplore = () => Router.push('/')
  return (
    <div>
      <div
        className="f f-w"
        style={{ width: "calc(100% + 20px)", marginTop: 40 }}
      >
        {data.map((i) => (
          <Card key={i.id} data={i} light square />
        ))}
        {data.length === 0 &&
          (<div className="f f-ctr" style={{ width: "100%" }}>
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 60,
              }}
              description={
                <span>
                  No wishlist item found
                </span>
              }
            >
              <Button type="primary" onClick={() => handleClickExplore()}>Explore My Kampoong</Button>
            </Empty>
          </div>)}
      </div>
      <div className="f f-ctr mdl" style={{ marginTop: 40 }}>
        <Pagination meta={meta} />
      </div>
    </div>
  );
}
