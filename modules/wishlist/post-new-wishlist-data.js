import { authorizeFether } from "libs/fetcher/fetcher-post";
import { config } from "../../constants";

const useAddNewWishlist = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/wish-list/add";
  return await authorizeFether(url, data);
};

export { useAddNewWishlist };
