import { LeftOutlined, SearchOutlined, SendOutlined } from "@ant-design/icons";

import Avatar from 'antd/lib/avatar'
import Button from 'antd/lib/button'
import Conversation from "components/_Message/Conversation";
import DesaWisata from "components/_Stay/DesaWisata";
import Explore from "components/_Stay/Explore";
import Form from 'antd/lib/form'
import Head from "next/head";
import Hero from "components/_Stay/Hero";
import Input from 'antd/lib/input'
import Layout from "components/Layout/Public";
import List from 'antd/lib/list'
import ListActor from "components/_Message/ListActor";
import ListMessage from 'components/_Message/ListActor';
import Loading from "components/Response/Loading";
import MetaHead from "components/_Meta/MetaHead";
import Paragraph from 'antd/lib/typography/Paragraph';
import Pick from "components/Pick";
import PopularLocation from "components/_Stay/PopularLocation";
import Scrollbars from "react-custom-scrollbars";
import Skeleton from 'antd/lib/skeleton';
import Typography from 'antd/lib/typography'
import { groupByLocation } from "libs/group-by-location";
import { map } from 'lodash';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from "next/router";
import { useState } from "react";
import { useStayList } from "modules/stay/get-stay-list";
import { useTranslation } from "react-i18next";

const { TextArea, Search } = Input;
const { Title, Text } = Typography

export async function getServerSideProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
export default function MessagePage() {
  const { t } = useTranslation()
  const [showSearchForm, setshowSearchForm] = useState(false)
  const [form] = Form.useForm();
  const { query } = useRouter();
  const router = useRouter();

  const { data } = useStayList({
    page: query?.page
  });
  const grouped = groupByLocation(data?.vacation);
  const picksData = Object.keys(grouped).map((key) => ({
    title: key,
    services: grouped[key]
  }));

  const handleValidate = () => {
    form.validateFields()
      .then((values) => {
        console.log("values", values)
        // setModalMessage(false)
      }).catch(errorInfo => {
        console.log("error", errorInfo)
      })
  }

  const handleSearch = () => setshowSearchForm(!showSearchForm)
  const handleBack = () => router.back()

  const message = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];


  let style = {
    inputsearch: {
      display: "none"
    },
    scrollbar: {
      width: "100%",
      height: 505
    }
  }
  if (showSearchForm) {
    style = {
      inputsearch: {
        display: "block",
        backgroundColor: "#F97316"
      },
      scrollbar: {
        width: "100%",
        height: 457
      }
    }
  }

  return (
    <>

      <MetaHead description="Message" title={"Message | MyKampoong"} />
      <Layout>
        <div>
          <style jsx>
            {`
          .left {
            max-width: calc(100% - 644px);
            width: 100%;
          }
          .right {
            border-left:1px solid #cccccc;
            width: 644px;
          }
          
          .nonactive{
            display:block;
          }
          .message-container{
            border: 2px solid #F97316;
            border-radius:5px;
            height:560px;
            margin-bottom:100px;
          }
          
        `}
          </style>
          <div className="container ">
            <div className="f" style={{ paddingTop: 30, paddingBottom: 10 }}>
              <div style={{ width: "100%" }}>
                <Button
                  type="text"
                  style={{ padding: "0", marginBottom: 20 }}
                  onClick={() => handleBack()}
                >
                  <LeftOutlined /> {t("Back")}
                </Button>
              </div>
            </div>
            <div className="message-container f">
              <div className="left">
                <div style={{ height: 50, paddingLeft: 10, paddingRight: 10, backgroundColor: "#F97316", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Paragraph strong>Message</Paragraph>
                  <SearchOutlined onClick={handleSearch} style={{ fontSize: 20, cursor: "pointer" }} />
                </div>
                <div style={style.inputsearch}>
                  <div style={{ padding: 10 }}>
                    <Input style={{ height: 15 }} size="small" placeholder={t("input search text")} />
                  </div>
                </div>
                {/* height : 505 */}
                <Scrollbars autoHide universal={true} style={style.scrollbar}>
                  {message.map((f, index) => {
                    return (
                      <ListActor key={index} />
                    )
                  })}
                </Scrollbars>
              </div>

              <div className="right">
                <div className="f mdl" style={{ height: 50, backgroundColor: "#F97316" }}>
                  <div style={{ width: 50 }}>
                    <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <Paragraph strong>Michael Jordan</Paragraph>
                  </div>
                </div>
                <Scrollbars autoHide universal={true} style={{ width: "100%", height: 375 }}>
                  {message.map((f, index) => {
                    return (
                      <Conversation key={index} />
                    )
                  })}
                </Scrollbars>
                <div style={{ backgroundColor: "#cccccc", height: 131, paddingTop: 5, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Form
                    form={form}
                    onFinish={handleValidate}
                    layout="vertical"
                    style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
                  >
                    <Form.Item
                      name="message"
                      style={{ width: "89%" }}
                    >
                      <TextArea style={{ width: 570 }} autoSize={{ minRows: 2, maxRows: 2 }} placeholder={t("Type message")} />
                    </Form.Item>
                    <Button type="info" size="small" style={{ marginBottom: 24 }} htmlType="submit">
                      <SendOutlined />
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>

  );
}
