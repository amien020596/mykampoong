import React, { useState } from 'react';

import AddDates from './AddDates';
import AddGuest from './AddGuest';
import Button from 'antd/lib/button'
import Card from 'antd/lib/card'
import Drawer from 'antd/lib/drawer'
import Scrollbars from "react-custom-scrollbars";
import { ShareAltOutlined } from '@ant-design/icons';
import Skeleton from 'antd/lib/skeleton'
import Space from 'antd/lib/space';
import Typography from 'antd/lib/typography'
import { useExperience } from 'libs/hooks/experience';

const { Text, Paragraph } = Typography





const CardItem = () => {

  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function ShareButton() {
    return (
      <div style={{ width: "auto" }} className={`f mdl`}>
        <style jsx>
          {`
          margin-left:25px;
          `}
        </style>
        <ShareAltOutlined style={{ marginRight: 10 }} key="share" />
        <Text >Share This Info</Text>
      </div>
    )
  }

  return (
    <Card
      style={{ width: "calc(100% - 10px)", marginTop: 16 }}
      actions={[
        ShareButton()
      ]}
    >
      <Skeleton loading={loading} avatar active>
        <div className={`f f-btw`}>
          <div className={`f f-c`}>
            <div>
              <Text >02.00 - 05.00</Text>
              <Paragraph>$19 / orang</Paragraph>
            </div>
            <div>
              <Text>Pesan untuk grup pribadi</Text>
              <Paragraph>Diselenggarakan dalam bahasa Inggris dan Spanyol</Paragraph>
            </div>
          </div>
          <div>
            <Button type="primary" disabled={disabled}>{`${disabled ? 'Sold out' : 'Pilih'}`}</Button>
          </div>
        </div>
      </Skeleton>
    </Card>
  )
}
const dataDummy = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }, { id: "8" }, { id: "9" }, { id: "11" }, { id: "10" }]

export function DrawerExperience({ ...props }) {
  const { data } = props;

  const { visibleDrawer, setVisibleDrawer } = useExperience.useContainer()

  const onClose = () => {
    setVisibleDrawer(false);
  };

  return (
    <>
      <style jsx>
        {`
          .left {
            width: 100%;
            margin-bottom: 70px;
            max-width: calc(100% - 653px);
          }
          .right {
            max-width: 653px;
            width: 100%;
            margin-left:50px;
          }
          .separator {
            height: 1px;
            width: 100%;
            background: var(--gray300);
            margin: 30px 0;
          }
        `}
      </style>
      <Drawer
        title={data.name}
        placement="bottom"
        height={"bottom"}
        onClose={onClose}
        visible={visibleDrawer}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >

        <div className="container">
          <div className="f">
            <div className="left">
              <div style={{ margin: '20px 0 10px' }} className='f mdl'>
                <AddGuest />
                <AddDates />
              </div>
              <div className='separator' />
              <div style={{ marginBottom: "10px" }}>
                <Text>
                  Hubungi Ricardo untuk tanggal dan waktu yang tidak tercantum, atau jika Anda ingin memesan untuk grup yang lebih besar.
                </Text>
              </div>
              <Button block type='primary' size='large'>Check availability</Button>
            </div>
            <div className="right">
              <Scrollbars
                autoHide
                style={{ width: "100%", height: "calc(100vh - 200px)" }}
              >
                {dataDummy.map((item, index) => {
                  return (
                    <div key={index}>
                      {CardItem()}
                    </div>
                  )
                })}
              </Scrollbars>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

