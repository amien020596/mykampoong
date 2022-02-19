import Tag from 'antd/lib/tag';

export default function TagCustom({ type, children }) {
  let textStyle = {};
  let tagStyle = {};
  switch (type) {
    case "experience":
      textStyle = {
        color: "var(--pink600)"
      };
      tagStyle = {
        background: "var(--pink100)"
      };
      break;
    case "package":
      textStyle = {
        color: "var(--teal600)"
      };
      tagStyle = {
        background: "var(--teal100)"
      };
      break;
    case "staycation":
      textStyle = {
        color: "var(--blue600)"
      };
      tagStyle = {
        background: "var(--blue100)"
      };
      break;
    case "service":
      textStyle = {
        color: "var(--purple600)"
      };
      tagStyle = {
        background: "var(--purple100)"
      };
    default:
      break;
  }
  return (
    <Tag style={tagStyle}>
      <style jsx>
        {`
          .text {
            font-size: 12px;
            letter-spacing: 0.04em;
            font-weight: 500;
            margin: 0;
            text-transform: uppercase;
          }
        `}
      </style>
      <p className="text" style={textStyle}>
        {children}
      </p>
    </Tag>
  );
}
