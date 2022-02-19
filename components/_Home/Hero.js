import Button from 'antd/lib/button'
import { EnvironmentOutlined } from '@ant-design/icons'
import Typography from 'antd/lib/typography'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useHome } from 'libs/hooks/home'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

function Hero() {
  const { t } = useTranslation()
  
  const { data } = useHome.useContainer()
  const section = data.sectionOne
  return (
    <div className='wrapper container f mdl f-btw'>
      <style jsx>
        {`
          .wrapper {
            padding: 28px 0;
          }
          .hero-img {
            width: 499px;
            height: 618px;
            overflow: hidden;
            border-radius: 8px;
            position: relative;
          }
          .hero-img .location {
            position: absolute;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px 15px 20px;
            background: #fff;
            border-radius: 8px;
          }
          .hero-img .location a {
            color: #52525B;
            text-decoration: underline
          }
          .hero-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
      <div>
        <Title style={{ fontSize: 48, maxWidth: '80%' }}>{t(`${section.title}`)}</Title>
        <Text
          style={{
            fontSize: 18,
            maxWidth: 478,
            display: 'block',
            lineHeight: 1.75
          }}
        >
          {t(`${section.description}`)}
        </Text>

        <Button type='primary' style={{ marginTop: 28 }}>{t("Explore package")}</Button>
      </div>
      <div className='hero-img'>
        <img src={section.slider[0].file_path + section.slider[0].filename} />
        <div className='location '>
          <EnvironmentOutlined style={{ fontSize: 18, marginRight: 5 }} />
          <a>Merese Hill, Lombok</a>
        </div>
      </div>
    </div>
  )
}

export default Hero