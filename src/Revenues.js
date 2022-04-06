import React from 'react';
import './Styles/RevenueExpense.css';

export default function Revenues(props) {
  return (
    <div className='revenue-expense-container'>

      <h2>Revenues</h2>
      <div>Pie Chart</div>
      <button className='next-button' onClick={() => props.changeStep()}>Next</button>

    </div>
  )
}
