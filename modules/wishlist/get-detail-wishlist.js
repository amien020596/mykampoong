import { authorizeAxiosGet } from "libs/fetcher/fetcher-get"
import { config } from "../../constants"
import fetcher from "libs/fetcher/fetcher"
import useSWR from "swr"

// const useGetWishlist = () => {

//     const url = '/profile'
//     const profileSWR = useSWR(url, fetcher)

//     return profileSWR
// }

const useGetWishlistDetail = async (slug) => {
  return await authorizeAxiosGet(config.NEXT_PUBLIC_API_URL + '/wish-list/detail/' + slug)
}


export { useGetWishlistDetail }