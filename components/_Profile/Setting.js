import { Col, Row, Typography, Button, Divider, Switch, Form, Input, Select } from 'antd'

const { Title, Text } = Typography
const { Option } = Select

export default function Setting() {
    const titleOptions = [
        {text: 'English - USD', value: 1}
    ]
    return(
        <Col span={16}>
            <Form layout="vertical" className="lg-ml-20">
                <Row gutter={8}>
                    <Col span={24} className="xs-mb-10">
                        <Title level={5}>Language and Currency</Title>
                    </Col>
                    <Col span={24} className="xs-mt-10">
                        <Form.Item label="Title" name="title" initialValue={titleOptions[0].value}>
                            <Select>
                                {(() => titleOptions.map(e => <Option value={e.value} key={e.value}>{e.text}</Option>))()}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Divider></Divider>
                    </Col>
                    <Col span={24}>
                        <Title level={5}>Email Notification</Title>
                    </Col>
                    <Col span={24} className="xs-mt-10" >
                        <Row justify="end">
                            <Col span={12}>
                                <Text>
                                    About My Trip
                                </Text>
                            </Col>
                            <Col span={12} style={{textAlign: 'right'}}>
                                <Switch defaultChecked/>
                            </Col>
                        </Row>
                        <Row justify="end" className="xs-mt-5">
                            <Col span={12}>
                                <Text>
                                    My Kampoong discount and promos
                                </Text>
                            </Col>
                            <Col span={12} style={{textAlign: 'right'}}>
                                <Switch defaultChecked/>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <Divider></Divider>
                    </Col>
                    <Col span={24}>
                        <Title level={5}>Password</Title>
                    </Col>
                    <Col span={24} className="xs-mt-10">
                        <Form.Item label="Password" name="password">
                            <Input type="password"></Input>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Row justify="end">
                            <Button>Change Password</Button>  
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Col>
    )
}