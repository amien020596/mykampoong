import { Typography, Row, Col, Select, Form, Button, Input } from 'antd'
const { Title } = Typography
const { Option } = Select
export default function ProfileForm() {
    const titleOptions = [
        {text: 'Mr.', value: 1},
        {text: 'Mrs. ', value: 2}
    ]
    const countryCodes = [
        {text: 'Indonesia (+62)', value: 1}
    ]

    return (
        <Col span={16}>
            <Form layout="vertical" className="lg-ml-20" >
                <Row gutter={8}>
                <Col span={24} className="xs-mb-10">
                    <Title level={5}>Profile</Title>
                </Col>
                <Col span={8}>
                    <Form.Item label="Title" initialValue={titleOptions[0].value}>
                        <Select>
                            {(() => titleOptions.map(e => <Option value={e.value} key={e.value}>{e.text}</Option>))()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={16}>
                    <Form.Item label="Fullname" name="fullname">
                        <Input placeholder="Felicia Kurnia Sasongko"></Input>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="E-mail" >
                        <Input placeholder="feliciakurnia@gmail.com"></Input>
                    </Form.Item>
                </Col>
                <Col span={10}>
                    <Form.Item label="Country Codes" initialValue={countryCodes[0].value}>
                        <Select>
                            {(() => countryCodes.map(e => <Option value={e.value} key={e.value}>{e.text}</Option>))()}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={14}>
                    <Form.Item label="Phone Number" >
                        <Input type="number"></Input>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label="Passport / KTP" >
                        <Input type="number"></Input>
                    </Form.Item>
                </Col>
                <Col span={24} style={{textAlign: 'right'}}>
                    <Button style={{backgroundColor: 'var(--primaryColor)', color: 'whitesmoke'}}>
                        Save
                    </Button>
                </Col>
                </Row>
            </Form>
        </Col>
    )
}