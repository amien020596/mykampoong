import { Typography, Row, Col, Avatar, Card, Divider, Select } from 'antd'
import ProfileContext from 'libs/hooks/profile'
import { TABS } from 'components/_Profile/consts/index'

const { Title, Text } = Typography

export default function ProfileCard() {
    const { tabFocus, setTabFocus } = ProfileContext.useContainer()

    return (
        <Col span={7}>
            <Row>
                <Col span={24} style={{ border: '1px solid rgba(0,0,0,.15)', borderRadius: 5 }}>
                    <Row justify="center xs-mt-30">
                        <Avatar src="https://via.placeholder.com/300" size={100} style={{ borderRadius: '100px' }}>
                        </Avatar>
                        <Title level={5} style={{ width: '100%', textAlign: 'center', marginBottom: 0 }} className="lg-mt-10">Felicia Kurnia Sasongko</Title>
                        <Text style={{ width: 200, textAlign: 'center' }} className="lg-mt-10">Joined 2021</Text>
                    </Row>
                    <Divider className="xs-px-20" style={{ width: 200 }}></Divider>
                    <Row>
                        <Col span={24} style={tabFocus == TABS.TOGGLE_PROFILE && { backgroundColor: 'var(--primaryColor)', color: 'white' }} className="xs-py-10 xs-px-20" onClick={() => setTabFocus(0)}>
                            <Text strong style={{ color: 'inherit' }}>Profile</Text>
                        </Col>
                        <Col span={24} style={tabFocus == TABS.TOGGLE_REVIEW && { backgroundColor: 'var(--primaryColor)', color: 'white' }} className="xs-py-10 xs-px-20" onClick={() => setTabFocus(1)}>
                            <Text strong style={{ color: 'inherit' }}>Reviews by me</Text>
                        </Col>
                        <Col span={24} style={tabFocus == TABS.TOGGLE_SETTING && { backgroundColor: 'var(--primaryColor)', color: 'white' }} className="xs-py-10 xs-px-20" onClick={() => setTabFocus(2)}>
                            <Text strong style={{ color: 'inherit' }}>Setting</Text>
                        </Col>
                    </Row>
                    <Divider style={{ with: 200 }}></Divider>
                    <Row>
                        <Col span={24} className="xs-py-10 xs-px-20" onClick={() => setTabFocus(0)}>
                            <Text strong>Logout</Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )

    return (
        <Col span={7}>
            <Card style={{ padding: 0 }}>
                <Row justify="center">
                    <Avatar src="https://via.placeholder.com/300" size={100} style={{ borderRadius: '100px' }}>
                    </Avatar>
                    <Title level={5} style={{ width: '100%', textAlign: 'center', marginBottom: 0 }} className="lg-mt-10">Felicia Kurnia Sasongko</Title>
                    <Text style={{ width: 200, textAlign: 'center' }} className="lg-mt-10">Joined 2021</Text>
                </Row>
                <Divider style={{ width: 200 }}></Divider>
                <Row>
                    <Col span={24} style={{ backgroundColor: 'var(--primaryColor)' }} className="xs-py-5" onClick={() => setTabFocus(0)}>
                        <Text strong className="active">Profile</Text>
                    </Col>
                    <Col span={24} style={{ backgroundColor: 'var(--primaryColor)' }} className="xs-py-5" onClick={() => setTabFocus(1)}>
                        <Text strong>Reviews by me</Text>
                    </Col>
                    <Col span={24} style={{ backgroundColor: 'var(--primaryColor)' }} className="xs-py-5" onClick={() => setTabFocus(2)}>
                        <Text strong>Setting</Text>
                    </Col>
                </Row>
                <Divider style={{ with: 200 }}></Divider>
                <Text>Logout</Text>
            </Card>
        </Col>
    )
}