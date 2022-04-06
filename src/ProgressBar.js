import React, {useState, useEffect} from 'react';
import './Styles/ProgressBar.css';

export default function ProgressBar(props) {
  


  // const barStyle =  {
  //   height: 5,
  //   width: '100%',
  //   borderRadius: 50
  // }


  // const circleStyle = {
  //   borderRadius: '100%',
  //   height: '50px',
  //   width: '50px'
  // }

  // const containerStyle = {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
  
  // const barContainerStyle = {
  //     display: 'flex',
  //     justifyContent: 'center',
  //     width: '10%',
  //     height: 50
  // }


  // const fontStyle = {
  //   fontSize: '80%',
  //   fontWeight: 500
  // }

  // const circleContainerStyle = {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     width: '11%'
  // }

  return (
    <div className='container'>

      <div className='column-container' >
        <div className='row-container'>
          <div className='circle' style={{backgroundColor: (props.step >= 1) ? '#022851' : '#e0e0de'}}></div>
          <div className='bar' style={{backgroundColor: (props.step >= 1) ? '#022851' : '#e0e0de'}}></div>
        </div>
        
        <h3>Step 1</h3>
      </div>

      <div className='column-container' >
        <div className='row-container'>
          <div className='circle' style={{backgroundColor: (props.step >= 2) ? '#022851' : '#e0e0de'}}></div>
          <div className='bar' style={{backgroundColor: (props.step >= 2) ? '#022851' : '#e0e0de'}}></div>
        </div>
        
        <h3>Step 2</h3>
      </div>
      <div className='column-container' >
        <div className='row-container'>
          <div className='circle' style={{backgroundColor: (props.step >= 3) ? '#022851' : '#e0e0de'}}></div>
          <div className='bar' style={{backgroundColor: (props.step >= 3) ? '#022851' : '#e0e0de'}}></div>
        </div>
        
        <h3>Step 3</h3>
      </div>
      

      <div className='final-circle-container'>
        <div className='circle' style={{backgroundColor: (props.step >= 4) ? '#022851' : '#e0e0de'}}></div>
        <h3>Step 4</h3>
      </div>
     

      {/* <div className='bar-container'>
        <div className='bar' style={{backgroundColor: (props.step >= 1) ? '#022851' : '#e0e0de'}}></div>
      </div> */}

      {/* <div className='circle-container'>
        <div className='circle' style={{backgroundColor: (props.step >= 2) ? '#022851' : '#e0e0de'}}></div>
        <h3>Step 2</h3>
      </div>

      <div className='bar-container'>
        <div className='bar' style={{backgroundColor: (props.step >= 2) ? '#022851' : '#e0e0de'}}></div>
      </div>

      <div className='circle-container'>
        <div className='circle' style={{backgroundColor: (props.step >= 3) ? '#022851' : '#e0e0de'}}></div>
        <h3>Step 3</h3>
      </div>
      
      <div className='bar-container'>
        <div className='bar' style={{backgroundColor: (props.step >= 3) ? '#022851' : '#e0e0de'}}></div>
      </div>

      <div className='circle-container'>
        <div className='circle' style={{backgroundColor: (props.step === 4) ? '#022851' : '#e0e0de'}}></div>
        <h3>Step 4</h3>
      </div> */}

  </div>
  )
}
