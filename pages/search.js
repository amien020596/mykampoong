import Explore from "components/_Service/Explore";
import Head from "next/head";
import Layout from "components/Layout/Public";
import MetaHead from "components/_Meta/MetaHead";
import Search from "components/_Search";
import { useRouter } from "next/router";
import { useSearchList } from "modules/search/get-search";

export default function SearchPage() {
  const router = useRouter();
  const { category, name, location } = router.query;

  const { data, error } = useSearchList(category, { name, location });

  return (
    <>
      <MetaHead description="Search" title={"Search | MyKampoong"} />
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
