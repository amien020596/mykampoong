import fetcher from 'libs/fetcher'
import useSWR from 'swr'

const useExperienceDetail = (
  slug,
  options = {
    revalidateOnFocus: false
  }
) => {
  const url = process.env.NEXT_PUBLIC_API_URL + '/vacation/experience/' + slug
  const experienceDetailSWR = useSWR(url, fetcher, options)
  return experienceDetailSWR
}

const fetchExperienceDetail = async slug => {
  return await fetch(process.env.NEXT_PUBLIC_API_URL + '/vacation/experience/' + slug)
  .then(res => {
    if(!res.ok) throw new Error('Error')
    return res.json()
  })
  .catch(err => console.log(err))
}

export { useExperienceDetail, fetchExperienceDetail }