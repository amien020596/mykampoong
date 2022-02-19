import { debounce, findIndex, orderBy } from "lodash";
import { getCityDataPayment, getProvinceDataPayment } from "modules/payment/get-payment-form-data";
import { useEffect, useState } from "react";

import CheckoutContext from "libs/hooks/checkout";
import Empty from 'antd/lib/empty'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Radio from 'antd/lib/radio'
import Select from 'antd/lib/select'
import Spin from 'antd/lib/spin'
import Typography from 'antd/lib/typography';
import { useRouter } from 'next/router'
import { useTranslation } from "next-i18next";

const { Option } = Select;
const { Title, Text } = Typography;

async function fetchingProvince(province) {
  return getProvinceDataPayment({ name: province }).then(body => orderBy(body.province?.map((province) => ({ label: `${province.name}`, value: `${province.id}` })), ['label'], ['asc']))
}

async function fetchingCity(name, id) {
  return getCityDataPayment({ 'id': id, 'name': name })
    .then(body => orderBy(body.regencies?.map((regencies) => ({ label: `${regencies.name}`, value: `${regencies.id}` })), ['label'], ['asc']))
}

function Payment({ ...props }) {
  const { t } = useTranslation('common')
  const router = useRouter()
  const { onCheckFormValidation, setOnCheckFormValidation } = CheckoutContext.useContainer();
  const { step, setStep } = CheckoutContext.useContainer()
  const [paymentMethod, setPaymentMethod] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [form] = Form.useForm();
  const [keyProvince, setKeyProvince] = useState('')
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');

  const [keywordProvince, setKeywordProvince] = useState('');
  const [fetching, setFetching] = useState(false);
  const [optionsProvince, setOptionsProvince] = useState([]);

  const [keywordCity, setKeywordCity] = useState('');
  const [optionsCity, setOptionCity] = useState([]);

  useEffect(() => {
    setFetching(true);

    fetchingProvince(keywordProvince).then((data) => {
      setOptionsProvince(data);
      setFetching(false);

    });
  }, [keywordProvince])

  useEffect(() => {
    setFetching(true);
    if (keywordCity !== '' || keyProvince !== '') {

      fetchingCity(keywordCity, keyProvince).then((data) => {
        setOptionCity(data);
        setFetching(false);
      });
    }
  }, [keyProvince])

  useEffect(() => {
    if (onCheckFormValidation) {
      handleFormSubmit()
    }
  }, [onCheckFormValidation])

  const handleSetPayment = (value) => setPaymentMethod(value);

  const handleChangeCity = (value) => setCity(value)

  function handleChangeProvince(value) {
    setProvince(value)
    setKeyProvince(value)
  }

  function handleOnSearchKeywordProvince(value) {
    setKeywordProvince(value)
  }

  function handleOnSearchKeywordCity(value) {
    setKeywordCity(value)
  }

  const handleFormSubmit = () => {
    form.validateFields()
      .then((values) => {
        const state = values?.state || 0;

        const indexState = findIndex(optionsProvince, f => f.value === state)
        const stateData = optionsProvince[indexState] || undefined;
        setOnCheckFormValidation(false)
        props.submit({ ...values, state: stateData?.label || undefined })

        setStep(step + 1)
        router.replace('/checkout/waiting')
      }).catch(errorInfo => {
        setOnCheckFormValidation(false)
      })
  }

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
      <Title level={2}>{t("Confirm and Pay")}</Title>
      <Title level={4} style={{ fontWeight: 500, marginBottom: 30 }}>
        {t("Contact details")}
      </Title>
      <Form form={form} layout="vertical" >
        <div className="f mdl">
          <Form.Item
            name="title"
            label={t("Title")}
            initialValue="mr"
            style={{ minWidth: 180, marginRight: 12 }}
          >
            <Select>
              <Option value="mr">{t("Mr")}</Option>
              <Option value="mrs">{t("Mrs")}</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="fullname"
            label={t("Fullname")}
            style={{ width: "100%" }}
            rules={[{ required: true, message: `${t('Please input your fullname!')}` }]}
          >
            <Input placeholder={t("Fullname")} />
          </Form.Item>
        </div>
        <Form.Item
          name="email"
          label={t("Email")}
          style={{ marginTop: 10 }}
          rules={[{ required: true, message: `${t('Please input your email!')}` }]}
        >
          <Input placeholder={t("Email Address")} />
        </Form.Item>
        <Form.Item
          name="address"
          label={t("Address")}
          style={{ marginTop: 10 }}
          rules={[{ required: true, message: `${t('Please input your address!')}` }]}
        >
          <Input placeholder={t("Address")} />
        </Form.Item>
        <Form.Item
          name="postal_code"
          label={t("Postal Code")}
          style={{ marginTop: 10 }}
          rules={[{ required: true, message: `${t('Please input your postal code!')}` }]}
        >
          <Input placeholder={t("Postal Code")} />
        </Form.Item>
        <Form.Item
          name="country"
          label={t("Country")}
          initialValue={"indonesia"}
          style={{ marginTop: 10 }}
        >
          <Select
            disabled={true}
          >
            <Option value="indonesia">Indonesia</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="state"
          label={t("State")}
          rules={[{ required: true, message: `${t('Please select your state!')}` }]}
          style={{ marginTop: 10 }}
        >
          <Select
            placeholder={t("Select State")}
            value={province}
            onChange={(e) => handleChangeProvince(e)}
            showSearch={true}
            onSearch={handleOnSearchKeywordProvince}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {
              optionsProvince.map((op, index) => (
                <Option key={index} value={op.value}>{op.label}</Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item
          name="city"
          label={t("City")}
          rules={[{ required: true, message: `${t('Please select your city!')}` }]}
          style={{ marginTop: 10 }}
        >
          <Select
            placeholder={t("Select City")}
            value={city}
            onChange={handleChangeCity}
            onSearch={handleOnSearchKeywordCity}
            showSearch={true}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {
              optionsCity.map((op, index) => (
                <Option key={index} value={op.label}>{op.label}</Option>
              ))
            }
          </Select>
        </Form.Item>

        <Form.Item name="isVisitor" initialValue="1">
          <Radio.Group>
            <Radio value="1">
              <Text style={{ fontSize: 16 }}>{t("I am the visitor")}</Text>
            </Radio>
            <Radio value="2">
              <Text style={{ fontSize: 16 }}>
                {t("I am booking for someone else")}
              </Text>
            </Radio>
          </Radio.Group>
        </Form.Item>

        <div className="separator" />

        <Title level={4} style={{ fontWeight: 500, marginBottom: 30 }}>
          {t("Required for your trip")}
        </Title>
        <div className="f mdl">
          <Form.Item
            name="countryCode"
            label={t("Country Code")}
            initialValue="id"
            style={{ minWidth: 180, marginRight: 12 }}
          >
            <Select>
              <Option value="id">Indonesia (+62)</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="phone_number"
            label={t("Phone Number")}
            style={{ width: "100%" }}
            rules={[{ required: true, message: `${t('Please input your phone number!')}` }]}
          >
            <Input placeholder={t("Phone number")} />
          </Form.Item>
        </div>
        <div className="f mdl">
          <Form.Item
            name="type_card"
            label="Id Type"
            initialValue="ktp"
            style={{ minWidth: 180, marginRight: 12 }}

          >
            <Select>
              <Option value="ktp">KTP</Option>
              <Option value="passport">Passport</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="card_id"
            label={t("Number Passport / KTP")}
            style={{ width: "100%", marginTop: 10 }}
            rules={[{ required: true, message: `${t('Please input your card number!')}` }]}
          >
            <Input placeholder={t("Number Passport / KTP")} />
          </Form.Item>
        </div>
        <br />
        <div className="separator" />
        <Title level={4} style={{ fontWeight: 500, marginBottom: 20 }}>
          {t("Payment")}
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
            {t("Credit or debit card")}
          </Text>
          <div
            className="f mdl f-btw payment-item"
            onClick={() => handleSetPayment(1)}
          >
            <div className="f mdl">
              <img src="/images/bank/cc.jpg" />
              <Text style={{ fontSize: 16 }}>{t("Credit or debit card")}</Text>
            </div>
            <Radio value={1} />
          </div>
          {/* <Text
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
          </div> */}
        </Radio.Group>

        <div className="separator" />
        <Title level={4} style={{ fontWeight: 500, marginBottom: 30 }}>
          {t("Cancellation Policy")}
        </Title>
        <Text
          style={{
            fontSize: 16,
            maxWidth: 460,
            display: "block",
            marginBottom: 10
          }}
        >
          {t("Any experience can be canceled and fully refunded within 24 hours of purchase, or at least 7 days before the experience starts.")}
        </Text>

        <a style={{ fontSize: 16, fontWeight: 500 }}>{t("Read More")}</a>
      </Form>
    </div>
  );
}


export default Payment