// fetch API that mainly used in /module to call API

import { getFormData } from "libs/helpers/form-data";
import { getToken } from "libs/helpers/auth";

const fetcher = (url, body, isFormData, withToken, isJson) => {
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

  let data;
  if (isJson) {
    data = JSON.stringify(body);
    headers = {
      ...headers,
      "Content-Type": "application/json"
    }
  } else {
    data = isFormData ? getFormData(body) : new URLSearchParams(body);
  }

  return fetch(url, {
    method: "POST",
    headers: headers,
    body: data
  });
};

export default fetcher;
