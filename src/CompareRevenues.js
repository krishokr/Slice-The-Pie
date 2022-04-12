import React, {useState, useEffect} from 'react';
import './Styles/RevenueExpense.css';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { UCD_Revenues_Info }  from './UCD_Info';
import EntryBox from './EntryBox';


export default function CompareRevenues(props) {
  const [data, setdata] = useState([])

  const data01 = [
    {
      name: "Group A",
      value: 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];

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
        <div className='piechart-container'>
          <PieChart width={730} height={250}>
            <Pie data={formatRevenueData()} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {formatRevenueData().map(data => <Cell key={data.name} fill={getColor(data.name)} />)}
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
