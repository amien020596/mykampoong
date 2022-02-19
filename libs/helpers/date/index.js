import { format, formatDistance, parseISO, subDays } from 'date-fns'

export function addToCartDate(date) {
  const formatedate = new Date(date)
  const dateformated = format(formatedate, 'yyyy-MM-dd H:m:s')
  return dateformated
};

export function date(date) {
  if (date) {
    let datereview = new Date(date);
    let dateformated = formatDistance(datereview, new Date(), { addSuffix: true })
    return dateformated;
  }
}

export function dateCheckout(date) {
  if (date) {
    let datebooking = new Date(date);
    let dateformated = format(datebooking, 'MMM dd yyyy')
    return dateformated;
  }
}