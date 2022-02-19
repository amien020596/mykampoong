import Button from 'antd/lib/button'
import Col from 'antd/lib/col'
import Divider from 'antd/lib/divider'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Row from 'antd/lib/row'
import Select from 'antd/lib/select'
import Switch from 'antd/lib/switch'
import Typography from 'antd/lib/typography'
import axios from 'axios'
import { changePassword } from 'modules/profile/post-profile'
import { countBy } from 'lodash'
import { message } from 'antd'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const { Title, Text } = Typography
const { Option } = Select

const Setting = () => {
    const [form] = Form.useForm();
    const { t } = useTranslation('common')
    const router = useRouter();

    const titleOptions = [
        { text: 'English - USD', value: 'en' },
        { text: 'Indonesia - IDR', value: 'id' }
    ]
    const onChange = (val) => {
        const { locales, locale: activeLocale } = router

        router.push(router.route, router.asPath, { locale: val })

    }

    const onChangePassword = (values) => {

        changePassword(values).then(response => {
            console.log("response", response)
            if (response.success) {
                message.info("update password success")
            } else {
                console.log("response length", response.errors?.length > 0)
                if (response.errors?.length > 0) {
                    message.warning(response.errors[0]);
                } else {
                    message.error("Internal server error, please try again later!")
                }
            }

        }).catch(error => {

        })
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <style jsx>
                {`
                    .ant-switch-checked {
                        background-color: var(--orange50) !important
                    }
                `}
            </style>
            <Col span={16}>
                <Form layout="vertical" className="lg-ml-20">
                    <Row gutter={8}>
                        <Col span={24} className="xs-mb-10">
                            <Title level={5}>{t('Language and Currency')}</Title>
                        </Col>
                        <Col span={24} className="xs-mt-10">
                            <Form.Item label="Title" name="title" initialValue={"en"}>
                                <Select onChange={onChange}>
                                    {titleOptions.map(e => <Option value={e.value} key={e.value}>{e.text}</Option>)}
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Divider></Divider>
                        </Col>
                        <Col span={24}>
                            <Title level={5}>{t("Email Notification")}</Title>
                        </Col>
                        <Col span={24} className="xs-mt-10" >
                            <Row justify="end">
                                <Col span={12}>
                                    <Text>
                                        {t("About My Trip")}
                                    </Text>
                                </Col>
                                <Col span={12} style={{ textAlign: 'right' }}>
                                    <Switch defaultChecked />
                                </Col>
                            </Row>
                            <Row justify="end" className="xs-mt-5">
                                <Col span={12}>
                                    <Text>
                                        {t("My Kampoong discount and promos")}
                                    </Text>
                                </Col>
                                <Col span={12} style={{ textAlign: 'right' }}>
                                    <Switch defaultChecked />
                                </Col>
                            </Row>
                        </Col>

                        <Col span={24}>
                            <Divider></Divider>
                        </Col>
                    </Row>
                </Form>
                <Form layout="vertical" className="lg-ml-20" name="change_password"
                    onFinish={onChangePassword} scrollToFirstError>
                    <Row gutter={8}>
                        <Col span={24}>
                            <Title level={5}>{t("new_password")}</Title>
                        </Col>
                        <Col span={24} className="xs-mt-10">
                            <Form.Item label={t("new_password")}
                                name="new_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your new Password!',
                                    },
                                ]}
                            >
                                <Input placeholder={t("Type your new password")} type="password"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Title level={5}>{t("confirm_password")}</Title>
                        </Col>
                        <Col span={24} className="xs-mt-10">
                            <Form.Item label={t("confirm_password")} name="new_password_confirmation"
                                dependencies={['new_password']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your confirm Password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('new_password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        },
                                    }),
                                ]}>
                                <Input placeholder={t("Type confirm password")} type="password"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Title level={5}>{t("current_password")}</Title>
                        </Col>
                        <Col span={24} className="xs-mt-10">
                            <Form.Item label={t("current_password")}
                                name="current_password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your current Password!',
                                    },
                                ]}>
                                <Input placeholder={t('Type current password')} type="password"></Input>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Row justify="end">
                                <Button htmlType="submit">{t("Change Password")}</Button>
                            </Row>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </>
    )
}


export default Setting