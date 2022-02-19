import { setAuthData, setToken } from "libs/helpers/auth";
import { useEffect, useState } from "react";

import Button from 'antd/lib/button'
import Empty from "antd/lib/empty";
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import Modal from 'antd/lib/modal'
import Paragraph from "antd/lib/typography/Paragraph";
import { PlusOutlined } from "@ant-design/icons";
import Scrollbars from "react-custom-scrollbars";
import Typography from 'antd/lib/typography'
import { authLogin } from "modules/auth/post-auth";
import { isloginUser } from "libs/helpers/auth";
import message from 'antd/lib/message';
import { useAddNewWishlist } from "modules/wishlist/post-new-wishlist-data";
import { useGetWishlist } from "modules/wishlist/get-wishlist";
import { useGetWishlistDetail } from "modules/wishlist/get-detail-wishlist";
import { useGlobalContext } from "libs/hooks/global";

const { Text } = Typography;

function WishlistModal(props) {
  const [loading, setLoading] = useState(false);
  const { dataWishlist, modalWishlist, setModalWishlist, setModalCreateWishlist } = useGlobalContext.useContainer();
  const [data, setDataWishlist] = useState([]);
  const [form] = Form.useForm();
  // const data = [
  //   {
  //     id: 70,
  //     name_wishlist: "my dream vacation",
  //     slug: "my_dream_vacation",
  //     service: "wishlist",
  //     wishlist_data: [
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "Package",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "Package",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "service",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "service",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //     ],
  //   },
  //   {
  //     id: 71,
  //     name_wishlist: "my dream vacation 2",
  //     slug: "my_dream_vacation_2",
  //     service: "wishlist",
  //     wishlist_data: [
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "Package",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "experience",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "experience",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "service",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //     ],
  //   },
  //   {
  //     id: 73,
  //     name_wishlist: "my dream vacation 3",
  //     slug: "my_dream_vacation_3",
  //     service: "wishlist",
  //     wishlist_data: [
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "Package",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "package",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "experience",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //       {
  //         count_review: 0,
  //         description: "Package Company",
  //         featured_image: "https://app.mykampoong.com/storage/images/1519727530.jpg",
  //         id: 70,
  //         latitude: "-6.97748806",
  //         location: "Gianyar, Tegallalang",
  //         longtitude: "110.43790900",
  //         name: "Package Company",
  //         rating_review: 0,
  //         service: "service",
  //         service_id: 6,
  //         slug: "package-company",
  //         owner_name: "Desa Wisata MyKampoong",
  //         service_name: "Desa Wisata MyKampoong",
  //         vacation_images: ["https://app.mykampoong.com/https://app.mykampoong.com/storage/images/1519727530.jpg/1519727530.jpg"]
  //       },
  //     ],
  //   }
  // ]
  const images = [
    "https://app.mykampoong.com/storage/images/1519727530.jpg",
    "https://app.mykampoong.com/storage/images/1519727530.jpg",
    "https://app.mykampoong.com/storage/images/1519727530.jpg"
  ]
  useEffect(() => {
    if (isloginUser() && modalWishlist) {
      useGetWishlist()
        .then(response => {
          if (response?.wish_list) {
            setDataWishlist(response.wish_list)
            // setDataWishlist([])
          } else {
            message.info("no wishlist found")
          }
        }).catch(error => {
          console.log("error", error)
        })
    }
  }, [modalWishlist])


  const handleAddWishlist = (name) => {

    const dataNewWishlist = {
      ...dataWishlist,
      'name': name
    }

    useAddNewWishlist(dataNewWishlist)
      .then(response => {
        if (response.success) {
          setModalWishlist(false)
          message.success(`success add to wishlist ${name}`)
        } else {
          message.error("failed to create new message")
        }
      }).catch(() => {
        setModalWishlist(false)
      })

  }
  const handleOpenCreateWishlistModal = () => {
    setModalCreateWishlist(true)
  }

  return (
    <Modal
      visible={modalWishlist}
      title="Add to wishlist"
      footer={false}
      centered
      width={514}
      onCancel={() => setModalWishlist(false)}
      closable={true}
    >
      <style jsx>{`
      .card-wishlist-icon{
        height:84px;
        width:84px;
        
      }
      
      .grid-container-3{
        display:grid;
        grid-template-columns : auto auto;
      }
      
      .grid-container-3 .grid-3:first-child{
        grid-row: span 2;
      }
      
      .grid-3 img{
        height: 100%;
        width: 100%;
        padding:1px;
        object-fit: cover;
      }
      .border-0 img{
        border-radius:8px 0px 0px 8px;
      }
      
      .border-1 img{
        border-radius:0px 8px 0px 0px;
      }
      
      .border-2 img{
        border-radius:0px 0px 8px 0px;
      }
      `}</style>
      {/* <Form

        form={form}
        onFinish={handleLogin}
        layout="vertical"
        style={{ marginTop: 20 }}
      > */}
      <div style={{ marginTop: 20 }} className="f f-c f-start">
        {data.length > 0 ?
          <>
            <div>
              <button style={{ padding: "24px 33px", marginRight: 10, marginBottom: 10, backgroundColor: "#ffffff", border: "1px solid #D4D4D8", borderRadius: 8, cursor: "pointer" }} onClick={handleOpenCreateWishlistModal}><PlusOutlined style={{ color: "#D4D4D8" }} /></button> <Text strong>Create new wishlist</Text>
            </div>

            <Scrollbars
              autoHide
              universal
              style={{ width: "100%", height: 165 }}
            >
              {data.map((f, index) => {
                return (
                  <div key={index} className="f" style={{ cursor: "pointer" }} onClick={() => handleAddWishlist(f.name)}>
                    <div className="card-wishlist-icon grid-container-3" style={{ marginBottom: 10, marginRight: 10 }}>
                      {images.map((f, index) => {
                        return (
                          <div key={index} className={`grid-3 border-${index}`}>
                            <img src={f} />
                          </div>
                        )
                      })}
                    </div>
                    <div className="f f-c f-ctr f-start">
                      <Paragraph strong style={{ margin: 0 }}>{f.name}</Paragraph>
                      <Paragraph>3 Package . 4 Stay</Paragraph>
                    </div>
                  </div>
                )
              })}
            </Scrollbars>
          </>
          : <div style={{ width: "100%" }} className="f f-ctr">
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 60,
              }}
              description={
                <span>
                  No wishlist found
                </span>
              }
            >
              <Button type="primary" onClick={handleOpenCreateWishlistModal}>Create Now</Button>
            </Empty>
          </div>
        }
      </div>
      {/* </Form> */}
    </Modal>
  );
}

export default WishlistModal