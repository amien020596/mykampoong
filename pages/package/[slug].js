import { useEffect } from "react";
import { fetchPackageDetail } from "modules/package/get-package-detail";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import Layout from "components/Layout/Public";
import PackageDetail from "components/_PackageDetail";

export async function getServerSideProps({ query, res }) {
  const { slug } = query;
  const data = await fetchPackageDetail(slug);
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

export default function PackageDetailPage({ data }) {
  useEffect(() => {
    document.title = `${data?.vacation.name} | MyKampoong`;
  });
  return (
    <VacationContext.Provider initialState={data}>
      <Layout>
        <PackageDetail />
      </Layout>
    </VacationContext.Provider>
  );
}
