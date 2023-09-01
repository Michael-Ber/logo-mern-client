import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import sub from "../../../assets/icons/order/sub.png";
import add from "../../../assets/icons/order/add.png";

import { removeFromCart } from '../../../redux/goods/GoodsSlice';
import { fetchMe } from '../../../redux/auth/AuthSlice';
import { changeTotalOrder } from '../../../redux/goods/GoodsSlice';

export const CartItem = ({item}) => {

    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1); 


     
    useEffect(() => {
        if(item.amount) {
            setAmount(item.amount)
        }
    }, [])

    useEffect(() => {
        dispatch(changeTotalOrder({ id: item._id, total: amount*item.newCost }))
    }, [amount, dispatch])

    const handleRemoveItem = async() => {
        await dispatch(removeFromCart({goodId: item._id}));
        await dispatch(changeTotalOrder)
        return await dispatch(fetchMe());
    }


  return (
    <li key={item._id} className='yourOrder-main__item item-yourOrder'>
        <div className="item-yourOrder__img">
            <img src={item.imgUrl} alt={item.title} />
        </div>
        <div className="item-yourOrder__descr">
            <p className='item-yourOrder__title'>
            <span>{item.title}</span>
            <span> {item.descr}</span>
            </p>
            <p className='item-yourOrder__cost'>{item.newCost} &#8381;</p>
        </div>
        <div className="item-yourOrder__amount">
            <img 
            onClick={() => setAmount(state => state > 1 ? state - 1: 1)}
            src={sub} 
            alt="arrow-sub" 
            className="amount-order-info-good-main__sub"/>
            <input 
            value={amount}
            onChange={e => setAmount(e.target.value)}
            type="number" 
            className="amount-order-info-good-main__input"/>
            <img 
            onClick={() => setAmount(state => state < 10 ? state + 1: 10)}
            src={add} 
            alt="arrow-add" 
            className="amount-order-info-good-main__add"/>
        </div>
        <div className="item-yourOrder__total">
            <p>Всего:</p>
            <p className='item-yourOrder__cost'>{(amount) * item.newCost} &#8381;</p>
        </div>
        <div 
            onClick={handleRemoveItem}
            className="item-yourOrder__remove">&#10005;</div>
    </li>
  )
}
