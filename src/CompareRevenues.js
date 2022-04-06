import React from 'react';
import './Styles/RevenueExpense.css';

export default function CompareRevenues(props) {
  return (
    <div className='revenue-expense-container'>

      <h2>Compare Revenues</h2>
      <div>Pie Chart</div>
      <button className='next-button' onClick={() => props.changeStep()}>Next</button>

    </div>
  )
}
