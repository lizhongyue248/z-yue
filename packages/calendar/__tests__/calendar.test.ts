import Calendar from '../src'

describe('@z-yue/calendar Success Test', () => {
  test('Test Success Result 2020.12.31', () => {
    // 2020.12.31 周四测试
    const calendar = new Calendar(new Date(2020, 11, 31))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2020)
    expect(calendar.month).toBe(12)
    expect(calendar.date).toBe(31)
    expect(calendar.day).toBe(4)
    expect(chineseCalendar.year).toBe('庚子年')
    expect(chineseCalendar.month).toBe(11)
    expect(chineseCalendar.date).toBe(17)
    expect(chineseCalendar.lunarMonth).toBe('冬月')
    expect(chineseCalendar.lunarDate).toBe('十七')
    expect(chineseCalendar.isBigMonth).toBe(false)
    expect(chineseCalendar.isSmallMonth).toBe(true)
    expect(chineseCalendar.full).toBe('庚子年冬月十七')
  })
  test('Test Success Result 2019.02.05', () => {
    // 2019.02.05 周二测试
    const calendar = new Calendar(new Date(2019, 1, 5))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2019)
    expect(calendar.month).toBe(2)
    expect(calendar.date).toBe(5)
    expect(calendar.day).toBe(2)
    expect(chineseCalendar.year).toBe('己亥年')
    expect(chineseCalendar.month).toBe(1)
    expect(chineseCalendar.date).toBe(1)
    expect(chineseCalendar.lunarMonth).toBe('正月')
    expect(chineseCalendar.lunarDate).toBe('初一')
    expect(chineseCalendar.isBigMonth).toBe(true)
    expect(chineseCalendar.isSmallMonth).toBe(false)
    expect(chineseCalendar.full).toBe('己亥年正月初一')
  })
  test('Test Success Result 1997.09.26', () => {
    // 1997.09.26 周五测试
    const calendar = new Calendar(new Date(1997, 8, 26))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(1997)
    expect(calendar.month).toBe(9)
    expect(calendar.date).toBe(26)
    expect(calendar.day).toBe(5)
    expect(chineseCalendar.year).toBe('丁丑年')
    expect(chineseCalendar.month).toBe(8)
    expect(chineseCalendar.date).toBe(25)
    expect(chineseCalendar.lunarMonth).toBe('八月')
    expect(chineseCalendar.lunarDate).toBe('廿五')
    expect(chineseCalendar.isBigMonth).toBe(true)
    expect(chineseCalendar.isSmallMonth).toBe(false)
    expect(chineseCalendar.full).toBe('丁丑年八月廿五')
  })
})

describe('@z-yue/calendar Festival Test', function () {
  test('Test Calendar Festival New Year 2021.01.01', () => {
    // 2021.01.01 周五测试
    const calendar = new Calendar(new Date(2021, 0, 1))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(1)
    expect(calendar.date).toBe(1)
    expect(calendar.day).toBe(5)
    expect(calendar.festival).toBe('元旦节')
    expect(calendar.fullFestival).toBe('元旦节')
    expect(chineseCalendar.festival).toBe('')
    expect(calendar.isNewYear()).toBe(true)
    expect(
      [
        calendar.isHalloween(),
        calendar.isChristmas(),
        calendar.isAprilFoolDay(),
        calendar.isValentineDay(),
        calendar.isTombSweeping(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isLantern(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
  test('Test Calendar Festival Halloween 2021.10.31', () => {
    // 2021.10.31 周日测试
    const calendar = new Calendar(new Date(2021, 9, 31))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(10)
    expect(calendar.date).toBe(31)
    expect(calendar.day).toBe(0)
    expect(calendar.festival).toBe('万圣节')
    expect(calendar.fullFestival).toBe('万圣节')
    expect(chineseCalendar.festival).toBe('')
    expect(calendar.isHalloween()).toBe(true)
    expect(
      [
        calendar.isNewYear(),
        calendar.isChristmas(),
        calendar.isAprilFoolDay(),
        calendar.isValentineDay(),
        calendar.isTombSweeping(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isLantern(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
  test('Test Calendar Festival Christmas 2021.12.25', () => {
    // 2021.12.25 周六测试
    const calendar = new Calendar(new Date(2021, 11, 25))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(12)
    expect(calendar.date).toBe(25)
    expect(calendar.day).toBe(6)
    expect(calendar.festival).toBe('圣诞节')
    expect(calendar.fullFestival).toBe('圣诞节')
    expect(chineseCalendar.festival).toBe('')
    expect(calendar.isChristmas()).toBe(true)
    expect(
      [
        calendar.isNewYear(),
        calendar.isHalloween(),
        calendar.isAprilFoolDay(),
        calendar.isValentineDay(),
        calendar.isTombSweeping(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isLantern(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
  test('Test Calendar Festival AprilFoolDay 2021.4.1', () => {
    // 2021.4.1 周四测试
    const calendar = new Calendar(new Date(2021, 3, 1))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(4)
    expect(calendar.date).toBe(1)
    expect(calendar.day).toBe(4)
    expect(calendar.festival).toBe('愚人节')
    expect(calendar.fullFestival).toBe('愚人节')
    expect(chineseCalendar.festival).toBe('')
    expect(calendar.isAprilFoolDay()).toBe(true)
    expect(
      [
        calendar.isNewYear(),
        calendar.isHalloween(),
        calendar.isChristmas(),
        calendar.isValentineDay(),
        calendar.isTombSweeping(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isLantern(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
  test('Test Calendar Festival ValentineDay 2021.4.1', () => {
    // 2021.2.14 周日测试
    const calendar = new Calendar(new Date(2021, 1, 14))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(2)
    expect(calendar.date).toBe(14)
    expect(calendar.day).toBe(0)
    expect(calendar.festival).toBe('情人节')
    expect(calendar.fullFestival).toBe('情人节 新年')
    expect(chineseCalendar.festival).toBe('新年')
    expect(calendar.isValentineDay()).toBe(true)
    expect(chineseCalendar.isNewYear()).toBe(true)
    expect(
      [
        calendar.isNewYear(),
        calendar.isHalloween(),
        calendar.isChristmas(),
        calendar.isAprilFoolDay(),
        calendar.isTombSweeping(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isLantern()
      ].includes(true)
    ).toBe(false)
  })
  test('Test Calendar Festival TombSweeping 2021.4.4', () => {
    // 2021.4.4 周日测试
    const calendar = new Calendar(new Date(2021, 3, 4))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(4)
    expect(calendar.date).toBe(4)
    expect(calendar.day).toBe(0)
    expect(calendar.festival).toBe('清明节')
    expect(calendar.fullFestival).toBe('清明节')
    expect(chineseCalendar.festival).toBe('')
    expect(calendar.isTombSweeping()).toBe(true)
    expect(
      [
        calendar.isNewYear(),
        calendar.isHalloween(),
        calendar.isChristmas(),
        calendar.isAprilFoolDay(),
        calendar.isValentineDay(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isLantern(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
})

describe('@z-yue/calendar Chinese Festival Test', () => {
  test('Test Calendar Festival DoubleNinth 2021.10.14', () => {
    // 2021.10.14 周三测试
    const calendar = new Calendar(new Date(2021, 9, 14))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(10)
    expect(calendar.date).toBe(14)
    expect(calendar.day).toBe(4)
    expect(calendar.festival).toBe('')
    expect(calendar.fullFestival).toBe('重阳节')
    expect(chineseCalendar.festival).toBe('重阳节')
    expect(chineseCalendar.isDoubleNinth()).toBe(true)
    expect(
      [
        calendar.isTombSweeping(),
        calendar.isNewYear(),
        calendar.isHalloween(),
        calendar.isChristmas(),
        calendar.isAprilFoolDay(),
        calendar.isValentineDay(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isLantern(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
  test('Test Calendar Festival MidAutumn 2021.9.21', () => {
    // 2021.9.21 周二测试
    const calendar = new Calendar(new Date(2021, 8, 21))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(9)
    expect(calendar.date).toBe(21)
    expect(calendar.day).toBe(2)
    expect(calendar.festival).toBe('')
    expect(calendar.fullFestival).toBe('中秋节')
    expect(chineseCalendar.festival).toBe('中秋节')
    expect(chineseCalendar.isMidAutumn()).toBe(true)
    expect(
      [
        calendar.isTombSweeping(),
        calendar.isNewYear(),
        calendar.isHalloween(),
        calendar.isChristmas(),
        calendar.isAprilFoolDay(),
        calendar.isValentineDay(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isLantern(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
  test('Test Calendar Festival DoubleSeventh 2021.8.14', () => {
    // 2021.8.14 周六测试
    const calendar = new Calendar(new Date(2021, 7, 14))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(8)
    expect(calendar.date).toBe(14)
    expect(calendar.day).toBe(6)
    expect(calendar.festival).toBe('')
    expect(calendar.fullFestival).toBe('七夕节')
    expect(chineseCalendar.festival).toBe('七夕节')
    expect(chineseCalendar.isDoubleSeventh()).toBe(true)
    expect(
      [
        calendar.isTombSweeping(),
        calendar.isNewYear(),
        calendar.isHalloween(),
        calendar.isChristmas(),
        calendar.isAprilFoolDay(),
        calendar.isValentineDay(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isLantern(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
  test('Test Calendar Festival Lantern 2021.2.26', () => {
    // 2021.2.26 周五测试
    const calendar = new Calendar(new Date(2021, 1, 26))
    const chineseCalendar = calendar.lunar
    expect(calendar.year).toBe(2021)
    expect(calendar.month).toBe(2)
    expect(calendar.date).toBe(26)
    expect(calendar.day).toBe(5)
    expect(calendar.festival).toBe('')
    expect(calendar.fullFestival).toBe('元宵节')
    expect(chineseCalendar.festival).toBe('元宵节')
    expect(chineseCalendar.isLantern()).toBe(true)
    expect(
      [
        calendar.isTombSweeping(),
        calendar.isNewYear(),
        calendar.isHalloween(),
        calendar.isChristmas(),
        calendar.isAprilFoolDay(),
        calendar.isValentineDay(),
        chineseCalendar.isDoubleNinth(),
        chineseCalendar.isMidAutumn(),
        chineseCalendar.isDoubleSeventh(),
        chineseCalendar.isNewYear()
      ].includes(true)
    ).toBe(false)
  })
})
