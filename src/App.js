import './App.css';
import React, { useState } from 'react';
import styles from "./css/App.module.css"
import Thead from "./component/Thead.js"
import Tbody from "./component/Tbody.js"
import Textarea from './component/TextArea';

function App() {
  
  const [year,setYear] = useState(2022);
  const [month,setMonth] = useState(1);
 
  const onChageYear = (data) =>{
    setYear(data);
  }

  const onChangeMonth = (data) =>{
    setMonth(data);
  }
  
  return (
    <div>
      <table>
        <Thead 
            onChangeYear = {onChageYear} 
            onChangeMonth = {onChangeMonth} 
            p_year = {year} 
            p_month = {month}/>
        <Tbody p_year = {year} p_month = {month}/>
      </table>
      {/* 년도: <input type="number" name="Year" id="Year" onChange={m_ChangeYear}/><br/>
      월  : <input type="number" name="Month" id="Month" onChange={m_ChangeMonth}/><br/>
      일  : <input type="number" name="Day" id="Day" onChange={m_ChangeDay}/><br/>
      <input type="number" name="Plusday" id="Plusday" onChange={m_ChangePlusDay}/>일 후<br/> */}
      <Textarea/>
    </div>
  );
}

export default App;
