import { useExperience as ExperienceContext } from "libs/hooks/experience";
import ExperienceDetails from "components/_ExperienceDetails";
import Layout from "components/Layout/Public";
import MetaHead from "components/_Meta/MetaHead";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import { fetchExperienceDetail } from "modules/experience/get-experience-detail";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from "react";

export async function getServerSideProps({ query, locale }) {
  const { slug } = query;
  const data = await fetchExperienceDetail(slug);
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

export default function ExperienceDetailsPage({ data }) {

  return (
    <VacationContext.Provider initialState={data}>
      <MetaHead description="Experience" title={"Experience | MyKampoong"} />
      <ExperienceContext.Provider >
        <Layout>
          <ExperienceDetails />
        </Layout>
      </ExperienceContext.Provider>
    </VacationContext.Provider>
  );
}
