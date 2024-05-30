import dayjs from 'dayjs'
// 导入插件
import utc from 'dayjs/plugin/utc'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

/**
 * 补0 1 -> 01
 * @param num 数字
 * @param targetLength 补0数量
 * @returns
 */
export const padZero = (num: number, targetLength = 2) => {
  let str = `${num}`
  while (str.length < targetLength) str = `0${str}`
  return str
}

export const useUTCFormat = (timestamp?: string | number, format = 'YYYY/MM/DD HH:mm:ss', repair = true) => {
  dayjs.extend(utc)
  const UTCDay = timestamp ? dayjs.utc(timestamp) : dayjs.utc()
  const UTCFullYear = UTCDay.year()
  const UTCMonth = repair ? padZero(UTCDay.month() + 1) : UTCDay.month() + 1
  const UTCDate = repair ? padZero(UTCDay.date()) : UTCDay.date()
  const UTCHours = repair ? padZero(UTCDay.hour()) : UTCDay.hour()
  const UTCMinutes = repair ? padZero(UTCDay.minute()) : UTCDay.minute()
  const UTCSeconds = repair ? padZero(UTCDay.second()) : UTCDay.second()
  const UTCMillisecond = repair ? padZero(UTCDay.millisecond()) : UTCDay.millisecond()
  const UTCDayTime = UTCDay.format()
  const UTCFormatDayTime = UTCDay.format(format)
  // 返回当前实例的 UNIX 时间戳，13位数字，毫秒
  const UTCValueof = UTCDay.valueOf()
  // 返回当前实例的 UNIX 时间戳，10位数字，秒。
  const UTCUnix = UTCDay.unix()
  return { UTCDay, UTCFullYear, UTCMonth, UTCDate, UTCHours, UTCMinutes, UTCSeconds, UTCMillisecond, UTCDayTime, UTCFormatDayTime, UTCValueof, UTCUnix }
}

export const useRelativeTime = (timestamp?: string | number) => {
  dayjs.extend(relativeTime)
  return dayjs(timestamp)
}

export const useUtcRelativeTime = (timestamp?: string | number) => {
  dayjs.extend(utc)
  dayjs.extend(relativeTime)
  return dayjs.utc(timestamp)
}

/**
 * 根据剩余的毫秒时间，得出该有天，小时，分钟等的值，返回一个对象
 * @param time 时长 单位 ms
 * @returns
 */
export const parseTimeData = (time: number) => {
  const days = Math.floor(time / (24 * 60 * 60 * 1000))
  const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000))
  const seconds = Math.floor((time % (60 * 1000)) / 1000)
  const milliseconds = Math.floor(time % 1000)
  return { days, hours, minutes, seconds, milliseconds }
}

/**
 * 时间格式转换
 * @param time 时长 单位 ms
 * @param format 格式
 * @param repair 是否补0
 * @returns
 */
export const parseTime = (time: number, format = 'd:h:m:s:ms', repair = true) => {
  const formatType = format.split(':')
  const { days, hours, minutes, seconds, milliseconds } = parseTimeData(time)
  const times = [days, hours, minutes, seconds, milliseconds]
  formatType.map((item, index) => {
    if (format.includes(item)) {
      if (times[index] > 0) {
        // 例如： 有小时没有天的时候 小时不补0
        if (index != 0 && times[index - 1] > 0) {
          const data = repair ? padZero(times[index]) : times[index]
          format = format.replace(item, data + item)
        } else {
          format = format.replace(item, times[index] + item)
        }
      } else {
        format = format.replace(item, '')
      }
    }
  })
  return format.replace(/:/g, '')
}

/**
 * 剩余时间格式转换
 * @param time 时长 单位 ms
 * @param format 格式
 * @returns
 */
export const parseFormat = (time: number, format = 'DD:HH:mm:ss') => {
  let { days, hours, minutes, seconds, milliseconds } = parseTimeData(time)
  days = Number(days)
  // 如果格式化字符串中不存在DD(天)，则将天的时间转为小时中去
  if (!format.includes('DD')) {
    hours += days * 24
  } else if (days > 0) {
    format = format.replace('DD', padZero(days))
  } else {
    format = format.replace('DD:', '')
    format = format.replace('DDday', '')
    hours += days * 24
  }
  // 其他同理于DD的格式化处理方式
  if (!format.includes('HH')) {
    minutes += hours * 60
  } else if (hours > 0) {
    format = format.replace('HH', padZero(hours))
  } else {
    format = format.replace('HH:', '')
    format = format.replace('HHhour', '')
    minutes += hours * 60
  }
  if (!format.includes('mm')) {
    seconds += minutes * 60
  } else {
    format = format.replace('mm', padZero(minutes))
  }
  if (!format.includes('ss')) {
    milliseconds += seconds * 1000
  } else {
    format = format.replace('ss', padZero(seconds))
  }
  return format
}

export const formartDate = (dateStr: any) => {
  const newDate = new Date(dateStr)

  const weekStrList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const monthStrList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', ' Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const day = newDate.getDay()
  const date = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()

  return `${weekStrList[day]}，${date} ${monthStrList[month]} ${year}`
}
