import fetcher from 'libs/fetcher'
import useSWR from 'swr'

const usePackageDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {
  const url = process.env.NEXT_PUBLIC_API_URL + '/vacation/package/' + slug
  const packageDetailSWR = useSWR(url, fetcher, options)
  return packageDetailSWR
}

const fetchPackageDetail = async slug => {
  return await fetch(process.env.NEXT_PUBLIC_API_URL + '/vacation/package/' + slug)
  .then(res => {
    if(!res.ok) throw new Error('Error')
    return res.json()
  })
  .catch(err => console.log(err))
}

export { usePackageDetail, fetchPackageDetail }