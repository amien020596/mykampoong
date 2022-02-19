import Explore from "components/_Service/Explore";
import Head from "next/head";
import Hero from "components/_Service/Hero";
import Layout from "components/Layout/Public";
import Loading from "components/Response/Loading";
import MetaHead from "components/_Meta/MetaHead";
import Pick from "components/Pick";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from "next/router";
import { useServiceList } from "modules/service/get-service-list";

// TO DO: will enable this when the API is ready

// const pickData = {
//   title: "Recomended services",
//   subtitle: "Based on your upcoming trip",
//   services: []
// };


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  };
}
export default function ServicePage() {
  const { query } = useRouter();
  const { data, error } = useServiceList({
    page: query?.page
  });

  return (
    <>
      <MetaHead description="Service" title={"Service | MyKampoong"} />
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
