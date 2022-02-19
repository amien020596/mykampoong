import Pagination from "components/common/Pagination";
import Card from "components/Card";


export default function CardWrapper({ data = [], meta = {} }) {
  return (
    <div>
      <div
        className="f f-w"
        style={{ width: "calc(100% + 20px)", marginTop: 40 }}
      >
        {data.map((i) => (
          <Card key={i.id} data={i} light square />
        ))}

      </div>
      <div className="f f-ctr mdl" style={{ marginTop: 40 }}>
        <Pagination meta={meta} />
      </div>
    </div>
  );
}
