import { authorizeAxiosGet } from 'libs/fetcher/fetcher-get';
import { config } from '../../constants'

const authorizeFetchListPendingPayment = async () => {
  const url = config.NEXT_PUBLIC_API_URL + '/booking/pending-payment'
  return await authorizeAxiosGet(url)
}

export { authorizeFetchListPendingPayment }