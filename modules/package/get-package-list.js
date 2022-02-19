import fetcher from "libs/fetcher";
import qs from "query-string";
import useSWR from "swr";

const usePackageList = (
  query,
  options = {
    revalidateOnFocus: false
  }
) => {
  const params = qs.stringify(query);
  const url = process.env.NEXT_PUBLIC_API_URL + "/vacation/package/?" + params;
  const packageListSWR = useSWR(url, fetcher, options);
  return packageListSWR;
};

export { usePackageList };
