import { config } from '../../constants'
import fetcher from 'libs/fetcher/fetcher'
import { publicAxiosGet } from 'libs/fetcher/fetcher-get'
import useSWR from 'swr'

const useStayDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {

  const url = config.NEXT_PUBLIC_API_URL + '/vacation/staycation/' + slug
  const stayDetailSWR = useSWR(url, fetcher, options)
  return stayDetailSWR
}

const fetchStayDetail = async slug => await publicAxiosGet(config.NEXT_PUBLIC_API_URL + '/vacation/staycation/' + slug)

export { useStayDetail, fetchStayDetail }