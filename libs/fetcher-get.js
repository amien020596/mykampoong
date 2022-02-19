// fetch API that mainly used in /module to call API

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

export default fetcher;
