import React from 'react';
import "./spinner.scss";

import spinnerGif from "./spinner.gif";

export const Spinner = () => {
  return (
    <div className='spinner'>
        <img src={spinnerGif} alt="spinner" />
    </div>
  )
}
