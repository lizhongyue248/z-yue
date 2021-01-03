import Index from '../src'

describe('@z-yue/calendar', () => {
  test('Test Success Result 2020.12.31', () => {
    // 2020.12.31 周四测试
    const calendar = new Index(new Date(2020, 11, 31))
    const chineseCalendar = calendar.chineseCalendar
    expect(calendar.year).toBe(2020)
    expect(calendar.month).toBe(12)
    expect(calendar.date).toBe(31)
    expect(calendar.day).toBe(4)
    expect(chineseCalendar.year).toBe('庚子年')
    expect(chineseCalendar.month).toBe(11)
    expect(chineseCalendar.date).toBe(17)
    expect(chineseCalendar.chineseMonth).toBe('冬月')
    expect(chineseCalendar.chineseDate).toBe('十七')
    expect(chineseCalendar.isBigMonth).toBe(false)
    expect(chineseCalendar.isSmallMonth).toBe(true)
    expect(chineseCalendar.full).toBe('庚子年冬月十七')
  })
  test('Test Success Result 2019.02.05', () => {
    // 2019.02.05 周二测试
    const calendar = new Index(new Date(2019, 1, 5))
    const chineseCalendar = calendar.chineseCalendar
    expect(calendar.year).toBe(2019)
    expect(calendar.month).toBe(2)
    expect(calendar.date).toBe(5)
    expect(calendar.day).toBe(2)
    expect(chineseCalendar.year).toBe('己亥年')
    expect(chineseCalendar.month).toBe(1)
    expect(chineseCalendar.date).toBe(1)
    expect(chineseCalendar.chineseMonth).toBe('正月')
    expect(chineseCalendar.chineseDate).toBe('初一')
    expect(chineseCalendar.isBigMonth).toBe(true)
    expect(chineseCalendar.isSmallMonth).toBe(false)
    expect(chineseCalendar.full).toBe('己亥年正月初一')
  })
  test('Test Success Result 1997.09.26', () => {
    // 1997.09.26 周五测试
    const calendar = new Index(new Date(1997, 8, 26))
    const chineseCalendar = calendar.chineseCalendar
    expect(calendar.year).toBe(1997)
    expect(calendar.month).toBe(9)
    expect(calendar.date).toBe(26)
    expect(calendar.day).toBe(5)
    expect(chineseCalendar.year).toBe('丁丑年')
    expect(chineseCalendar.month).toBe(8)
    expect(chineseCalendar.date).toBe(25)
    expect(chineseCalendar.chineseMonth).toBe('八月')
    expect(chineseCalendar.chineseDate).toBe('廿五')
    expect(chineseCalendar.isBigMonth).toBe(true)
    expect(chineseCalendar.isSmallMonth).toBe(false)
    expect(chineseCalendar.full).toBe('丁丑年八月廿五')
  })
})
