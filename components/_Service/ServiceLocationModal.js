import { Modal, Input, Button, Typography } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useServiceForm } from 'libs/hooks/serviceForm'
const { Text } = Typography
export default function ServiceLocationModal() {
  const { locationVisible, setLocationVisible } = useServiceForm.useContainer()
  return (
    <Modal
      visible={locationVisible}
      title='Add location'
      width={640}
      okText='Save location'
      onCancel={() => setLocationVisible(false)}
      okButtonProps={{ disabled: true }}
    >
      <div className='f f-ctr mdl'>
        <div
          className='search-wrapper'
          style={{
            margin: 0
          }}
        >
          <Input
            placeholder='Search location'
            style={{ maxWidth: 431 }}
          />
          <Button
            className='btn-black'
            style={{
              height: 36,
              padding: '0 10px',
              position: 'absolute',
              right: 8,
              top: 8
            }}
          >
            <SearchOutlined />
          </Button>
        </div>
      </div>
      <br />
      <Text>Selected location:  <b>South Batur, Kintamani, Bangli Regency, Bali</b></Text>
    </Modal>
  )
}