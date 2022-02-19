import { LoadingOutlined } from '@ant-design/icons'

export default function Loading() {
  return (
    <div
      className='f f-ctr mdl f-c'
      style={{
        height: 'calc(100vh - 100px)'
      }}
    >
      <LoadingOutlined
        style={{
          fontSize: 32,
          color: 'var(--primaryColor)'
        }}
      />
    </div>
  )
}