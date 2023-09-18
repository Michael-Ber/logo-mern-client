import React from 'react';
import "./spinner.scss";

import spinnerGif from "./spinner.gif";

export const Spinner = (props) => {
  const spinnerStyle = props && {...props}
  return (
    <div className='spinner' style={spinnerStyle}>
        <img src={spinnerGif} alt="spinner" />
    </div>
  )
}
