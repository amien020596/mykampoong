import Button from 'antd/lib/button'
import Col from 'antd/lib/col'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import ProfileContext from 'libs/hooks/profile'
import Row from 'antd/lib/row'
import Select from 'antd/lib/select'
import Typography from 'antd/lib/typography'
import { useTranslation } from 'next-i18next';

const { Title } = Typography
const { Option } = Select

const titleOptions = [
    { text: 'Mr.', value: "Mr" },
    { text: 'Mrs. ', value: "Mrs" },
    { text: 'Miss. ', value: "Miss" },
]

const ProfileForm = () => {
    const { userData } = ProfileContext.useContainer()
    const { t } = useTranslation('common')
    const countryCodes = [
        { text: 'Indonesia (+62)', value: 1 }
    ]

    return (
        <Col span={16}>
            <Form layout="vertical" className="lg-ml-20" >
                <Row gutter={8}>
                    <Col span={24} className="xs-mb-10">
                        <Title level={5}>{t("Profile")}</Title>
                    </Col>
                    <Col span={8}>
                        <Form.Item label={t("Title")}>
                            <Select
                                defaultValue={"Mr"}
                            >
                                {titleOptions.map(element => <Select.Option value={element.value} key={element.value}> {t(element.text)}</Select.Option>)}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={16}>
                        <Form.Item label={t("Fullname")} name="fullname">
                            <Input placeholder="Username" ></Input>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item label="E-mail" >
                            <Input placeholder="feliciakurnia@gmail.com" value={userData?.email || ""}></Input>
                        </Form.Item>
                    </Col>
                    <Col span={10}>
                        <Form.Item label={t("Country Codes")} initialValue={countryCodes[0].value}>
                            <Select>
                                {countryCodes.map(e => <Option value={e.value} key={e.value}>{e.text}</Option>)}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={14}>
                        <Form.Item >
                            <Input placeholder={t("Phone Number")} type="number" value={userData?.phone_number || ""}></Input>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Input placeholder={t("Passport / No KTP")} type="number"></Input>
                        </Form.Item>
                    </Col>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button style={{ backgroundColor: 'var(--primaryColor)', color: 'whitesmoke' }}>
                            {t("update")}
                        </Button>
                    </Col>
                </Row >
            </Form >
        </Col >
    )
}


export default ProfileForm