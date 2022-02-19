import TailorItem from './TailorItem'
import Typography from 'antd/lib/typography'
import { useTranslation } from 'next-i18next';

const { Title } = Typography

function Tailor() {
  const { t } = useTranslation('common');
  return (
    <div className='container' style={{ padding: '92px 0' }}>
      <Title level={1}>{t("Tailor made trip as your needs, that’s")} <span style={{ color: 'var(--primaryColor)', textDecoration: 'underline' }}>{t("Package")}</span></Title>
      <div className='f mdl f-sar' style={{ marginTop: 50 }}>
        <TailorItem img='/images/slice1@3x.png' title={t('Checkin')} description={t('Today', { time: "11.00" })} />
        <TailorItem img='/images/slice2@3x.png' title={t('Experience')} description={t('Today', { time: "15.00" })} />
        <TailorItem img='/images/slice3@3x.png' title={t('More Experience')} description={t('Tomorrow', { time: "10.00" })} />
        <TailorItem img='/images/slice4@3x.png' title={t('Checkout')} description={t('Day after tomorrow', { time: "13.00" })} />
      </div>
    </div>
  )
}

export default Tailor