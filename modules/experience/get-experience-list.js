import { config } from "../../constants";
import { publicAxiosGet } from "libs/fetcher/fetcher-get";
import { publicFetcherAxios } from "libs/fetcher/fetcher";
import qs from "query-string";
import useSWR from "swr";

const useExperienceList = (
  query,
  options = {
    revalidateOnFocus: false
  }
) => {

  const params = qs.stringify(query);
  const url = config.NEXT_PUBLIC_API_URL + "/vacation/experience/?" + params;
  const experienceListSWR = useSWR(url, publicAxiosGet, options);
  return experienceListSWR;
};

export { useExperienceList };
