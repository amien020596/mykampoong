import { config } from "../../constants";
import { publicAxiosGet } from "libs/fetcher/fetcher-get";
import { publicFetcherAxios } from "libs/fetcher/fetcher";
import qs from "query-string";
import useSWR from "swr";

const useStayList = (
  query,
  options = {
    revalidateOnFocus: false
  }
) => {
  console.log("or here")
  const params = qs.stringify(query);
  const url = config.NEXT_PUBLIC_API_URL + "/vacation/staycation/?" + params;
  const stayListSWR = useSWR(url, publicAxiosGet, options);
  return stayListSWR;
};

export { useStayList };
