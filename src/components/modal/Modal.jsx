import React from 'react';
import "./modal.scss";

export const Modal = ({message, showModal, setShowModal}) => {

    const styles = showModal ? 
        { transform: 'translate(-50%, -50%)', top: '50%' } : 
        { transform: 'translate(-50%, calc(-100% - 10px))', top: '0%' };

  return (
    <div style={styles} className='modal'>
        <p className="modal__message">{message}</p>
        <div onClick={() => setShowModal(false)} className="modal__close">&#10005;</div>
        <button onClick={() => setShowModal(false)} className="modal__btn">закрыть</button>
    </div>
  )
}
