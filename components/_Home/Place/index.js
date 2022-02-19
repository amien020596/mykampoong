import Box from './Box'
import Button from 'antd/lib/button'
import Typography from 'antd/lib/typography'
import { useHome } from 'libs/hooks/home'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography
function Place(
) {
  const { t } = useTranslation("common")
  const { data } = useHome.useContainer()
  const section = data.sectionFive
  return (
    <div className='wrapper'>
      <style jsx>
        {`
          .wrapper {
            background: var(--gray800);
            padding: 92px 0;
          }
          .image {
            max-width: 555px;
            width: 100%;
            height: 482px;
            overflow: hidden;
            border-radius: 8px;
            margin-right: 65px;
          }
          .image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
      <div className='container f mdl'>
        <div className='image'>
          <img src={section.image.file_path + section.image.filename} />
        </div>
        <div>
          <Title style={{ color: '#fff' }}>{section.title}</Title>
          <Text
            style={{
              fontSize: 18,
              maxWidth: 546,
              display: 'block',
              color: 'var(--gray50)',
              lineHeight: 1.75
            }}
          >
            {section.description}
          </Text>
          <Button ghost style={{ marginTop: 32 }}>{t("Explore")} {section.title}</Button>
          <div className='f f-w' style={{ width: 'calc(100% + 12px)', margin: '65px -6px 0' }}>
            {
              section.count_travel_object.map(i =>
                <Box
                  title={`${i.count_service}+`}
                  description={i.name}
                  key={i.id}
                />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Place