const groupByLocation = (arr = []) => {
  let dataApi = arr?.data || []
  let data = {}
  for (let i = 0; i < dataApi.length; i++) {
    const el = dataApi[i];
    data[el.location] = data[el.location] ?
      [...data[el.location], el] :
      [el]
  }
  return data
}

export {
  groupByLocation
}