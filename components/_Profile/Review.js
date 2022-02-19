import Col from 'antd/lib/col'
import Divider from 'antd/lib/divider'
import Row from 'antd/lib/row'
import Typography from 'antd/lib/typography'
import { useTranslation } from 'next-i18next';

const { Text } = Typography
const Review = () => {
    const { t } = useTranslation('common')
    let component = [];
    let i = 0

    return (
        <Col span={16}>
            {(() => {
                for (i; i <= 2; i++) {
                    component.push(
                        <Row key={i} className="lg-ml-20">
                            <Col span={24}>
                                <Row gutter={12}>
                                    <Col>
                                        <img src="https://via.placeholder.com/45" style={{ borderRadius: 45 }} alt="" />
                                    </Col>
                                    <Col>
                                        <h4>Felicia Kurniawati Sasongko</h4>
                                        <p>4/5 - a month ago</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <p>
                                        The communication was easy, pick up on time at the agreed location. Our guide Diana was really friendly, helpful and knowledgable
                                    </p>
                                </Row>
                                <Row justify="end">
                                    <Col span={12}>
                                        <Text strong style={{ color: 'var(--primaryColor)' }}>
                                            {t("Read More")}
                                        </Text>
                                    </Col>
                                    <Col span={12}>
                                        <Text>
                                            3 Days in Paradise - Bali Complete Package
                                        </Text>
                                    </Col>
                                    <Divider></Divider>
                                </Row>
                            </Col>
                        </Row>
                    )
                }
                return component
            })()}

        </Col>
    )
}

export default Review