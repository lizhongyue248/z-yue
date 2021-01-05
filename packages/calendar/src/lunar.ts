import { lunarMonth, lunarDate } from './constant'

/**
 * 农历日期
 */
class Lunar {
  readonly now: string
  private readonly publicDate: Date
  private readonly LOCALES = 'ja-JP-u-ca-chinese'

  constructor(date: Date = new Date()) {
    this.now = date.toLocaleString(this.LOCALES)
    this.publicDate = date
  }

  /**
   * 农历节日匹配
   * @param month 月
   * @param date 日
   */
  private match = (month: number, date: number): boolean => this.month === month && this.date === date

  /**
   * 农历 年
   */
  get year(): string {
    return this.now.slice(0, this.now.search(/\d+月/))
  }

  /**
   * 农历 月
   */
  get month(): number {
    return parseInt(this.now.slice(this.now.search(/\d+月/), this.now.search(/月/)))
  }

  /**
   * 农历 日
   */
  get date(): number {
    return parseInt(this.now.slice(this.now.search(/\d+日/), this.now.search(/日/)))
  }

  /**
   * 弄你中文月
   */
  get lunarMonth(): string {
    return lunarMonth[this.month] || ''
  }

  /**
   * 农历中文日
   */
  get lunarDate(): string {
    return lunarDate[this.date] || ''
  }

  /**
   * 农历是否是大月
   */
  get isBigMonth(): boolean {
    const diff = 30 - this.date
    const publicDate = new Date(this.publicDate)
    publicDate.setDate(publicDate.getDate() + diff)
    const newDate = publicDate.toLocaleString('ja-JP-u-ca-chinese')
    const newMonth = parseInt(newDate.slice(newDate.search(/\d+月/), newDate.search(/月/)))
    return newMonth === this.month
  }

  /**
   * 农历是否是小月
   */
  get isSmallMonth(): boolean {
    return !this.isBigMonth
  }

  /**
   * 农历全称
   */
  get full(): string {
    return `${this.year}${this.lunarMonth}${this.lunarDate}`
  }

  /**
   * 农历新年 初一-初七 🎉
   * @return boolean
   */
  isNewYear = (): boolean =>
    this.match(1, 1) ||
    this.match(1, 2) ||
    this.match(1, 3) ||
    this.match(1, 4) ||
    this.match(1, 5) ||
    this.match(1, 6) ||
    this.match(1, 7)

  /**
   * 元宵节 大年十五 🥣
   * @return boolean
   */
  isLantern = (): boolean => this.match(1, 15)

  /**
   * 七夕节 农历七月初七 🎋
   * @return boolean
   */
  isDoubleSeventh = (): boolean => this.match(7, 7)

  /**
   * 中秋节 农历八月十五 🥮
   * @return boolean
   */
  isMidAutumn = (): boolean => this.match(8, 15)

  /**
   * 重阳节 农历九月初九 🌱
   * @return boolean
   */
  isDoubleNinth = (): boolean => this.match(9, 9)

  /**
   * 农历节日
   */
  get festival(): string {
    if (this.isNewYear()) return '新年'
    if (this.isLantern()) return '元宵节'
    if (this.isDoubleSeventh()) return '七夕节'
    if (this.isMidAutumn()) return '中秋节'
    if (this.isDoubleNinth()) return '重阳节'
    return ''
  }
}

export default Lunar
