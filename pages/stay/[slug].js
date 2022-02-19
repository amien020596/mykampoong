import Head from 'next/head'
import Layout from "components/Layout/Public";
import MetaHead from 'components/_Meta/MetaHead';
import StayDetail from "components/_StayDetail";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import { fetchStayDetail } from "modules/stay/get-stay-detail";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from "react";

export async function getServerSideProps({ query, locale }) {
  const { slug } = query;
  const data = await fetchStayDetail(slug);
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

export default function StayDetailPage({ data }) {
  // useEffect(() => {
  //   document.title = `${data?.vacation.name} | MyKampoong`;
  // });

  const dataStay = data.vacation || {};
  console.log('dataStay', dataStay)
  let currentURL = ''
  if (typeof window !== 'undefined') {
    currentURL = window.location.href
  }

  return (
    <VacationContext.Provider initialState={data}>
      <MetaHead
        description={dataStay.description}
        title={`${dataStay.name} Staycation | MyKampoong`}
        url={currentURL}
        name={data.name}
        featured_image={data.featured_image}
      />
      <Layout>
        <StayDetail />
      </Layout>
    </VacationContext.Provider>
  );
}
