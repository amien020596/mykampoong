import { currency, parseNumber } from 'libs/helpers/parser/parser'

import Button from 'antd/lib/button'
import { DeleteOutlined } from '@ant-design/icons'
import Tag from 'antd/lib/tag'
import Typography from 'antd/lib/typography'
import { format } from 'date-fns'

const { Text } = Typography

export default function SubItem({ ...props }) {


  const { vacation, service, page } = props

  function totalPrice() {

    if (page === "checkout") {
      // if page loaded is in checkout page then use this price view

      if (service === 'service') {
        if (vacation?.total_price_with_fee) {
          return currency(vacation?.total_price_with_fee)
        }
        return currency(vacation?.price);
      }
      return currency(vacation?.total_price_with_fee || 0)
    }

    // if page loaded is not in checkout page then use this price view
    if (service === 'service') {
      return currency(vacation?.price);
    }
    return currency(vacation?.total_price || 0)

  }

  // view price is in the below total price
  function viewPrice() {
    if (service === 'staycation') {
      return `Rp. ${parseNumber(vacation?.price)} x ${vacation.total_guest} guests`;
    }
    if (service === 'service') {
      return `Rp. ${parseNumber(vacation?.price)}`;
    }
    return `Rp. ${parseNumber(vacation?.total_price)} x ${vacation.total_guest} guests`;
  }

  return (
    <div className='f f-r'>
      <div className='f f-c' style={{ margin: '20px 0', width: "100%" }}>
        {/* <div className='f f-r'> */}

        <div>
          <div className='f f-r'>
            <div style={{ marginBottom: 8 }} style={{ width: '60%' }}>
              <Tag
                style={{
                  background: 'var(--teal100)',
                  color: 'var(--teal600)',
                  border: 0,
                  fontWeight: 500,
                  letterSpacing: '.04em'
                }}
              >
                {service || `PACKAGE`}
              </Tag>
              <Text style={{ fontSize: 12 }}>{`· ${format(new Date(vacation?.start_date), "MMM d")} - ${format(new Date(vacation?.end_date), "MMM d, Y")}`}</Text>
            </div>

            <div style={{ width: '40%' }}>
              <Text style={{ fontSize: 16, fontWeight: 700, display: 'block' }}>
                {totalPrice()}
              </Text>
            </div>

          </div>
        </div>

        <div>
          <div className='f f-r'>
            <div style={{ marginBottom: 8 }} style={{ width: '60%' }}>
              <Text>
                {vacation?.travel_object?.name}
              </Text>
            </div>

            <div style={{ width: '40%' }}>
              <Text style={{ fontSize: 12, marginTop: 5, color: 'var(--gray500)' }}>{viewPrice()}</Text>
            </div>
          </div>
        </div>
        <div>
          <div className='f f-r'>
            <div style={{ marginBottom: 8 }} style={{ width: '60%' }}>
              {page === "checkout" && <Text>
                Administration Fee
              </Text>}
            </div>

            <div style={{ width: '40%' }}>
              {page === "checkout" && <Text style={{ fontSize: 12, marginTop: 5, color: 'var(--gray500)' }}>{`Rp. ${parseNumber(vacation?.platform_fee)}`}</Text>}
            </div>
          </div>
        </div>

      </div >
      <div className="f mdl" >
        {
          props.deleteCartList ? <div>
            <Button icon={<DeleteOutlined />} size={"small"} onClick={() => props.deleteCartList(vacation.id)} />
          </div> : null
        }
      </div>
    </div>
  )
}