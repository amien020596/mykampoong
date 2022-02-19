import { useEffect } from "react";
import { fetchExperienceDetail } from "modules/experience/get-experience-detail";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import Layout from "components/Layout/Public";
import ExperienceDetails from "components/_ExperienceDetails";

export async function getServerSideProps({ query }) {
  const { slug } = query;
  const data = await fetchExperienceDetail(slug);
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

export default function ExperienceDetailsPage({ data }) {
  useEffect(() => {
    document.title = `${data?.vacation.name} | MyKampoong`;
  });
  return (
    <VacationContext.Provider initialState={data}>
      <Layout>
        <ExperienceDetails />
      </Layout>
    </VacationContext.Provider>
  );
}
