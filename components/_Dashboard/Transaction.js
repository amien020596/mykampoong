import Button from 'antd/lib/button'
import ContentWrapper from "./ContentWrapper";
import TransactionItem from "./TransactionItem";
import Typography from 'antd/lib/typography';

const { Text, Title } = Typography;

const TRANSACTION_DATA = [
  {
    amount: 1500000,
    date: "3 Apr 2021, 12.08",
    beneficiary: "Maudy bank account",
    account_number: "08323623872123",
    type: "withdraw"
  },
  {
    amount: 750000,
    date: "3 Apr 2021, 12.08",
    beneficiary: "Maudy MCPay account",
    bank: "OVO",
    account_number: null,
    type: "in"
  },
  {
    amount: 750000,
    date: "3 Apr 2021, 12.08",
    beneficiary: "Maudy MCPay account",
    bank: "Credit card",
    account_number: null,
    type: "in"
  }
];

export default function TransactionHost() {
  return (
    <ContentWrapper style={{ minWidth: 425, marginLeft: 20 }}>
      <div className="f f-btw mdl c-transaction">
        <div>
          <Text>Current balance</Text>
          <Title level={3} style={{ margin: 0 }}>
            Rp 3.500.000
          </Title>
        </div>
        <Button type="link">View details</Button>
      </div>
      <div style={{ marginTop: 20 }}>
        {TRANSACTION_DATA.map((transaction, index) => (
          <TransactionItem
            key={index}
            type={transaction.type}
            transaction={transaction}
          />
        ))}
      </div>
    </ContentWrapper>
  );
}
