import React from 'react';

const Clock = function(props) {
  return (
    <div className="clock"> {props.time}</div>
  )
}
export default Clock