import { authorizeAxiosDelete } from "libs/fetcher/fetcher-delete";
import { config } from '../../constants';

const deleteBookingList = async (id) => {

  const url = config.NEXT_PUBLIC_API_URL + "/booking/remove-cart/" + `${id}`;
  return authorizeAxiosDelete(url)
};

export { deleteBookingList };
