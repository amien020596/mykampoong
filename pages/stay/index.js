import { useStayList } from "modules/stay/get-stay-list";
import { groupByLocation } from "libs/group-by-location";
import { useRouter } from "next/router";

import Layout from "components/Layout/Public";
import Hero from "components/_Stay/Hero";
import PopularLocation from "components/_Stay/PopularLocation";
import DesaWisata from "components/_Stay/DesaWisata";
import Pick from "components/Pick";
import Loading from "components/Response/Loading";
import Explore from "components/_Stay/Explore";
import Head from "next/head";

export default function StayPage() {
  const { query } = useRouter();
  const { data } = useStayList({
    page: query?.page
  });
  const grouped = groupByLocation(data?.vacation);
  const picksData = Object.keys(grouped).map((key) => ({
    title: key,
    services: grouped[key]
  }));
  return (
    <>
      <Head>
        <title>Stay | MyKampoong</title>
      </Head>
      <Layout>
        <Hero />
        {!data && <Loading />}
        {data && (
          <>
            <PopularLocation data={data?.popular_location} />
            {/* <DesaWisata /> */}
            {picksData.map((pick, index) => (
              <Pick data={pick} key={index} />
            ))}
            <Explore data={data?.vacation} />
          </>
        )}
      </Layout>
    </>
  );
}
