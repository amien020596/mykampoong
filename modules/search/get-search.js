import fetcher from "libs/fetcher";
import useSWR from "swr";
import qs from "query-string";

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
  const url =
    process.env.NEXT_PUBLIC_API_URL + `/vacation/${category}?${query}`;
  const searchSWR = useSWR(category ? url : null, fetcher, options);
  return searchSWR;
};

export { useSearchList };
