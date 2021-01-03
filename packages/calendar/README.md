# `@z-yue/calendar`

> 日历工具，获取指定时间的农历信息

## Usage

```javascript

import Calendar from '@z-yue/calendar'
const calendar = new Calendar(new Date(2020, 11, 31))
console.log(calendar)

```

## Result

```json
{
  "now": "2020-12-30T16:00:00.000Z",
  "year": 2020,
  "month": 12,
  "date": 30,
  "day": 3,
  "chineseCalendar": {
    "now": "庚子年11月17日 0:00:00",
    "full": "庚子年冬月十七",
    "year": "庚子年",
    "month": "11",
    "date": "17",
    "chineseMonth": "冬月",
    "chineseDate": "十七",
    "isBigMonth": true,
    "isSmallMonth": false
  }
}
```
