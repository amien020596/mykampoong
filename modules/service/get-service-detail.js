import fetcher from "libs/fetcher";
import useSWR from "swr";

const useServiceDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/vacation/service/" + slug;
  const serviceDetailSWR = useSWR(url, fetcher, options);
  return serviceDetailSWR;
};

const fetchServiceDetail = async (slug) => {
  return await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/vacation/service/" + slug
  )
    .then((res) => {
      if (!res.ok) throw new Error("Error");
      return res.json();
    })
    .catch((err) => console.log(err));
};

export { useServiceDetail, fetchServiceDetail };
