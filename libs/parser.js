
// function to parse number to rupiah IDR
const parseNumber = value => {
  if (isNaN(value)) return 'Not number'
  return new Intl.NumberFormat(
    ['ban', 'id']
  ).format(value)
}

// function to parse date to dd-MMMM-YYYY format
const parseDate = (
  value, 
  options = {
    dateStyle: 'long'
  }
) => {
  return new Intl.DateTimeFormat(
    'en-US',
    options
  ).format(new Date(value))
}

const parseName = value => {
  let nameArray = value.split(' ');
  return nameArray[0].split('')[0] + nameArray[nameArray.length - 1].split('')[0]
}

export {
  parseNumber,
  parseDate,
  parseName
}

