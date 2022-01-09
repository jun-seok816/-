/**
 * @ClassDescripton
 *  달력에 필요한 메소드를 담아두고 있는 클래스
 */

export default class js_Date {
    /**
     * 
     * @param {Number} p_year -년도
     * @param {Number} p_month -월
     * @param {Number} p_day  -일
     * @param {Number} p_plusday -특정 일수 더하기
     */
    constructor(p_year, p_month, p_day, p_plusday) {
        this.iv_year = p_year;
        this.iv_month = p_month;
        this.iv_day = p_day;
        this.iv_plusDay = p_plusday;
    }
    /**
     *@method sm_GetNowDate 
     *
     *@returns 현재 년월일을 param으로 넘긴 js_Date Instance를 return
     */
    static sm_GetNowDate() {
        let m_Date = new Date();
        return new js_Date(m_Date.getFullYear(), m_Date.getMonth(), m_Date.getDate());
    }

    im_getMonthLastDay() {
        return js_Date.sm_getMonthLastDay(this.iv_year, this.iv_month);
    }
    /**
     * @method sm_getMonthLastDay - im_getMonthLastDay의 static메소드
     * @param {Number} p_year -년도
     * @param {Number} p_month -월
     * @returns - 년월에 맞는 달의 마지막 일
     */
    static sm_getMonthLastDay(p_year, p_month) {
        let lastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        js_Date.sm_isYunYear(p_year) ? lastDay[1] = 29 : lastDay[1] = 28;
        if (p_month - 1 < 0)
            return 0;
        return lastDay[p_month - 1];
    }
  
    im_isYunYear() {
        return js_Date.sm_isYunYear(this.iv_year);
    }
    /**
     * @method sm_isYunYear - im_isYunYear의 static 메소드
     * @param {Number} p_year -년도
     * @returns - 윤년이냐 아니냐 true false 리턴
     */
    static sm_isYunYear(p_year) {
        let m_Result = false;
        if (p_year === 0)
            return false;
        if ((p_year % 4) === 0)
            m_Result = true;
        if ((p_year % 100) === 0)
            m_Result = false;
        if ((p_year % 400) === 0)
            m_Result = true;
        return m_Result;
    }
    im_yunYear() {
        return js_Date.sm_yunYear(this.iv_year);
    }
    /**
     * @method sm_yunYear - im_yunYear의 static 메소드
     * @param {Nuber} p_year - 년도
     * @returns p_year 까지의 윤년이었던 해 수
     */
    static sm_yunYear(p_year) {
        if (p_year < 1)
            return 0;
        return Math.trunc(p_year / 4)
            - Math.trunc(p_year / 100)
            + Math.trunc(p_year / 400);
    }

    im_getDays() {
        return js_Date.sm_getDays(this.iv_year, this.iv_month, this.iv_day);
    }

    /**
     * @method sm_getDays - im_getDays의 static메소드
     *
     * @param {Number} p_year - 년도
     * @param {Number} p_month -월
     * @param {Number} p_days  - 일
     * @returns - 년,월,일 에서 0년 1월 1일의 총 일수를 리턴
     */
    static sm_getDays(p_year, p_month = 1, p_days = 1) {
        let m_Year = p_year;
        let m_BeforeYear = m_Year - 1;
        let m_윤달Days = js_Date.sm_yunYear(m_BeforeYear);
        let m_YearsDays = 0;
        let m_Index = 1;
        while (m_Index < p_month) {
            let m_LastDay = js_Date.sm_getMonthLastDay(m_Year, m_Index);
            m_YearsDays = m_YearsDays + m_LastDay;
            m_Index++;
        }
        let m_Result = (m_BeforeYear + 1) * 365 
                    + m_윤달Days 
                    + m_YearsDays 
                    + p_days;
        return m_Result;
    }

    /**
     * 
     * @returns 총 일수를 7로 나눠 매월 1일의 요일을 리턴
     */
    im_getWeekDay() {
        let m_Days = this.im_getDays();

        let m_Result = m_Days % 7;
        if (m_Result === 0) m_Result = 7;

        return m_Result;

    }
    /**
     * 
     * @param {Number} p_year -년도
     * @param {Number} p_month -월
     * @param {Number} p_day  -일
     * @param {Number} p_plusday -특정 일수 더하기
     * @returns -년,월,일에 특정 일수를 더해서 계산한 년 월 일을 리턴
     */
    im_DayCalculate(p_year, p_month, p_day, p_plusDay = 0) {
        let total = js_Date.sm_getDays(p_year, p_month) + p_day + p_plusDay;
        let m_year = Math.trunc(total / 365);
        let m_month = 0;
        let m_남은날수 = 0;
        //console.log("total : %d , m_year : %d" , total , year);
        while (m_year >= 0) {
            if (total - js_Date.sm_getDays(m_year) < 1) {
                m_year--;
                continue;
            }
            m_남은날수 = total - js_Date.sm_getDays(m_year);
            while (m_month <= 12) {
                if (m_남은날수 > js_Date.sm_getMonthLastDay(m_year, m_month)) {
                    //console.log("실행?" + m_남은날수,m_getMonthLastDay(m_year,m_month));
                    m_남은날수 = m_남은날수 - js_Date.sm_getMonthLastDay(m_year, m_month);
                    m_month++;
                }
                else {
                    break;
                }
            }
            break;
        }
        return `${m_year}년${m_month}월${m_남은날수}일`;
    }
    /**
     *  @method error_check - 모든 일수를 반복문으로 돌려 함수가 제대로된 값을 산출하는지 체크
     */
    error_check() {
        let m_totalCount = 0;
        let m_ErrorCount = 0;
        for (let year = 0; year <= 9999; year++) {
            for (let month = 1; month <= 12; month++) {
                let m_MonthLastDay = js_Date.sm_getMonthLastDay(year, month);
                for (let day = 1; day <= m_MonthLastDay; day++) {
                    m_totalCount++;
                    if (this.im_DayCalculate(year, month, day) !== `${year}년${month}월${day}일`) {
                        m_ErrorCount++;
                        console.log('error ! year : %d  month : %d  day : %d ', year, month, day);
                    }
                    if (m_totalCount + 1 !== js_Date.sm_getDays(year, month, day)) {
                        m_ErrorCount++;
                        console.log('Days error! year: %d month : %d day : %d TotalDays : %d Totlacount : %d', year, month, day, this.im_getDays(year, month, day), m_totalCount);
                    }
                }
            }
        }
        console.log("TotalCount : %d , ErrorCount : %d", m_totalCount, m_ErrorCount);
    }
    
}
