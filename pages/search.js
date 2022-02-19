import { useRouter } from "next/router";
import { useSearchList } from "modules/search/get-search";
import Layout from "components/Layout/Public";
import Explore from "components/_Service/Explore";
import Search from "components/_Search";
import Head from "next/head";

export default function SearchPage() {
  const router = useRouter();
  const { category, name, location } = router.query;

  const { data, error } = useSearchList(category, { name, location });

  return (
    <>
      <Head>
        <title>Search | MyKampoong</title>
      </Head>
      <Layout>
        {data && (
          <>
            <Search data={data} />
            <Explore title={false} data={data?.vacation} />
          </>
        )}
      </Layout>
    </>
  );
}
