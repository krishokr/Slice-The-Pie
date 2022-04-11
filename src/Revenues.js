import React from 'react';
import './Styles/RevenueExpense.css';
import { PieChart, Pie } from 'recharts';
import './EntryBox';
import { UCD_Revenues_Info }  from './UCD_Info';
import EntryBox from './EntryBox';


export default function Revenues(props) {

  return (
    <div className='revenue-expense-container'>

      <h2>Revenues</h2>
      
      <div className='revenue-expense-content'>
        <div className='piechart-container'>
          <PieChart width={730} height={250}>
            <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
          </PieChart>
        </div>

        <div className='entryboxes-container'>
          {/* <div className='entryboxes-title-container'>
            <h5>Function</h5>
            <h5>Percentage</h5>
          </div> */}
          {UCD_Revenues_Info.map(revenueInfo => <EntryBox key={revenueInfo.Title} info={revenueInfo}/>)}
        </div>
        
        

      </div>
      <button className='next-button' onClick={() => props.changeStep()}>Next</button>

    </div>
      
  )
}
