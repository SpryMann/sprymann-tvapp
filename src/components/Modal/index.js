import './Modal.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_MESSAGE,
  CHANGE_SHOW_MESSAGE,
} from '../../redux/uiReducer/consts';

const Modal = () => {
  const message = useSelector((state) => state.ui.message);
  const dispatch = useDispatch();
  const [editedMessage, setEditedMessage] = useState('');

  useEffect(() => {
    if (message.includes('/')) {
      setEditedMessage(message.split('/')[1].split('-').join(' '));
    } else {
      setEditedMessage(message);
    }
  }, [message]);

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__head">
          <button
            className="modal__close"
            onClick={() => {
              dispatch({ type: CHANGE_SHOW_MESSAGE, payload: false });
              dispatch({ type: CHANGE_MESSAGE, payload: '' });
            }}
          >
            <svg
              className="modal__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <p className="modal__text">{editedMessage}</p>
      </div>
    </div>
  );
};

export default Modal;
