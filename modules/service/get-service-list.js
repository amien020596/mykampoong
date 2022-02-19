import { config } from "../../constants";
import { publicAxiosGet } from "libs/fetcher/fetcher-get";
import qs from "query-string";
import useSWR from "swr";

const useServiceList = (
  query,
  options = {
    revalidateOnFocus: false
  }
) => {

  const params = qs.stringify(query);
  const url = config.NEXT_PUBLIC_API_URL + "/vacation/service/?" + params;
  const serviceListSWR = useSWR(url, publicAxiosGet, options);
  return serviceListSWR;
};

export { useServiceList };
