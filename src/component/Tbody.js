import js_Date from "../javascript/js_Date.js"
import React, { useState } from 'react';
import styles from "../css/Tbody.module.css"



export default function Tbody(props){

    let m_Today = new js_Date(props.p_year, props.p_month,1,0)
    let m_Days = m_Today.im_getDays();
    let m_WeekDay = m_Today.im_getWeekDay();
    let m_LastDay = m_Today.im_getMonthLastDay();
    let day = 1;

    console.log(m_Days, m_WeekDay);

    return(
        <tbody id="tbody">
        {
            [...Array(6)].map((trn)=>{
                let week =[];
                for(let i= 1; i<=7; i++){
                    if (m_WeekDay > 1) {
                        m_WeekDay--;
                        week.push(<td></td>);
                    } else {
                        if (day <= m_LastDay) {
                            week.push(<td key={day}>{day++}</td>)
                        } else {
                            week.push(<td></td>);
                        }
                    }
                }
                return <tr key={trn}>{week}</tr>
            })
            
        }
        </tbody>
    )
}