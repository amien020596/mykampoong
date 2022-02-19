import { Modal, Avatar, Tag, Button, Typography } from "antd";
import { StarFilled } from '@ant-design/icons';
const { Text, Title } = Typography;
export default function ModalDetails({
  visible,
  onClose,
}) {
  return (
    <Modal
      visible={visible}
      title="Trip details"
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>
      ]}
    >
      <style jsx>
        {`
        .agenda-item {
          width: 100%;
          padding: 16px 28px;
          background: #fff;
          border-radius: 8px;
          border: solid 1px var(--gray200);
          margin-bottom: 16px;
        }
        .separator {
          height: 1px;
          width: 100%;
          background: var(--gray300);
          margin: 30px 0;
        }
        .trip-detail{

        }
        .details p{
          font-weight:800;
          margin-bottom:.5rem;
        }
        .details div:first-child{
          width:9rem;
          margin-right:1.5rem;
        }
        .details div:first-child p{
          font-weight:300;
        }
      `}
      </style>
      <div className="wrapper">
        <div className={`agenda-item`}>
          <div className='f mdl f-btw'>
            <div className='f mdl f-btw'>
              <Avatar size={50} src='/images/dump/felix-lam-J7fxkhtOqt0-unsplash2.jpg' shape='square' />
              <div className='f f-c f-start' style={{ marginLeft: 10 }}>
                <div>
                  <Tag type='experience' style={{ marginBottom: 5 }}>EXPERIENCE</Tag>
                  <Text style={{ color: 'var(--gray500)' }}>
                    <StarFilled style={{ color: 'var(--orange500)' }} /> {Number(2.34).toFixed(1)} ({2})
                  </Text>
                </div>
                <a className='underlined'>Kanto lampo waterfall</a>
              </div>
            </div>
            <div>
              <Button type="primary">View E-ticket</Button>
            </div>
          </div>
        </div>
        <div className="separator" />
        <div className="trip-detail">
          <Title level={3}>Trip</Title>
          <div className="details f f-start">
            <div>
              <p>Status</p>
              <p>Trip Dates</p>
              <p>Location</p>
              <p>Total guest</p>
            </div>
            <div>
              <p >Upcoming</p>
              <p>Tomorow, at 10.00 - 12.00</p>
              <p>Serongga, Kec. Gianyar, Kab.Gianyar, Bali</p>
              <p>2 Guest</p>
            </div>
          </div>
        </div>
        <div className="separator" />
        <div className="trip-detail">
          <Title level={3}>Payment</Title>
          <div className="details f f-start">
            <div>
              <p>Date purchased</p>
              <p>Invoice</p>
              <p>Payment method</p>
              <p>Save</p>
              <p>Total payment</p>
            </div>
            <div>
              <p>Mar 19 2021, 11.57</p>
              <p>INV/KAUHDAASD342</p>
              <p>OVO</p>
              <p>0</p>
              <p>Rp 1.500.000</p>
            </div>
          </div>
        </div>
        <div className="separator" />
        <div className="f f-c">
          <div className='f mdl f-btw'>
            <div className='f f-c f-start'>
              <Title level={3}>Hosted by Putu Mugira</Title>
              <Text style={{ color: 'var(--gray500)' }}> Joined since 2009</Text>
            </div>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </div>
          <div style={{ marginTop: 20 }} className="f f-c f-center" >
            <Text style={{ color: 'var(--gray800)', fontWeight: 800, marginBottom: 10 }}> Need Help? <span style={{ color: "var(--primaryColor)" }}>Contact MyKampoong Care</span></Text>
            <Button style={{ width: "100%" }}>Contact Host</Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}