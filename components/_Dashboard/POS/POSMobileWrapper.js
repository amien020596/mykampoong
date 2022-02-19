import { Select, Form } from 'antd'
import { usePOS } from 'libs/hooks/pos'
import POSProductItem from './POSProductItem'
import POSAction from './POSAction'
const { Option } = Select

export default function POSMobileWrapper({ products }) {
  const { data } = usePOS.useContainer()
  return (
    <div className='container'>
      <div style={{ padding: '22px 0 0' }}>
        <Form layout='vertical'>
          <Form.Item
            label='View'
            initialValue={'1'}
          >
            <Select defaultValue='1'>
              <Option key='1' value='1'>All products</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
      { products.map(i => <POSProductItem key={i.id} product={i} />)}
      { data.length > 0 && <POSAction />}
    </div>
  )
}