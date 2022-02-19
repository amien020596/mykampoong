import { Tag, Typography } from 'antd'
const { Text } = Typography

export default function SubItem() {
  return (
    <div className='f' style={{margin: '20px 0'}}>
      <div style={{ width: '60%' }}>
        <div style={{ marginBottom: 8 }}>
          <Tag
            style={{
              background: 'var(--teal100)',
              color: 'var(--teal600)',
              border: 0,
              fontWeight: 500,
              letterSpacing: '.04em'
            }}
          >
            PACKAGE
            </Tag>
          <Text style={{ fontSize: 12 }}>·&nbsp; Mar 29 - Apr 1, 2021</Text>
        </div>
        <Text>
          Experience the beauty of Kanto Lampo Waterfall & Goa gajah
          </Text>
      </div>
      <div className='f f-c f-end' style={{width: '40%'}}>
        <Text style={{ fontSize: 16, fontWeight: 700, display: 'block' }}>Rp. 7.000.000</Text>
        <Text style={{ fontSize: 12, color: 'var(--gray500)' }}>Rp 3.500.000 x 2 guest</Text>
      </div>
    </div>
  )
}