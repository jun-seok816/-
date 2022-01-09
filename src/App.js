import './App.css';
import React, { useState } from 'react';
import styles from "./css/App.module.css"
import Thead from "./component/Thead.js"
import Tbody from "./component/Tbody.js"


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
    </div>
  );
}

export default App;
