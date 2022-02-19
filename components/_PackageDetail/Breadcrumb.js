import Breadcrumb from 'antd/lib/breadcrumb'
import { RightOutlined } from '@ant-design/icons'

export default function History() {
  return (
    <>
      <style jsx>
        {`
        .link {
          text-decoration: underline;
          color: var(--gray600)
        }
      `}
      </style>
      <Breadcrumb separator={<RightOutlined />}>
        <Breadcrumb.Item>
          <a href="" className='link'>Bali</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="" className='link'>Package</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Details</Breadcrumb.Item>
      </Breadcrumb>
    </>
  )
}