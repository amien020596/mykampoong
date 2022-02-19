import { authorizeAxiosGet } from 'libs/fetcher/fetcher-get';
import { config } from '../../constants'
import fetcher from 'libs/fetcher/fetcher'
import { getToken } from 'libs/helpers/auth'
import useSWR from 'swr'

const useListBooking = () => {
  const url = config.NEXT_PUBLIC_API_URL + '/booking/list'
  const listBookingSWR = useSWR(url, fetcher)
  return listBookingSWR
}

const fetchListBooking = async (data) => {
  return await fetch(config.NEXT_PUBLIC_API_URL + '/booking/list', {
    headers: {
      "Authorization": `Bearer ${getToken().token}`
    }
  })
}

const authorizeFetchListBooking = async () => {
  const url = config.NEXT_PUBLIC_API_URL + '/booking/list'
  return await authorizeAxiosGet(url)
}

export { useListBooking, fetchListBooking, authorizeFetchListBooking }