import fetcher from "libs/fetcher-post";

const authRegister = async (data) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/register";

  return await fetcher(url, data);
};

const authLogin = async (data) => {
  const url = process.env.NEXT_PUBLIC_API_URL + "/login";

  return await fetcher(url, data, true);
};

export { authRegister, authLogin };
