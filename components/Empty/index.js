import Button from 'antd/lib/button'
import Link from 'next/link'

export default function Empty({ btnText, btnLink }) {
  return (
    <div
      className='f f-ctr mdl f-c wrapper'
    >
      <style jsx>
        {`
          .wrapper {
            background: #fff;
            min-height: 70vh;
            border-radius: 8px;
            border: solid 1px var(--gray200);
          }
        `}
      </style>
      <img
        src='/images/icon/no-files.svg'
        style={{
          marginBottom: 30
        }}
      />
      <Link href={btnLink || '/'}>
        <Button
          className='btn-black'
          style={{
            minWidth: 220
          }}
        >
          {btnText}
        </Button>
      </Link>
    </div>
  )
}