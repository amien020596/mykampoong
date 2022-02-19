import { Breadcrumb } from 'antd'
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
    <Breadcrumb separator={<RightOutlined/>}>
      <Breadcrumb.Item>
        <a href="" className='link'>Gianyar, Bali</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="" className='link'>Service</a>
      </Breadcrumb.Item>
    </Breadcrumb>
    </>
  )
}