import { useEffect, useState } from 'react'

import Avatar from 'antd/lib/avatar'
import Card from 'antd/lib/card'
import Col from 'antd/lib/col'
import Divider from 'antd/lib/divider'
import Link from 'next/link'
import ProfileContext from 'libs/hooks/profile'
import Row from 'antd/lib/row'
import Select from 'antd/lib/select'
import { TABS } from 'components/_Profile/consts/index'
import Typography from 'antd/lib/typography'
import { destroyToken } from 'libs/helpers/auth'
import router from 'next/router'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography
const defaultImage = '/images/user_icon_default.webp';
const styleTab = {
    cursor: "pointer"
}

const ProfileCard = () => {
    const { userData, tabFocus, setTabFocus } = ProfileContext.useContainer()
    const [srcImage, setSrcImage] = useState(null)
    const [name, setName] = useState("-")

    const { t } = useTranslation('common')

    const activeStyleTab = { backgroundColor: 'var(--orange25)', color: 'var(--primaryColor)', cursor: "pointer" }

    function logout() {
        destroyToken()
        router.push('/')
        return;
    }
    useEffect(() => {
        if (userData.profile_photo_url) {
            setSrcImage(userData?.profile_photo_url)
        }
        if (userData.name) {
            setName(userData?.name)
        }
    }, [userData])

    function onErrorLoad() {
        setSrcImage(defaultImage)
    }
    const toMyTrip = () => router.push('/mytrip')

    return (
        <Col span={6}>
            <Row>
                <Col span={24} style={{ border: '1px solid rgba(0,0,0,.15)', borderRadius: 5 }}>
                    <Row justify="center xs-mt-30">
                        <img onError={onErrorLoad} src={srcImage} style={{ width: 100, borderRadius: '100px' }} />
                        <Title level={5} style={{ width: '100%', textAlign: 'center', marginBottom: 0, textTransform: "capitalize" }} className="lg-mt-10">{name}</Title>
                        <Text style={{ width: 200, textAlign: 'center' }} className="lg-mt-10">{t("Joined")} 2021</Text>
                    </Row>
                    <Divider className="xs-px-20" style={{ width: 200, marginBottom: 10 }}></Divider>
                    <Row>
                        <Link href={'/mytrip'} >
                            <Col span={24} style={tabFocus == TABS.TOGGLE_MYTRIP ? activeStyleTab : styleTab} className="xs-py-10 xs-px-20" >
                                <Text strong style={{ color: 'inherit' }}>{t("My trip")}</Text>
                            </Col>
                        </Link>
                        <Col span={24} style={tabFocus == TABS.TOGGLE_PROFILE ? activeStyleTab : styleTab} className="xs-py-10 xs-px-20" onClick={() => setTabFocus(1)}>
                            <Text strong style={{ color: 'inherit' }}>{t("Profile")}</Text>
                        </Col>
                        <Col span={24} style={tabFocus == TABS.TOGGLE_REVIEW ? activeStyleTab : styleTab} className="xs-py-10 xs-px-20" onClick={() => setTabFocus(2)}>
                            <Text strong style={{ color: 'inherit' }}>{t("Reviews by me")}</Text>
                        </Col>
                        <Col span={24} style={tabFocus == TABS.TOGGLE_SETTING ? activeStyleTab : styleTab} className="xs-py-10 xs-px-20" onClick={() => setTabFocus(3)}>
                            <Text strong style={{ color: 'inherit' }}>{t("Setting")}</Text>
                        </Col>
                    </Row>
                    <Divider style={{ with: 200, marginTop: 10, marginBottom: 10 }}></Divider>
                    <Row>
                        <Col span={24} className="xs-py-10 xs-px-20" style={{ cursor: "pointer" }} onClick={() => logout()}>
                            <Text strong>{t("Logout")}</Text>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    )
}




export default ProfileCard