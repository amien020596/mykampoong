import fetcher, { publicFetcherPost } from "libs/fetcher/fetcher-post";

import { config } from '../../constants';

const authRegister = (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/register";

  return publicFetcherPost(url, data);
};

const authLogin = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/login";

  return await publicFetcherPost(url, data);
};

const refreshToken = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/refresh-token";

  return await fetcher(url, data, true, true, true);
};

export { authRegister, refreshToken, authLogin };
