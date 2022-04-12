import React, {useState} from 'react';
import './Styles/EntryBox.css';
import ReactTooltip from "react-tooltip";

export default function EntryBox(props) {
    const [hover, sethover] = useState(false)

    const circleStyle = {
        backgroundColor: props.info.color,
        borderRadius: '100%'
    }

    

    function handleHover() {
        return hover ? sethover(false) : sethover(true)
    }

    function handleChange(e) {
        let obj = {name: props.info.name, value: parseInt(e.target.value)};
        return props.changeUserData(obj)
    }

  return (

    <div className='entrybox'>
      <input placeholder='0' type="number" onChange={handleChange}/>
        <div className='circle' style={circleStyle}></div> 
        <h5 data-tip={props.info.details}>{props.info.name}</h5>
        <ReactTooltip />
    </div>
  )
}
