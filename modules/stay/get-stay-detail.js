import fetcher from 'libs/fetcher'
import useSWR from 'swr'

const useStayDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {
  const url = process.env.NEXT_PUBLIC_API_URL + '/vacation/staycation/' + slug
  const stayDetailSWR = useSWR(url, fetcher, options)
  return stayDetailSWR
}

const fetchStayDetail = async slug => {
  return await fetch(process.env.NEXT_PUBLIC_API_URL + '/vacation/staycation/' + slug)
  .then(res => {
    if(!res.ok) throw new Error('Error')
    return res.json()
  })
  .catch(err => console.log(err))
}

export { useStayDetail, fetchStayDetail }