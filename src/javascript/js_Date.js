
export default class js_Date {
    constructor(p_year, p_month, p_day, p_plusday) {
        this.iv_year = p_year;
        this.iv_month = p_month;
        this.iv_day = p_day;
        this.iv_plusDay = p_plusday;
    }

    static sm_GetNowDate() {
        let m_Date = new Date();
        return new js_Date(m_Date.getFullYear(), m_Date.getMonth(), m_Date.getDate());
    }
    im_getMonthLastDay() {
        return js_Date.sm_getMonthLastDay(this.iv_year, this.iv_month);
    }
    static sm_getMonthLastDay(p_year, p_month) {
        let lastDay = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        js_Date.sm_isYunYear(p_year) ? lastDay[1] = 29 : lastDay[1] = 28;
        if (p_month - 1 < 0)
            return 0;
        return lastDay[p_month - 1];
    }
    /**                                            +-------------------------
        * -----------------------------------------+ 윤년 처리
        *                                         +-------------------------
        * @description
        *
        *
        *
        *
        * let m_Date = new js_Date('2021-12-29');
        * //m_Date.im_isYunYear();
        * js_Date.sm_isYunYear(m_Date.iv_Year);
        *
        * js_Date.sm_isYunYear(2021);
        *
        *
    **/
    im_isYunYear() {
        return js_Date.sm_isYunYear(this.iv_year);
    }
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

    static sm_yunYear(p_year) {
        if (p_year < 1)
            return 0;
        return Math.trunc(p_year / 4)
            - Math.trunc(p_year / 100)
            + Math.trunc(p_year / 400);
    }
    /**                                            +-------------------------
        * -----------------------------------------+ ?년도 ?월 1일까지의 일수
        *                                          +-------------------------
        * @description
        *
        *
        *
    **/
     im_getDays() {
        return js_Date.sm_getDays(this.iv_year, this.iv_month, this.iv_day);
     }

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


    im_getWeekDay() {
        let m_Days = this.im_getDays();

        let m_Result = m_Days % 7;
        if (m_Result === 0) m_Result = 7;

        return m_Result;

    }
    /**                                            +-------------------------
        * -----------------------------------------+ 일수 더하기 빼기
        *                                          +-------------------------
        * @description
        *
        *
        *
    **/
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
    /**                                            +-------------------------
        * -----------------------------------------+ 에러 체크
        *                                          +-------------------------
        * @description
        *
        *
        *
    **/
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
