import {
  Typography,
  Button,
  Input,
  Form,
  Select,
  Checkbox
} from 'antd'
import { useServiceForm } from 'libs/hooks/serviceForm'
import ContentWrapper from 'components/_Dashboard/ContentWrapper'
import ServiceSessionWrapper from './ServiceSessionWrapper'
import ServiceLocationModal from './ServiceLocationModal'
const { Title, Text } = Typography
const { Option } = Select

export default function ServiceFormWrapper() {
  const { setLocationVisible } = useServiceForm.useContainer()
  return (
      <div className='form-container'>
        <Form layout='vertical'>
          <ContentWrapper>
            <div className='form-header-wrapper'>
              <Title level={3}>Basic information</Title>
            </div>
            <Form.Item
              name='name'
            >
              <Input placeholder='Service name' />
            </Form.Item>
            <Form.Item
              name='serviceType'
            >
              <Select mode='multiple' placeholder='Service type'>
                <Option value='nature'>Nature</Option>
                <Option value='sightseeing'>Sightseeing</Option>
              </Select>
              <Text style={{ fontSize: 12 }} className='text'>Any service may have multiple types <b>up to 3</b></Text>
            </Form.Item>
            <Form.Item
              name='description'
            >
              <Input.TextArea placeholder='Service description' rows={5} />
            </Form.Item>
          </ContentWrapper>
          <ContentWrapper>
            <div className='form-header-wrapper'>
              <Title level={3}>Service information</Title>
            </div>
            <Title className='form-title'>Service category</Title>
            <Form.Item
              name='serviceCategory'
            >
              <Select placeholder='Service category'>
                <Option value='experience'>Experience</Option>
                <Option value='stay'>Stay</Option>
                <Option value='package'>Package</Option>
              </Select>
            </Form.Item>

            <Title className='form-title'>Price</Title>
            <Form.Item
              name='price'
            >
              <Input placeholder='Price / person' addonBefore='Rp' />
              <Text className='text' style={{ fontSize: 12 }}>Please input price without using coma (,) or dot (.)</Text>
            </Form.Item>

            <Title className='form-title'>Time</Title>
            <Checkbox>This service has multiple sessions in a day</Checkbox>
            <ServiceSessionWrapper />
          </ContentWrapper>
          <ContentWrapper>
            <div className='form-header-wrapper'>
              <Title level={3}>Images</Title>
              <Text className='text'>Max size <b>10 Mb</b> for each image · <b>0/9</b> images uploaded</Text>
            </div>
            <Button
              className='btn-black'
              style={{
                minWidth: 175
              }}
            >
              Add image
        </Button>
          </ContentWrapper>
          <ContentWrapper>
            <div className='form-header-wrapper'>
              <Title level={3}>Location</Title>
              <Text className='text'>The exact location of the service</Text>
            </div>
            <Button
              className='btn-black'
              onClick={() => setLocationVisible(true)}
              style={{
                minWidth: 175
              }}
            >
              Add location
        </Button>
          </ContentWrapper>
          <ContentWrapper>
            <div className='form-header-wrapper'>
              <Title level={3}>What's included</Title>
              <Text className='text'>Attract the guest with any free ticket or even just a drink.</Text>
            </div>
            <Button
              className='btn-black'
              style={{
                minWidth: 175
              }}
            >
              Add item
        </Button>
          </ContentWrapper>
        </Form>
        <ServiceLocationModal />
      </div>
  )
}