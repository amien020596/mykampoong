import Button from 'antd/lib/button'
import { LeftOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next';

export default function HeaderForm() {
  const router = useRouter();
  const { t } = useTranslation()
  return (
    <div className='header'>
      <style jsx>
        {`
          .back {
            font-size: 16px;
            font-weight: 500;
            color: var(--gray600);
          }
        `}
      </style>
      <div className='container f f-btw mdl'>
        <a onClick={() => router.back()} className='back'>
          <LeftOutlined
            style={{
              marginRight: 12
            }}
          />
          {t("Back")}
        </a>
        <div>
          <Button
            style={{
              marginRight: 12,
              minWidth: 120
            }}
          >
            {t("Cancel")}
          </Button>
          <Button
            type='primary'
            style={{
              minWidth: 120
            }}
          >
            {t("Publish")}
          </Button>
        </div>
      </div>
    </div>
  )
}