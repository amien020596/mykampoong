export default function ContentWrapper({ children, className, ...restProps }) {
  return (
    <div className={`wrapper ${className || ""}`} {...restProps}>
      <style jsx>
        {`
          .wrapper {
            padding: 28px;
            background: #fff;
            border-radius: 8px;
            border: solid 1px var(--gray200);
            margin-bottom: 16px;
          }
        `}
      </style>
      {children}
    </div>
  );
}
