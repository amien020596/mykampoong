import { authorizeAxiosDelete } from 'libs/fetcher/fetcher-delete'
import { authorizeFether } from "libs/fetcher/fetcher-post";
import { config } from '../../constants';

const deleteWishlist = async (slug, id) => {

  const url = config.NEXT_PUBLIC_API_URL + "/wish-list/remove/" + `${slug}/${id}`;
  return authorizeFether(url)
};

const deleteFolderWishlist = async (slug, id) => {
  const url = config.NEXT_PUBLIC_API_URL + "/wish-list/delete-wishlist/" + `${slug}`;
  return authorizeAxiosDelete(url)
};

export { deleteWishlist, deleteFolderWishlist };
