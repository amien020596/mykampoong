import fetcher from "libs/fetcher"
import useSWR from "swr"

const useProfile = () => {
    const url = '/profile'
    const profileSWR = useSWR(url, fetcher)

    return profileSWR
}

const fetchProfile = () => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + '/profile')
        .then((res) => {
            if(!res.ok) throw new Error(res.statusCode)
            return res.json()
        })
        .catch((err) => console.log(err))
}

export { useProfile, fetchProfile }