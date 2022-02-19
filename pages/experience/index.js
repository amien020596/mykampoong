import Explore from "components/_Experience/Explore";
import Head from "next/head";
import Hero from "components/_Experience/Hero";
import Layout from "components/Layout/Public";
import Loading from "components/Response/Loading";
import MetaHead from "components/_Meta/MetaHead";
import Pick from "components/Pick";
import PopularLocation from "components/_Stay/PopularLocation";
import { groupByLocation } from "libs/group-by-location";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useExperienceList } from "modules/experience/get-experience-list";
import { useRouter } from "next/router";

export async function getServerSideProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
export default function ExperiencePage() {
  const { query } = useRouter();
  const { data, error } = useExperienceList({
    page: query?.page
  });
  const grouped = groupByLocation(data?.vacation);
  const picksData = Object.keys(grouped).map((key) => ({
    title: key,
    services: grouped[key]
  }));

  return (
    <>
      <MetaHead description="Experience" title={"Experience | MyKampoong"} />
      <Layout>
        <Hero />
        {!data && !error && <Loading />}
        {data && (
          <>
            <PopularLocation data={data?.popular_location} />
            {/* <DesaWisata /> */}
            {picksData.map((pick, index) => (
              <Pick data={pick} key={index} />
            ))}
            <Explore data={data?.vacation?.data} />
          </>
        )}
      </Layout>
    </>
  );
}
