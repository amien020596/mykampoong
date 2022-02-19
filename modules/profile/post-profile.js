import { authorizeFether } from "libs/fetcher/fetcher-post"
import { config } from "../../constants"
import fetcher from "libs/fetcher/fetcher"
import useSWR from "swr"

const url = config.NEXT_PUBLIC_API_URL + "/profile/change-password";
const changePassword = async (data) => await authorizeFether(url, data, true, true, true);
export { changePassword }