import Form from 'antd/lib/form'
import Select from 'antd/lib/select'
import Typography from 'antd/lib/typography'

const { Text } = Typography
const { Option } = Select

export default function ServiceSessionInput({ title, form }) {
  return (
    <div
      className='f mdl'
      style={{
        width: '100%',
        margin: '20px 0'
      }}
    >
      <Text
        style={{
          minWidth: 147,
          fontWeight: 500,
          margin: 0
        }}
        className='agenda-item-title'
      >
        {title}
      </Text>
      <div className='f mdl' style={{ width: '100%' }}>
        <Form.Item
          name={form[0].key}
          label={form[0].title}
          initialValue={form[0].menu[0].value}
          style={{
            width: '50%',
            margin: '0 12px 0 0',
          }}
        >
          <Select disabled={form[0].disabled}>
            {
              form[0].menu.map(i => <Option value={i.value} key={i.value}>{i.title}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item
          name={form[1].key}
          label={form[1].title}
          initialValue={form[1].menu[0].value}
          style={{
            width: '50%',
            margin: 0
          }}
        >
          <Select disabled={form[1].disabled}>
            {
              form[1].menu.map(i => <Option value={i.value} key={i.value}>{i.title}</Option>)
            }
          </Select>
        </Form.Item>
      </div>
    </div>
  )
}