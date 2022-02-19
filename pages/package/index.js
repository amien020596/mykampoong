import { usePackageList } from "modules/package/get-package-list";
import { groupByLocation } from "libs/group-by-location";
import { useRouter } from "next/router";

import Layout from "components/Layout/Public";
import Hero from "components/_Package/Hero";
import Pick from "components/Pick";
import Loading from "components/Response/Loading";
import Explore from "components/_Service/Explore";
import PopularLocation from "components/_Stay/PopularLocation";
import Head from "next/head";

// const pickData = {
//   title: 'Gianyar, Bali',
//   services: []
// }

export default function PackagePage() {
  const { query } = useRouter();
  const { data, error } = usePackageList({
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
        <title>Package | MyKampoong</title>
      </Head>
      <Layout>
        <Hero />
        {!data && !error && <Loading />}
        {data && (
          <>
            <PopularLocation data={data?.popular_location} />
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
