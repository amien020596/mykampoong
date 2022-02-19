import { useExperienceList } from "modules/experience/get-experience-list";
import { groupByLocation } from "libs/group-by-location";
import { useRouter } from "next/router";

import Layout from "components/Layout/Public";
import Hero from "components/_Experience/Hero";
import PopularLocation from "components/_Stay/PopularLocation";
import DesaWisata from "components/_Stay/DesaWisata";
import Pick from "components/Pick";
import Loading from "components/Response/Loading";
import Explore from "components/_Experience/Explore";
import Head from "next/head";

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
      <Head>
        <title>Experience | MyKampoong</title>
      </Head>
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
