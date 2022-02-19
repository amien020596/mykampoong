import fetcher from "libs/fetcher";
import useSWR from "swr";
import qs from "query-string";

const useExperienceList = (
  query,
  options = {
    revalidateOnFocus: false
  }
) => {
  const params = qs.stringify(query);
  const url =
    process.env.NEXT_PUBLIC_API_URL + "/vacation/experience/?" + params;
  const experienceListSWR = useSWR(url, fetcher, options);
  return experienceListSWR;
};

export { useExperienceList };
