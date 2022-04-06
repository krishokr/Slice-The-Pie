import React from 'react';
import './Styles/RevenueExpense.css';

export default function CompareExpenditures(props) {
  return (
    <div className='revenue-expense-container'>

      <h2>Compare Expenditures</h2>
      <div>Pie Chart</div>
      <button className='next-button' onClick={() => props.changeStep()}>Finish</button>

    </div>
  )
}
