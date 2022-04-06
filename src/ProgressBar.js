import React, {useState, useEffect} from 'react';
import './Styles/ProgressBar.css';

export default function ProgressBar(props) {
  

  return (
    <div className='container'>
      <div className='column-container' >
        <div className='row-container'>
          <div className='outer-circle' style={{borderColor: (props.step === 1 ? '#FFBF00' : '')}}><div className='circle' style={{backgroundColor: (props.step >= 1) ? '#022851' : '#e0e0de'}}></div></div>
          <div className='bar' style={{backgroundColor: (props.step >= 1) ? '#022851' : '#e0e0de'}}></div>
        </div>
        <h3>Step 1</h3>
      </div>

      <div className='column-container' >
        <div className='row-container'>
        <div className='outer-circle' style={{borderColor: (props.step === 2 ? '#FFBF00' : '')}}><div className='circle' style={{backgroundColor: (props.step >= 2) ? '#022851' : '#e0e0de'}}></div></div>
          <div className='bar' style={{backgroundColor: (props.step >= 2) ? '#022851' : '#e0e0de'}}></div>
        </div>
        
        <h3>Step 2</h3>
      </div>
      <div className='column-container' >
        <div className='row-container'>
        <div className='outer-circle' style={{borderColor: (props.step === 3 ? '#FFBF00' : '')}}><div className='circle' style={{backgroundColor: (props.step >= 3) ? '#022851' : '#e0e0de'}}></div></div>
          <div className='bar' style={{backgroundColor: (props.step >= 3) ? '#022851' : '#e0e0de'}}></div>
        </div>
        <h3>Step 3</h3>
      </div>
      

      <div className='column-container' >
        <div className='row-container'>
        <div className='outer-circle' style={{borderColor: (props.step === 4 ? '#FFBF00' : '')}}><div className='circle' style={{backgroundColor: (props.step >= 4) ? '#022851' : '#e0e0de'}}></div></div>
          
        </div>
        <h3>Step 4</h3>
      </div>
     

  </div>
  )
}
