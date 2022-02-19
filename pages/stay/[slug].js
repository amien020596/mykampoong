import { useEffect } from "react";
import { fetchStayDetail } from "modules/stay/get-stay-detail";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import Layout from "components/Layout/Public";
import StayDetail from "components/_StayDetail";

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const data = await fetchStayDetail(slug);
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

export default function StayDetailPage({ data }) {
  useEffect(() => {
    document.title = `${data?.vacation.name} | MyKampoong`;
  });
  return (
    <VacationContext.Provider initialState={data}>
      <Layout>
        <StayDetail />
      </Layout>
    </VacationContext.Provider>
  );
}
