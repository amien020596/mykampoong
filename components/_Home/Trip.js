import Button from 'antd/lib/button'
import Typography from 'antd/lib/typography'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography

function Trip() {
  const { t } = useTranslation('common')
  return (
    <div className='wrapper f f-ctr mdl'>
      <style jsx>
        {`
          .wrapper {
            background: #14B8A6;
            padding: 92px 0;
          }
          .image img {
            width: 90%;
            margin-bottom: -40px;
          }
        `}
      </style>
      <div className='container f mdl f-btw'>
        <div>
          <Title style={{ color: '#fff' }}>{t("Travel as you wish")}</Title>
          <Text
            style={{
              fontSize: 18,
              maxWidth: 478,
              display: 'block',
              color: 'var(--gray50)',
              lineHeight: 1.75
            }}
          >
            {t("Whatever you wish to experiences in your stay in Gianyar, you simply choose your activity. It ranges from your stay to your culinary. It is all in your finger tip.")}
          </Text>
          <Button ghost style={{ marginTop: 32 }}>{t("Create your trip")}</Button>
        </div>
        <div className='image'>
          <img src='/images/trip.svg' />
        </div>
      </div>
    </div>
  )
}

export default Trip