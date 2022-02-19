
// function to parse number to rupiah IDR
const parseNumber = value => {
  if (isNaN(value)) return 'Not number'
  return new Intl.NumberFormat(
    ['ban', 'id']
  ).format(value)
}

const currency = (number, locales = "id-ID", country = "IDR") => {
  if (isNaN(number)) return 'Not number'
  return new Intl.NumberFormat(locales, { style: 'currency', currency: country, minimumFractionDigits: 0 }).format(number)

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

const parseDateStartEnd = (
  valueStart,
  valueEnd,
  options = {
    dateStyle: 'long'
  }
) => {

  const start = new Intl.DateTimeFormat(
    'en-US',
    {
      month: 'short',
      day: 'numeric'
    }
  ).format(new Date(valueStart))

  const end = new Intl.DateTimeFormat(
    'en-US',
    options
  ).format(new Date(valueEnd))
  return `${start} - ${end}`
}
const parseName = value => {
  let nameArray = value.split(' ');
  return nameArray[0].split('')[0] + nameArray[nameArray.length - 1].split('')[0]
}

export {
  parseNumber,
  parseDate,
  parseName,
  parseDateStartEnd,
  currency
}

