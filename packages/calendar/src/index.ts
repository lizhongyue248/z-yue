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
}

class Index {
  public now: Date
  public chineseCalendar: ChineseCalendar

  constructor(date: Date = new Date()) {
    this.now = date
    this.chineseCalendar = new ChineseCalendar(date)
  }

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
}

export default Index
