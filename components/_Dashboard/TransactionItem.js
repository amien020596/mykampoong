import PropTypes from "prop-types";
import { Typography } from "antd";
import { CheckCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import { parseNumber } from "libs/parser";
const { Text } = Typography;

const propTypes = {
  /**
   * Set type of transaction item
   */
  type: PropTypes.oneOf(["withdraw", "in"]),

  /**
   * Set transaction data
   */
  transaction: PropTypes.object
};

const defaultProps = {
  type: "in",
  transaction: {}
};

const Icon = ({ type, ...props }) =>
  type === "withdraw" ? (
    <CheckCircleFilled {...props} />
  ) : (
    <PlusCircleFilled {...props} />
  );

function TransactionItem({ type, transaction }) {
  return (
    <div className="c-transaction-item f">
      <style jsx>
        {`
          .c-transaction-item {
            width: 100%;
          }

          .c-transaction-item__content {
            width: 100%;
            margin-left: 12px;
            padding: 12px 0;
            border-bottom: solid 1px var(--gray200);
          }
        `}
      </style>
      <style jsx global>
        {`
          .c-transaction-item__icon {
            font-size: 20px;
            margin-top: 20px;
            color: var(--teal400);
          }
        `}
      </style>
      <Icon type={type} className="c-transaction-item__icon" />
      <div className="f f-btw mdl c-transaction-item__content">
        <div>
          <Text className="font-md display-block">
            Rp {parseNumber(transaction.amount)}
          </Text>
          <Text className="text-info text-gray">
            {type === "in" && `${transaction.bank} · `}
            {transaction.date}
          </Text>
        </div>
        <div style={{ textAlign: "right" }}>
          <Text className="text-info display-block">
            {transaction.beneficiary}
          </Text>
          {type === "withdraw" && (
            <Text className="text-info">{transaction.account_number}</Text>
          )}
        </div>
      </div>
    </div>
  );
}

TransactionItem.propTypes = propTypes;
TransactionItem.defaultProps = defaultProps;

export default TransactionItem;
