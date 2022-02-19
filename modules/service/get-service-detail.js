import { config } from "../../constants";
import fetcher from "libs/fetcher/fetcher";
import { publicAxiosGet } from "libs/fetcher/fetcher-get";
import useSWR from "swr";

// we can't use swr here
const useServiceDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {

  const url = config.NEXT_PUBLIC_API_URL + "/vacation/service/" + slug;
  const serviceDetailSWR = useSWR(url, fetcher, options);
  return serviceDetailSWR;
};

const fetchServiceDetail = async (slug) => {
  return await publicAxiosGet(config.NEXT_PUBLIC_API_URL + "/vacation/service/" + slug)
};

export { useServiceDetail, fetchServiceDetail };
