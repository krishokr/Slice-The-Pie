import React from 'react';

export default function EntryBox(props) {

    const style = {
        backgroundColor: props.Info.Color,
        borderRadius: '100%',
        color: '#000'
    }

  return (

    <div>
        <div classname='circle' style={style}></div>
        <h5>{props.Info.Title}</h5>
        

    </div>
  )
}
