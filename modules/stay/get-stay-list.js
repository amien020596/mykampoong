import fetcher from "libs/fetcher";
import useSWR from "swr";
import qs from "query-string";

const useStayList = (
  query,
  options = {
    revalidateOnFocus: false
  }
) => {
  const params = qs.stringify(query);
  const url =
    process.env.NEXT_PUBLIC_API_URL + "/vacation/staycation/?" + params;
  const stayListSWR = useSWR(url, fetcher, options);
  return stayListSWR;
};

export { useStayList };
