import React from 'react'

export default function Splash(props) {
  return (
    <div className='splash-container'>
        <h1>Welcome to Slice the Pie!</h1>
        <h3>You are now a provost of a major university. It is your job to not only worry about where your revenue comes from, but also to decide how to allocate those funds to which sectors.</h3>
        <h3>Can you guess where your funds come from? <br/> How about where those funds go?</h3>
        <h4>How much will you give to research? Teaching? How about student services?</h4>
        <h5>Sounds stressful?</h5>
        <button onClick={props.changeState}>Nah, let's do this!</button>
    </div>
  )
}
