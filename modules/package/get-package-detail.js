import { config } from '../../constants'
import fetcher from 'libs/fetcher/fetcher'
import { publicAxiosGet } from 'libs/fetcher/fetcher-get'
import useSWR from 'swr'

// we can't use swr in here
const usePackageDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {

  const url = config.NEXT_PUBLIC_API_URL + '/vacation/package/' + slug
  const packageDetailSWR = useSWR(url, fetcher, options)
  return packageDetailSWR
}

const fetchPackageDetail = async slug => await publicAxiosGet(config.NEXT_PUBLIC_API_URL + '/vacation/package/' + slug)

export { usePackageDetail, fetchPackageDetail }