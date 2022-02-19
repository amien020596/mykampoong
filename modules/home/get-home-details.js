import fetcher from 'libs/fetcher'
import useSWR from 'swr'

const useHome = (
  options = {
    revalidateOnFocus: false
  }
) => {
  const url = '/home'
  const homeSWR = useSWR(url, fetcher, options)
  return homeSWR
}


export { useHome }