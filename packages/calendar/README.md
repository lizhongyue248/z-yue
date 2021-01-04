# `@z-yue/calendar`

> 日历工具，获取指定时间的农历（阴历）信息。包括阳历节日、阴历节日。

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
  "isTombSweeping": false,
  "isValentineDay": false,
  "isAprilFoolDay": false,
  "isChristmas": false,
  "isHalloween": false,
  "isNewYear": false,
  "festival": "",
  "fullFestival": "",
  "chineseCalendar": {
    "now": "庚子年11月17日 0:00:00",
    "full": "庚子年冬月十七",
    "year": "庚子年",
    "month": 11,
    "date": 17,
    "chineseMonth": "冬月",
    "chineseDate": "十七",
    "isBigMonth": true,
    "isSmallMonth": false,
    "isNewYear": false,
    "isLantern": false,
    "isDoubleSeventh": false,
    "isDoubleNinth": false,
    "isMidAutumn": false,
    "festival": ""
  }
}
```

结果参数类型 `Calendar` 阳(公)历

| 参数             | 描述                   | 类型    |
| --------------- |:---------------------:| -------:|
|  now            | 当前时间                | Date   |
|  year           | 当前年份                | number |
|  month          | 当前月份                | number |
|  date           | 当前日期                | number |
|  day            | 周几                   | number |
|  isTombSweeping | 清明节 🙇🏻               | boolean |
|  isValentineDay | 清明节 🌹               | boolean |
|  isAprilFoolDay | 愚人节 🤡               | boolean |
|  isChristmas    | 圣诞节 🎄               | boolean |
|  isHalloween    | 万圣节 🎃               | boolean |
|  isNewYear      | 新年 🎉                 | boolean |
|  festival       | 节日                    | string |
|  fullFestival   | 节日（阳历 阴历）空格分隔   | string |


结果参数类型 `ChineseCalendar` 阴(农)历

| 参数             | 描述                   | 类型    |
| --------------- |:---------------------:| -------:|
|  now            | 当前时间                | Date   |
|  year           | 当前阴历年份             | number |
|  month          | 当前阴历月份             | number |
|  date           | 当前阴历日期             | number |
|  chineseMonth   | 当前阴历中文月份          | string |
|  chineseDate    | 当前阴历中文日期          | string |
|  isBigMonth     | 是否阴历大月(30天)       | boolean |
|  isSmallMonth   | 是否阴历小月(29天)       | boolean |
|  isNewYear      | 新年 🎉                | boolean |
|  isLantern      | 元宵节 🥣              | boolean |
|  isDoubleSeventh| 七夕节 🎋              | boolean |
|  isDoubleNinth  | 重阳节 🌱              | boolean |
|  isMidAutumn    | 中秋节 🥮              | boolean |
|  festival       | 节日                   | string |
