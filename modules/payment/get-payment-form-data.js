import fetcher, { publicAxiosGet } from "libs/fetcher/fetcher-get";

import { config } from "../../constants";

const getProvinceDataPayment = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/list/provinces?name=" + `${data.name}`;
  return await publicAxiosGet(url);
};

const getCityDataPayment = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/list/regencies/" + `${data.id}/?name=` + `${data.name}`;
  return await publicAxiosGet(url);
};

const getDistrictsDataPayment = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/list/districts/" + `${data}`;
  return await publicAxiosGet(url);
};
const getVillagesDataPayment = async (data) => {
  const url = config.NEXT_PUBLIC_API_URL + "/list/villages/" + `${data}`;
  return await publicAxiosGet(url);
};


export { getCityDataPayment, getProvinceDataPayment };
