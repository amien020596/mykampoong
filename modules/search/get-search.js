import { config } from "../../constants";
import fetcher from "libs/fetcher/fetcher";
import qs from "query-string";
import useSWR from "swr";

const useSearchList = (
  category,
  search = {
    name: "",
    place: ""
  },
  options = {
    revalidateOnFocus: false
  }
) => {

  const query = qs.stringify(search);
  const url = config.NEXT_PUBLIC_API_URL + `/vacation/${category}?${query}`;
  const searchSWR = useSWR(category ? url : null, fetcher, options);
  return searchSWR;
};

export { useSearchList };
