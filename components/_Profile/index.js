import { Typography, Row, Col, Divider, Select } from 'antd'
import ProfileContext from 'libs/hooks/profile'

import { TABS } from 'components/_Profile/consts/index'
import ProfileForm from './ProfileForm'
import ProfileCard from './ProfileCard'
import Review from './Review'
import Setting from './Setting'

const { Title, Text } = Typography
const { Option } = Select

export default function Profile() {
    const { tabFocus } = ProfileContext.useContainer()
    
    return (
        <div className="container">
            <Row className="xs-mt-150">
                <Col>
                    <Title level={3}>Account</Title>
                </Col>
            </Row>

            <Row className="lg-mt-25">
                <ProfileCard/>
                <Col span={1}>
                    <Divider type="vertical"></Divider>
                </Col>
                {tabFocus == TABS.TOGGLE_PROFILE && <ProfileForm/>}
                {tabFocus == TABS.TOGGLE_REVIEW && <Review/>}
                {tabFocus == TABS.TOGGLE_SETTING && <Setting/>}
            </Row>
        </div>
    )
}
