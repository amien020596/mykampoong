// fetch API that mainly used in /module to call API
const fetcher = (...args) => fetch(...args).then(res => {
  if(res.ok){
    return res.json()
  } else {
    return res
  }
}).catch(err => {
  console.log(err)
})

export default fetcher