import Typography from 'antd/lib/typography';

const { Text } = Typography;

export default function FacilityItem({ title, small, img, width = 170 }) {
  return (
    <div className="f mdl" style={{ minWidth: width, marginBottom: 20 }}>
      {img && (
        <img
          src={img}
          style={{
            marginRight: 10,
            width: small ? 24 : 32,
            height: small ? 24 : 32
          }}
        />
      )}
      <Text style={{ letterSpacing: ".03em", fontSize: small ? 12 : 14 }}>
        {title}
      </Text>
    </div>
  );
}
