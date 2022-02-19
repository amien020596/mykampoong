import Layout from "../../components/Layout/Public";
import Head from 'next/head';
import CardSlider from "components/_Mytrip/CardSlider";
import { Typography, Tabs, Button } from "antd";
import OnGoingMyTrip from "components/_Mytrip/OnGoingMyTrip";
import WaitingPaymentMyTrip from "components/_Mytrip/WaitingPayment";
import UpComingMyTrip from "components/_Mytrip/UpComingMytrip";
import PastMyTrip from "components/_Mytrip/PastMyTrip";
const { Title, Text } = Typography;
const { TabPane } = Tabs;
const data = [
  {
    count_review: 0,
    description: "Package Honeymoon",
    featured_image: "https://app.mykampoong.com/storage/taro/akomodasi/komang-petak-homestay/Taro_Komang%20Petak%20Home%20Stay_1.jpg",
    id: 67,
    latitude: "-6.97748806",
    location: "Gianyar, Tegallalang",
    longtitude: "110.43790900",
    name: "Package Honeymoon",
    rating_review: 0,
    service: "Package",
    slug: "package-honeymoon",
    tourist_actors:
      [{ joined_date: "2021-06-07" }],
    owner_name: "Desa Wisata MyKampoong",
    service_name: "Desa Wisata MyKampoong,",
    vacation_images: [
      "https://app.mykampoong.com/https://loremflickr.com/cache/resized/65535_50880385713_4ed54485b5_b_600_400_nofilter.jpg/name.jpg"
    ],
    vacation_price: "300000.00"
  }, {
    count_review: 0,
    description: "Package Honeymoon",
    featured_image: "https://app.mykampoong.com/storage/taro/akomodasi/komang-petak-homestay/Taro_Komang%20Petak%20Home%20Stay_1.jpg",
    id: 67,
    latitude: "-6.97748806",
    location: "Gianyar, Tegallalang",
    longtitude: "110.43790900",
    name: "Package Honeymoon",
    rating_review: 0,
    service: "Package",
    slug: "package-honeymoon",
    tourist_actors:
      [{ joined_date: "2021-06-07" }],
    owner_name: "Desa Wisata MyKampoong",
    service_name: "Desa Wisata MyKampoong,",
    vacation_images: [
      "https://app.mykampoong.com/https://loremflickr.com/cache/resized/65535_50880385713_4ed54485b5_b_600_400_nofilter.jpg/name.jpg"
    ],
    vacation_price: "300000.00"
  },
  {
    count_review: 0,
    description: "Package Honeymoon",
    featured_image: "https://app.mykampoong.com/storage/taro/akomodasi/komang-petak-homestay/Taro_Komang%20Petak%20Home%20Stay_1.jpg",
    id: 67,
    latitude: "-6.97748806",
    location: "Gianyar, Tegallalang",
    longtitude: "110.43790900",
    name: "Package Honeymoon",
    rating_review: 0,
    service: "Package",
    slug: "package-honeymoon",
    tourist_actors:
      [{ joined_date: "2021-06-07" }],
    owner_name: "Desa Wisata MyKampoong",
    service_name: "Desa Wisata MyKampoong,",
    vacation_images: [
      "https://app.mykampoong.com/https://loremflickr.com/cache/resized/65535_50880385713_4ed54485b5_b_600_400_nofilter.jpg/name.jpg"
    ],
    vacation_price: "300000.00"
  },
  {
    count_review: 0,
    description: "Package Honeymoon",
    featured_image: "https://app.mykampoong.com/storage/taro/akomodasi/komang-petak-homestay/Taro_Komang%20Petak%20Home%20Stay_1.jpg",
    id: 67,
    latitude: "-6.97748806",
    location: "Gianyar, Tegallalang",
    longtitude: "110.43790900",
    name: "Package Honeymoon",
    rating_review: 0,
    service: "Package",
    slug: "package-honeymoon",
    tourist_actors:
      [{ joined_date: "2021-06-07" }],
    owner_name: "Desa Wisata MyKampoong",
    service_name: "Desa Wisata MyKampoong,",
    vacation_images: [
      "https://app.mykampoong.com/https://loremflickr.com/cache/resized/65535_50880385713_4ed54485b5_b_600_400_nofilter.jpg/name.jpg"
    ],
    vacation_price: "300000.00"
  },
  {
    count_review: 0,
    description: "Package Honeymoon",
    featured_image: "https://app.mykampoong.com/storage/taro/akomodasi/komang-petak-homestay/Taro_Komang%20Petak%20Home%20Stay_1.jpg",
    id: 67,
    latitude: "-6.97748806",
    location: "Gianyar, Tegallalang",
    longtitude: "110.43790900",
    name: "Package Honeymoon",
    rating_review: 0,
    service: "Package",
    slug: "package-honeymoon",
    tourist_actors:
      [{ joined_date: "2021-06-07" }],
    owner_name: "Desa Wisata MyKampoong",
    service_name: "Desa Wisata MyKampoong,",
    vacation_images: [
      "https://app.mykampoong.com/https://loremflickr.com/cache/resized/65535_50880385713_4ed54485b5_b_600_400_nofilter.jpg/name.jpg"
    ],
    vacation_price: "300000.00"
  },

]
export default function index() {

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <style jsx>
        {`
          .hero-image {
            height: 234px;
          }
        `}
      </style>
      <Head>
        <title>My Trip | MyKampoong</title>
      </Head>
      <Layout>
        <div className="hero-image" style={{ padding: "30px 0", height: "100%" }}>
          <div className="container">
            <Title level={1} style={{ fontWeight: 500, letterSpacing: ".03em", margin: "12px 0" }}>
              My Trip
            </Title>
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="On Going" key="1">
                <OnGoingMyTrip />
              </TabPane>
              <TabPane tab="Wating For Payment" key="2">
                <div className='f mdl f-btw'>
                  <Button type="primary" style={{ marginBottom: 10 }}>Continue checkout</Button>
                  <Text className='agenda-item-title'>
                    <span style={{ fontWeight: 500 }}>Total </span>
                    Rp 7.000.000
                  </Text>
                </div>
                <WaitingPaymentMyTrip />
              </TabPane>
              <TabPane tab="Upcoming" key="3">
                <UpComingMyTrip />
              </TabPane>
              <TabPane tab="Past" key="4">
                <PastMyTrip />
              </TabPane>
            </Tabs>
            {/* slider review  */}

            <CardSlider data={data} />
          </div>
        </div>
      </Layout>
    </>
  )
}