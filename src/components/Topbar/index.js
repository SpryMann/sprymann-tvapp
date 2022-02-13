import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { CHANGE_SHOW_SIDEBAR } from '../../redux/uiReducer/consts';
import './Topbar.css';
import Search from '../Search';

const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openSidebar = () => {
    dispatch({ type: CHANGE_SHOW_SIDEBAR, payload: true });
  };

  const goPrevPage = () => {
    navigate('/movies');
  };

  if (location.pathname.split('/')[1] === 'movies') {
    return (
      <div className="topbar">
        <svg
          className="topbar__burger"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => openSidebar()}
        >
          <path
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            fill="black"
          />
        </svg>

        <Search />
      </div>
    );
  } else {
    return (
      <div className="topbar">
        <svg
          className="topbar__burger"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => openSidebar()}
        >
          <path
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            fill="black"
          />
        </svg>

        <svg
          className="topbar__back"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => goPrevPage()}
        >
          <path
            d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
            fill="black"
          />
        </svg>
      </div>
    );
  }
};

export default Topbar;
