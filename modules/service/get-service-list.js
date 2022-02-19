import fetcher from "libs/fetcher";
import useSWR from "swr";
import qs from "query-string";

const useServiceList = (
  query,
  options = {
    revalidateOnFocus: false
  }
) => {
  const params = qs.stringify(query);
  const url = process.env.NEXT_PUBLIC_API_URL + "/vacation/service/?" + params;
  const serviceListSWR = useSWR(url, fetcher, options);
  return serviceListSWR;
};

export { useServiceList };
