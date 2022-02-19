import { config } from "../../constants";
import fetcher from "libs/fetcher-post";

const useBookNow = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/booking/add-to-cart";

  return await fetcher(url, data, true, true, true);
};

export { useBookNow };
