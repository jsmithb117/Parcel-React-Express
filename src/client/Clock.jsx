import React from 'react';

const Clock = function(props) {
  return (
    <div>
    <div className="clock"> {props.time}</div>
    <div className="data"> {props.data}</div>
    </div>
  )
}
export default Clock