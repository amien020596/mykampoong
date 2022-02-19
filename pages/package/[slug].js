import Layout from "components/Layout/Public";
import MetaHead from "components/_Meta/MetaHead";
import PackageDetail from "components/_PackageDetail";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import { fetchPackageDetail } from "modules/package/get-package-detail";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from "react";

export async function getServerSideProps({ query, res, locale }) {
  const { slug } = query;
  const data = await fetchPackageDetail(slug);
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

export default function PackageDetailPage({ data }) {
  // useEffect(() => {
  //   document.title = `${data?.vacation.name} | MyKampoong`;
  // });
  return (
    <VacationContext.Provider initialState={data}>
      <MetaHead description="Package" title={"Package | MyKampoong"} />
      <Layout>
        <PackageDetail />
      </Layout>
    </VacationContext.Provider>
  );
}
