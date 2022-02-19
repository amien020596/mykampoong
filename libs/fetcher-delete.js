// fetch API that mainly used in /module to call API

import { getFormData } from "libs/helpers/form-data";
import { getToken } from "libs/helpers/auth";

const fetcher = (url, isFormData, withToken) => {
  const contentType = isFormData
    ? "multipart/form-data"
    : "application/x-www-form-urlencoded;charset=UTF-8";
  let headers = {
    "Content-Type": contentType,
    Accept: "application/json"
  }

  if (withToken) {
    headers = {
      ...headers,
      Authorization: `Bearer ${getToken().token}`,
    }
  }


  return fetch(url, {
    method: "DELETE",
    headers: headers,
  });
};

export default fetcher;
