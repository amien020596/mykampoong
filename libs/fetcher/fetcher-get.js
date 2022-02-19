// fetch API that mainly used in /module to call API

import { authorizeFetcherAxios, publicFetcherAxios } from "./fetcher";

import cacheData from "memory-cache";
import { getToken } from "libs/helpers/auth";

const fetcher = (url) => {
  const contentType = "application/x-www-form-urlencoded;charset=UTF-8";
  let headers = {
    "Content-Type": contentType,
    Accept: "application/json"
  }
  return fetch(url, {
    method: "GET",
    headers: headers
  });
};

export const publicAxiosGet = url => {


  const value = cacheData.get(url);
  if (value) {
    return value;
  } else {
    const hours = 24;
    const data = publicFetcherAxios({
      url,
      method: "GET",
    }).then(response => {
      return response;
    })
    cacheData.put(url, data, hours * 1000 * 60 * 60);
    return cacheData.get(url);
  }
}

export const authorizeAxiosGet = url => {
  const value = cacheData.get(url);
  if (value) {
    console.log("return value true ")
    return value;
  } else {
    const hours = 24;
    const data = authorizeFetcherAxios({
      url,
      method: "GET",
    }).then(response => {
      return response;
    })
    cacheData.put(url, data, hours * 1000 * 60 * 60);
    return cacheData.get(url);
  }
}
export default fetcher;
