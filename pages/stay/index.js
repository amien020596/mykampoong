import DesaWisata from "components/_Stay/DesaWisata";
import Explore from "components/_Stay/Explore";
import Head from "next/head";
import Hero from "components/_Stay/Hero";
import Layout from "components/Layout/Public";
import Loading from "components/Response/Loading";
import MetaHead from "components/_Meta/MetaHead";
import Pick from "components/Pick";
import PopularLocation from "components/_Stay/PopularLocation";
import { groupByLocation } from "libs/group-by-location";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from "next/router";
import { useStayList } from "modules/stay/get-stay-list";

export async function getServerSideProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
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
      <MetaHead title={"Stay | MyKampoong"} />
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
