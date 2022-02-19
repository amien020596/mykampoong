import { config } from '../../constants';
import fetcher from 'libs/fetcher/fetcher'
import { publicAxiosGet } from 'libs/fetcher/fetcher-get';
import useSWR from 'swr'

// we can't use swr in here
const useExperienceDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {

  const url = config.NEXT_PUBLIC_API_URL + '/vacation/experience/' + slug
  const experienceDetailSWR = useSWR(url, fetcher, options)
  return experienceDetailSWR
}

const fetchExperienceDetail = async slug => await publicAxiosGet(config.NEXT_PUBLIC_API_URL + '/vacation/experience/' + slug)

export { useExperienceDetail, fetchExperienceDetail }