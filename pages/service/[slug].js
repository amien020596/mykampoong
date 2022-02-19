import { fetchServiceDetail } from "modules/service/get-service-detail";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import Layout from "components/Layout/Public";
import ServiceDetails from "components/_ServiceDetails";
import Header from "next/head";

export async function getServerSideProps({ query, res }) {
  const { slug } = query;
  const data = await fetchServiceDetail(slug);
  if (!data?.success) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      data
    }
  };
}

export default function ServiceDetailsPage({ data }) {
  return (
    <VacationContext.Provider initialState={data}>
      <Header>
        <title>{data.vacation.name} | MyKampoong</title>
      </Header>
      <Layout>
        <ServiceDetails />
      </Layout>
    </VacationContext.Provider>
  );
}
