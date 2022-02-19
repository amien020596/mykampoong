import axios from "axios"

const uninterceptedAxiosInstance = axios.create();

// fetch API that mainly used in /module to call API
const fetcher = (...args) => fetch(...args).then(res => {
  if (res.ok) {
    return res.json()
  } else {
    return res
  }
}).catch(err => {
  console.log(err)
})


export const publicFetcherAxios = (...args) => uninterceptedAxiosInstance(...args).then(response => {

  if (response.ok) {
    return response.json()
  } else {
    return response.data
  }

})

export const authorizeFetcherAxios = (...args) => axios(...args).then(response => {

  if (response.ok) {
    return response.json()
  } else {

    return response.data
  }

}).catch(error => {
  console.log('error fetch authorize axios', error)
})
export default fetcher