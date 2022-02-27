import { last, split } from "lodash";
import { useEffect, useState } from "react";

import Layout from "components/Layout/Public";
import MetaHead from "components/_Meta/MetaHead";
import ServiceDetails from "components/_ServiceDetails";
import { useVacation as VacationContext } from "libs/hooks/vacation";
import { fetchServiceDetail } from "modules/service/get-service-detail";
import reactImageSize from "libs/helpers/image/reactImageSize";
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
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [extension, setExtension] = useState('png');
  const dataStay = data.vacation || {};

  let currentURL = ''
  if (typeof window !== 'undefined') {
    currentURL = window.location.href
  }

  useEffect(() => {
    reactImageSize(dataStay.featured_image)
      .then(({ width, height }) => {
        setWidth(width)
        setHeight(height)
        let url = split(dataStay.featured_image, '.')
        setExtension(last(url));
      })
      .catch((errorMessage) => console.log("error message", errorMessage));
  });

  return (
    <VacationContext.Provider initialState={data}>
      <MetaHead
        description={dataStay.description}
        title={`${dataStay.name} Staycation | MyKampoong`}
        url={currentURL}
        name={data.name}
        featured_image={data.featured_image}
        width={width}
        height={height}
        imageType={extension}
      />
      <Layout>
        <ServiceDetails />
      </Layout>
    </VacationContext.Provider>
  );
}
