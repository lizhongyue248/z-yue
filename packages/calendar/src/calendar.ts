import Lunar from './lunar'

class Calendar {
  public now: Date
  public lunar: Lunar

  constructor(date: Date = new Date()) {
    this.now = date
    this.lunar = new Lunar(date)
  }

  /**
   * 阳历节日匹配
   * @param month 月
   * @param date 日
   */
  private match = (month: number, date: number): boolean => this.month === month && this.date === date

  /**
   * 公历 年
   */
  get year(): number {
    return this.now.getFullYear()
  }

  /**
   * 公历 月
   */
  get month(): number {
    return this.now.getMonth() + 1
  }

  /**
   * 公历 日
   */
  get date(): number {
    return this.now.getDate()
  }

  /**
   * 公历 周几
   */
  get day(): number {
    return this.now.getDay()
  }

  /**
   * 清明节 4.4 🙇🏻
   * @return boolean
   */
  isTombSweeping = (): boolean => this.match(4, 4)

  /**
   * 情人节 2.14 🌹
   * @return boolean
   */
  isValentineDay = (): boolean => this.match(2, 14)

  /**
   * 愚人节 4.1 🤡
   * @return boolean
   */
  isAprilFoolDay = (): boolean => this.match(4, 1)

  /**
   * 圣诞节 12.25 🎄
   * @return boolean
   */
  isChristmas = (): boolean => this.match(12, 25)

  /**
   * 万圣节 10.31 🎃
   * @return boolean
   */
  isHalloween = (): boolean => this.match(10, 31)

  /**
   * 元旦节 1.1 🎉
   * @return boolean
   */
  isNewYear = (): boolean => this.match(1, 1)

  /**
   * 阳历节日
   */
  get festival(): string {
    if (this.isTombSweeping()) return '清明节'
    if (this.isValentineDay()) return '情人节'
    if (this.isAprilFoolDay()) return '愚人节'
    if (this.isChristmas()) return '圣诞节'
    if (this.isHalloween()) return '万圣节'
    if (this.isNewYear()) return '元旦节'
    return ''
  }

  /**
   * 完整的节日信息
   */
  get fullFestival(): string {
    return [this.festival, this.lunar.festival].filter((f) => f !== '').join(' ')
  }
}

export default Calendar
