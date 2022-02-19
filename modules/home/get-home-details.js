import fetcher from 'libs/fetcher/fetcher'
import useSWR from 'swr'

// never used function 
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