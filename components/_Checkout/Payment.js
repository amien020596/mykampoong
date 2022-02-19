import { Typography, Form, Input, Select, Radio } from "antd";
import { useState } from "react";
const { Option } = Select;
const { Title, Text } = Typography;
export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState(1);
  const handleSetPayment = (value) => {
    setPaymentMethod(value);
  };
  return (
    <div>
      <style jsx>
        {`
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 20px 0 40px;
          }
          .payment-item {
            width: 100%;
            padding: 22px 16px 22px 24px;
            border: solid 1px var(--gray200);
            border-radius: 8px;
            margin-bottom: 8px;
            cursor: pointer;
          }
          .payment-item img {
            margin-right: 16px;
          }
        `}
      </style>
      <Title level={2}>Confirm and Pay</Title>
      <Title level={4} style={{ fontWeight: 500, marginBottom: 30 }}>
        Contact details
      </Title>
      <Form layout="vertical">
        <div className="f mdl">
          <Form.Item
            name="title"
            label="Title"
            initialValue="mr"
            style={{ minWidth: 180, marginRight: 12 }}
          >
            <Select>
              <Option value="mr">Mr</Option>
              <Option value="mrs">Mrs</Option>
            </Select>
          </Form.Item>
          <Form.Item name="fullname" label="Fullname" style={{ width: "100%" }}>
            <Input placeholder="Fullname" />
          </Form.Item>
        </div>
        <Form.Item name="email" label="Email">
          <Input placeholder="Email Address" />
        </Form.Item>

        <Form.Item name="isVisitor" initialValue="1">
          <Radio.Group>
            <Radio value="1">
              <Text style={{ fontSize: 16 }}>I am the visitor</Text>
            </Radio>
            <Radio value="2">
              <Text style={{ fontSize: 16 }}>
                I am booking for someone else
              </Text>
            </Radio>
          </Radio.Group>
        </Form.Item>

        <div className="separator" />

        <Title level={4} style={{ fontWeight: 500, marginBottom: 30 }}>
          Required for your trip
        </Title>
        <div className="f mdl">
          <Form.Item
            name="countryCode"
            label="Country Code"
            initialValue="id"
            style={{ minWidth: 180, marginRight: 12 }}
          >
            <Select>
              <Option value="id">Indonesia (+62)</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            style={{ width: "100%" }}
          >
            <Input placeholder="Phone number" />
          </Form.Item>
        </div>
        <Form.Item name="idNumber" label="Passport / KTP">
          <Input placeholder="Passport / KTP" />
        </Form.Item>
        <br />
        <div className="separator" />
        <Title level={4} style={{ fontWeight: 500, marginBottom: 20 }}>
          Select Payment
        </Title>

        <Radio.Group style={{ width: "100%" }} value={paymentMethod}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              display: "block",
              marginBottom: 12
            }}
          >
            Credit or debit card
          </Text>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(1)}
          >
            <div className="f mdl">
              <img src="/images/bank/cc.jpg" />
              <Text style={{ fontSize: 16 }}>Credit or debit card</Text>
            </div>
            <Radio value={1} />
          </div>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              display: "block",
              marginBottom: 12,
              marginTop: 28
            }}
          >
            E-wallet
          </Text>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(2)}
          >
            <div className="f mdl">
              <img src="/images/bank/ovo.jpg" />
              <Text style={{ fontSize: 16 }}>OVO</Text>
            </div>
            <Radio value={2} />
          </div>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(3)}
          >
            <div className="f mdl">
              <img src="/images/bank/alipay.jpg" />
              <Text style={{ fontSize: 16 }}>Alipay</Text>
            </div>
            <Radio value={3} />
          </div>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(4)}
          >
            <div className="f mdl">
              <img src="/images/bank/wechat.jpg" />
              <Text style={{ fontSize: 16 }}>WeChat Pay</Text>
            </div>
            <Radio value={4} />
          </div>

          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              display: "block",
              marginBottom: 12,
              marginTop: 28
            }}
          >
            Bank Transfer
          </Text>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(5)}
          >
            <div className="f mdl">
              <img src="/images/bank/bni.jpg" />
              <Text style={{ fontSize: 16 }}>BNI</Text>
            </div>
            <Radio value={5} />
          </div>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(6)}
          >
            <div className="f mdl">
              <img src="/images/bank/danamon.jpg" />
              <Text style={{ fontSize: 16 }}>Danamon</Text>
            </div>
            <Radio value={6} />
          </div>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(7)}
          >
            <div className="f mdl">
              <img src="/images/bank/maybank.jpg" />
              <Text style={{ fontSize: 16 }}>Maybank</Text>
            </div>
            <Radio value={7} />
          </div>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(8)}
          >
            <div className="f mdl">
              <img src="/images/bank/cimb.jpg" />
              <Text style={{ fontSize: 16 }}>CIMB Niaga</Text>
            </div>
            <Radio value={8} />
          </div>
        </Radio.Group>

        <div className="separator" />
        <Title level={4} style={{ fontWeight: 500, marginBottom: 30 }}>
          Cancellation Policy
        </Title>
        <Text
          style={{
            fontSize: 16,
            maxWidth: 460,
            display: "block",
            marginBottom: 10
          }}
        >
          Any experience can be canceled and fully refunded within 24 hours of
          purchase, or at least 7 days before the experience starts.
        </Text>

        <a style={{ fontSize: 16, fontWeight: 500 }}>Read More</a>
      </Form>
    </div>
  );
}
