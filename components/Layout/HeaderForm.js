import { LeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
export default function HeaderForm() {
  const router = useRouter();

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
          Back
        </a>
        <div>
          <Button
            style={{
              marginRight: 12,
              minWidth: 120
            }}
          >
            Cancel
          </Button>
          <Button 
            type='primary'
            style={{
              minWidth: 120
            }}
          >
            Publish
          </Button>
        </div>
      </div>
    </div>
  )
}