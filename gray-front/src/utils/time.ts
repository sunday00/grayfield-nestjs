import DayJs from 'dayjs'
import weekdays from 'dayjs/plugin/weekday'
import relativeTime from 'dayjs/plugin/relativeTime'

DayJs.extend(weekdays)
DayJs.extend(relativeTime)

export const time = (dateTime?: string | Date | DayJs.Dayjs) => {
  if (dateTime) return DayJs(dateTime)

  return DayJs()
}
