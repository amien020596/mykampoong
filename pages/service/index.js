import { useServiceList } from "modules/service/get-service-list";
import { useRouter } from "next/router";

import Layout from "components/Layout/Public";
import Hero from "components/_Service/Hero";
import Pick from "components/Pick";
import Loading from "components/Response/Loading";
import Explore from "components/_Service/Explore";
import Head from "next/head";

// TO DO: will enable this when the API is ready

// const pickData = {
//   title: "Recomended services",
//   subtitle: "Based on your upcoming trip",
//   services: []
// };

export default function ServicePage() {
  const { query } = useRouter();
  const { data, error } = useServiceList({
    page: query?.page
  });

  return (
    <>
      <Head>
        <title>Service | MyKampoong</title>
      </Head>
      <Layout>
        <Hero />
        {!data && !error && <Loading />}
        {data && (
          <>
            {/* <Pick data={pickData}/> */}
            <Explore data={data?.vacation} />
          </>
        )}
      </Layout>
    </>
  );
}
