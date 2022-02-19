/vacation/detail - available - room / { slug_travel_object } / { date } / { id_room_type }

import { config } from "../../constants";
import fetcher from "libs/fetcher/fetcher";
// unused method
const useBookNow = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/vacation/detail-available-room/";

  return await fetcher(url, data);
};

export { useBookNow };