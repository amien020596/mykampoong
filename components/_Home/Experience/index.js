import Item from './Item'
import Typography from 'antd/lib/typography'
import { useTranslation } from 'next-i18next';

const { Title } = Typography
function Experience() {
  const { t } = useTranslation('common')
  return (
    <div className='wrapper'>
      <style jsx>
        {`
          .wrapper {
            padding: 92px 0;
          }
        `}
      </style>
      <div className='container'>
        <Title style={{ textAlign: 'center', color: 'var(--gray800)' }}>Gianyar</Title>
        <Title level={3} style={{ textAlign: 'center', fontWeight: 400, marginTop: 0, color: 'var(--gray800)' }}>{t("The answer of your ultimate experience")}</Title>
        <div className='f mdl' style={{ width: 'calc(100% + 20px)', margin: '60px -10px 0' }}>
          <Item img='/images/dump/taylor-simpson-Z8s3PRQVuUk-unsplash.jpg' title='Guest house & Homestay' />
          <Item img='/images/dump/omer.jpg' title='Hotel and Resort' />
          <Item img='/images/dump/scott-goodwill-y8Ngwq34_Ak-unsplash.jpg' title='Outdoor' />
        </div>
      </div>
    </div>
  )
}

export default Experience