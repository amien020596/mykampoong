import fetcher, { publicFetcherPost } from "libs/fetcher/fetcher-post";

import { config } from "../../constants";
import qs from "query-string";

const useCheckAvailability = (
  data,
) => {

  const url = config.NEXT_PUBLIC_API_URL + "/";
  return fetcher(url, data, true, true);
};

const CheckAvailabilityExperience = (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/";
  return publicFetcherPost(url, data);
};
export { useCheckAvailability, CheckAvailabilityExperience };
