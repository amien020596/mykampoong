import Explore from "components/_Service/Explore";
import Head from "next/head";
import Hero from "components/_Package/Hero";
import Layout from "components/Layout/Public";
import Loading from "components/Response/Loading";
import MetaHead from "components/_Meta/MetaHead";
import Pick from "components/Pick";
import PopularLocation from "components/_Stay/PopularLocation";
import { groupByLocation } from "libs/group-by-location";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { usePackageList } from "modules/package/get-package-list";
import { useRouter } from "next/router";

export async function getServerSideProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
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
      <MetaHead description="Package" title={"Package | MyKampoong"} />
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
