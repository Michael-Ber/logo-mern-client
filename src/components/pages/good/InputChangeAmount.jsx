import React from 'react';

import sub from "../../../assets/icons/order/sub.png";
import add from "../../../assets/icons/order/add.png";

export const InputChangeAmount = ({addAmount, subAmount, inputRef}) => {

  return (
    <div className="order-info-good-main__amount amount-order-info-good-main">
        <img 
            onClick={subAmount}
            src={sub} 
            alt="arrow-sub" 
            className="amount-order-info-good-main__sub"/>
        <input 
            ref={inputRef}
            defaultValue={1}
            type="number" 
            className="amount-order-info-good-main__input"/>
        <img 
            onClick={addAmount}
            src={add} 
            alt="arrow-add" 
            className="amount-order-info-good-main__add"/>
    </div>
  )
}
