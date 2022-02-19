import Col from 'antd/lib/col'
import Divider from 'antd/lib/divider'
import ProfileCard from './ProfileCard'
import ProfileContext from 'libs/hooks/profile'
import ProfileForm from './ProfileForm'
import Review from './Review'
import Row from 'antd/lib/row'
import Select from 'antd/lib/select'
import Setting from './Setting'
import { TABS } from 'components/_Profile/consts/index'
import Typography from 'antd/lib/typography'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography
const { Option } = Select

const Profile = (
) => {
    const { t } = useTranslation('common')
    const { tabFocus } = ProfileContext.useContainer()

    return (
        <div className="container" style={{ marginBottom: 179 }}>
            <Row className="xs-mt-100">
                <Col>
                    <Title level={3}>{t("Account")}</Title>
                </Col>
            </Row>

            <Row className="lg-mt-25">
                <ProfileCard />
                <Col span={1}>
                    <Divider type="vertical"></Divider>
                </Col>
                {tabFocus == TABS.TOGGLE_PROFILE && <ProfileForm />}
                {tabFocus == TABS.TOGGLE_REVIEW && <Review />}
                {tabFocus == TABS.TOGGLE_SETTING && <Setting />}
            </Row>
        </div>
    )
}


export default Profile