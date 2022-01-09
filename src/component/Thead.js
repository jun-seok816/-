import styles from "../css/Thead.module.css"
import React, { useState } from 'react';

export default function Thead(props){
    const m_ChangeYear = (e) =>{
        props.onChangeYear(e.target.value);
    }
    const m_ChangeMonth = (e) =>{
        props.onChangeMonth(e.target.value)
    }

    const weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const pre = "<";
    const next = ">";
    return (
        <thead>
            <tr>
               <td colSpan={7}>
                 <span className={styles.pre}>
                    <a>{pre}</a>
                 </span>
                 <span className={styles.inputTime}>
                    <input type="text" value={props.p_year}  min="0" 
                        onChange={m_ChangeYear}/>년
                    <input type="text" value={props.p_month}  min="1" max="12"  
                        onChange={m_ChangeMonth}/>월
                 </span>
                 <span className={styles.next}>
                    <a>{next}</a>
                 </span>
               </td>
            </tr>
            <tr className={styles.week}>
                {weekArr.map((week) => (
                <td key={week}>
                {week}
                </td>
            ))}
            </tr>
      </thead>
    )
}