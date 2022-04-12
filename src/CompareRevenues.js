import React, {useState, useEffect} from 'react';
import './Styles/RevenueExpense.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { UCD_Revenues_Info }  from './UCD_Info';
import EntryBox from './EntryBox';


export default function CompareRevenues(props) {

  function getColor(name) {
    let revenueObj = UCD_Revenues_Info.find(revenueObj => revenueObj.name === name);
    return revenueObj.color
  }

  function formatRevenueData() {
    let revenueData = UCD_Revenues_Info.map(revenue => ({name: revenue.name, value: revenue.value}))
    return revenueData
  }


  return (
    <div className='revenue-expense-container'>

      <h2>Compare Revenues</h2>
      
      <div className='revenue-expense-content'>
        <div className='ucd-piechart-container'>
          <h1>UC Davis Revenue</h1>
          <PieChart width={730} height={250}>
            <Pie data={formatRevenueData()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {formatRevenueData().map(data => <Cell key={data.name} fill={getColor(data.name)} />)}
            </Pie>
            <Tooltip />
          </PieChart>
          
        </div>
        <div className='user-piechart-container'>
          <h1>Your Guess</h1>
          <PieChart width={730} height={250}>
            <Pie data={props.revenueData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {props.revenueData.map(data => <Cell key={data.name} fill={getColor(data.name)} />)}
            </Pie>
            <Tooltip />
          </PieChart>
          
        </div>

        <div className='entryboxes-container'>
          {/* <div className='entryboxes-title-container'>
            <h5>Function</h5>
            <h5>Percentage</h5>
          </div> */}
          
        </div>
        
        

      </div>
      <button className='next-button' onClick={() => props.changeStep()}>Next</button>

    </div>
      
  )
}
