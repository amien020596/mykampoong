import { format, formatDistance, parseISO, subDays } from 'date-fns'

export function date(date) {
  if (date) {
    let datereview = new Date(date);
    let dateformated = formatDistance(datereview, new Date(), { addSuffix: true })
    return dateformated;
  }
}