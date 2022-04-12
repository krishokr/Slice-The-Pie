import React, {useState, useEffect} from 'react';
import './Styles/RevenueExpense.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { UCD_Expenses_Info }  from './UCD_Info';
import EntryBox from './EntryBox';

export default function CompareExpenditures(props) {

  function getColor(name) {
    let expendObj = UCD_Expenses_Info.find(expendObj => expendObj.name === name);
    return expendObj.color
  }

  function formatExpenditureData() {
    let expendData = UCD_Expenses_Info.map(expend => ({name: expend.name, value: expend.value}))
    return expendData
  }


  return (
    <div className='revenue-expense-container'>

      <h2>Compare Expenditures</h2>
      
      <div className='revenue-expense-content'>
        
        <div className='ucd-piechart-container'>
          <h1>UC Davis Expenditures</h1>
          <PieChart width={730} height={250}>
            <Pie data={formatExpenditureData()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {formatExpenditureData().map(data => <Cell key={data.name} fill={getColor(data.name)} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className='user-piechart-container'>
          <h1>Your Guess</h1>
          <PieChart width={730} height={250}>
            <Pie data={props.expenditureData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {props.expenditureData.map(data => <Cell key={data.name} fill={getColor(data.name)} />)}
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
      <button className='next-button' onClick={() => props.changeStep()}>Restart</button>

    </div>
      
  )
}
