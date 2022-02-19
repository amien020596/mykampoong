import Header from "next/head";
import Layout from "components/Layout/Public";
import MetaHead from "components/_Meta/MetaHead";
import ServiceDetails from "components/_ServiceDetails";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import { fetchServiceDetail } from "modules/service/get-service-detail";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ query, res, locale }) {
  const { slug } = query;
  const data = await fetchServiceDetail(slug);
  if (!data?.success) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data
    }
  };
}

export default function ServiceDetailsPage({ data }) {
  return (
    <VacationContext.Provider initialState={data}>
      <MetaHead description="Service" title={"Service | MyKampoong"} />
      <Layout>
        <ServiceDetails />
      </Layout>
    </VacationContext.Provider>
  );
}
