import Button from 'antd/lib/button'
import Checkbox from 'antd/lib/checkbox'
import ContentWrapper from 'components/_Dashboard/ContentWrapper'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import ServiceLocationModal from './ServiceLocationModal'
import ServiceSessionWrapper from './ServiceSessionWrapper'
import Typography from 'antd/lib/typography'
import { useServiceForm } from 'libs/hooks/serviceForm'
import { useTranslation } from 'next-i18next';

const { Title, Text } = Typography
const { Option } = Select

function ServiceFormWrapper() {
  const { t } = useTranslation('common')
  const { setLocationVisible } = useServiceForm.useContainer()
  return (
    <div className='form-container'>
      <Form layout='vertical'>
        <ContentWrapper>
          <div className='form-header-wrapper'>
            <Title level={3}>{t("Basic information")}</Title>
          </div>
          <Form.Item
            name='name'
          >
            <Input placeholder={`${t('Service name')}`} />
          </Form.Item>
          <Form.Item
            name='serviceType'
          >
            <Select mode='multiple' placeholder={`${t('Service type')}`}>
              <Option value='nature'>{t("Nature")}</Option>
              <Option value='sightseeing'>{t("Sightseeing")}</Option>
            </Select>
            <Text style={{ fontSize: 12 }} className='text'>{t("Any service may have multiple types up to")} <b>3</b></Text>
          </Form.Item>
          <Form.Item
            name='description'
          >
            <Input.TextArea placeholder='Service description' rows={5} />
          </Form.Item>
        </ContentWrapper>
        <ContentWrapper>
          <div className='form-header-wrapper'>
            <Title level={3}>{t("Service information")}</Title>
          </div>
          <Title className='form-title'>{t("Service category")}</Title>
          <Form.Item
            name='serviceCategory'
          >
            <Select placeholder={t("Service category")}>
              <Option value='experience'>{t("Experience")}</Option>
              <Option value='stay'>{t("Stay")}</Option>
              <Option value='package'>{t("Package")}</Option>
            </Select>
          </Form.Item>

          <Title className='form-title'>{t("Price")}</Title>
          <Form.Item
            name='price'
          >
            <Input placeholder={t('Price / person')} addonBefore='Rp' />
            <Text className='text' style={{ fontSize: 12 }}>{t("Please input price without using coma (,) or dot (.)")}</Text>
          </Form.Item>

          <Title className='form-title'>{t("Time")}</Title>
          <Checkbox>{t("This service has multiple sessions in a day")}</Checkbox>
          <ServiceSessionWrapper />
        </ContentWrapper>
        <ContentWrapper>
          <div className='form-header-wrapper'>
            <Title level={3}>{t("Images")}</Title>
            <Text className='text'><b>{t("Max size 10 Mb for each image")}</b></Text>
          </div>
          <Button
            className='btn-black'
            style={{
              minWidth: 175
            }}
          >
            {t("Add image")}
          </Button>
        </ContentWrapper>
        <ContentWrapper>
          <div className='form-header-wrapper'>
            <Title level={3}>{t("Location")}</Title>
            <Text className='text'>{t("The exact location of the service")}</Text>
          </div>
          <Button
            className='btn-black'
            onClick={() => setLocationVisible(true)}
            style={{
              minWidth: 175
            }}
          >
            {t("Add location")}
          </Button>
        </ContentWrapper>
        <ContentWrapper>
          <div className='form-header-wrapper'>
            <Title level={3}>{t("What's included")}</Title>
            <Text className='text'>{t("Attract the guest with any free ticket or even just a drink.")}</Text>
          </div>
          <Button
            className='btn-black'
            style={{
              minWidth: 175
            }}
          >
            {t("Add item")}
          </Button>
        </ContentWrapper>
      </Form>
      <ServiceLocationModal />
    </div >
  )
}


export default ServiceFormWrapper