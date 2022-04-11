import React, {useState} from 'react';
import './Styles/EntryBox.css';
import ReactTooltip from "react-tooltip";

export default function EntryBox(props) {
    const [hover, sethover] = useState(false)
    console.log(props.info);

    const circleStyle = {
        backgroundColor: props.info.Color,
        borderRadius: '100%'
    }

    function handleHover() {
        return hover ? sethover(false) : sethover(true)
    }


  return (

    <div className='entrybox'>
        <div className='circle' style={circleStyle}></div> 
        <h5 data-tip={props.info.Details}>{props.info.Title}</h5>
        <ReactTooltip />
    </div>
  )
}
