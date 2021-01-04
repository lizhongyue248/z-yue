const chineseMonth = [
  '',
  '正月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '冬月',
  '腊月'
]
const chineseDate = [
  '',
  '初一',
  '初二',
  '初三',
  '初四',
  '初五',
  '初六',
  '初七',
  '初八',
  '初九',
  '初十',
  '十一',
  '十二',
  '十三',
  '十四',
  '十五',
  '十六',
  '十七',
  '十八',
  '十九',
  '二十',
  '廿一',
  '廿二',
  '廿三',
  '廿四',
  '廿五',
  '廿六',
  '廿七',
  '廿八',
  '廿九',
  '三十'
]

/**
 * 农历日期
 */
class ChineseCalendar {
  readonly now: string
  private readonly publicDate: Date

  constructor(date: Date = new Date()) {
    this.now = date.toLocaleString('ja-JP-u-ca-chinese')
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
  get chineseMonth(): string {
    return chineseMonth[this.month] || ''
  }

  /**
   * 农历中文日
   */
  get chineseDate(): string {
    return chineseDate[this.date] || ''
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
    return `${this.year}${this.chineseMonth}${this.chineseDate}`
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

class Calendar {
  public now: Date
  public chineseCalendar: ChineseCalendar

  constructor(date: Date = new Date()) {
    this.now = date
    this.chineseCalendar = new ChineseCalendar(date)
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
    return [this.festival, this.chineseCalendar.festival].filter((f) => f !== '').join(' ')
  }
}

export default Calendar
