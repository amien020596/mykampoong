import { config } from "../../constants";
import { publicFetcherPost } from "libs/fetcher/fetcher-post";

const stayCheckAvailability = async (slug, data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/vacation/list-available-room/" + slug;
  return await publicFetcherPost(url, data);
};

export { stayCheckAvailability };
