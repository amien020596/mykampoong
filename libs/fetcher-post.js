// fetch API that mainly used in /module to call API
import { getFormData } from "libs/helpers/form-data";

const fetcher = (url, body, isFormData, withToken) => {
  const contentType = isFormData
    ? "multipart/form-data"
    : "application/x-www-form-urlencoded;charset=UTF-8";
  const data = isFormData ? getFormData(body) : new URLSearchParams(body);
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": contentType,
      Accept: "application/json"
    },
    body: data
  });
};

export default fetcher;
