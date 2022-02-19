import { config } from "../../constants"
import fetcher from "libs/fetcher/fetcher"
import { authorizeAxiosGet } from "libs/fetcher/fetcher-get"
import useSWR from "swr"

const useProfile = () => {

    const url = '/profile'
    const profileSWR = useSWR(url, fetcher)

    return profileSWR
}

const fetchProfile = () => {
    return await authorizeAxiosGet(config.NEXT_PUBLIC_API_URL + '/profile')
}


export { useProfile, fetchProfile }