import './Categories.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const Categories = () => {
  const location = useLocation();

  return (
    <ul className="categories">
      <li
        className={classNames('category', {
          'category--active': location.pathname.split('/')[2] === 'new',
        })}
      >
        <svg
          className="category__icon"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.9999 19.851L21.0339 24.7L18.9019 15.561L25.9999 9.412L16.6529 8.619L12.9999 0L9.34694 8.619L-5.72205e-05 9.412L7.09794 15.561L4.96594 24.7L12.9999 19.851Z"
            fill="white"
          />
        </svg>
        <Link className="category__title" to={'new'}>
          New
        </Link>
      </li>
      <li
        className={classNames('category', {
          'category--active': location.pathname === '/movies',
        })}
      >
        <svg
          className="category__icon"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2_35)">
            <path
              d="M6.52772 9.44017V13.8066L2.88907 17.4452L7.25545 21.8116L10.8941 18.1729H15.2605L18.8991 14.5343L10.1664 5.80152L6.52772 9.44017ZM18.8991 4.34606L20.3546 5.80152L18.1714 7.98471L16.716 6.52925L18.8991 4.34606ZM10.6212 1.70803L12.68 1.70731L12.6785 4.79434L10.6197 4.79507L10.6212 1.70803ZM19.8998 12.02L22.9875 12.0222L22.9875 14.0802L19.8998 14.0795L19.8998 12.02Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_35">
              <rect width="24.7" height="24.7" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Link className="category__title" to={''}>
          Popular
        </Link>
      </li>
      <li
        className={classNames('category', {
          'category--active': location.pathname.split('/')[2] === 'toprated',
        })}
      >
        <svg
          className="category__icon"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.2625 24.7H15.4375V0H9.2625V24.7ZM0 24.7H6.175V12.35H0V24.7ZM18.525 7.71875V24.7H24.7V7.71875H18.525Z"
            fill="white"
          />
        </svg>
        <Link className="category__title" to={'toprated'}>
          Top rated
        </Link>
      </li>
      <li
        className={classNames('category', {
          'category--active': location.pathname.split('/')[2] === 'favorite',
        })}
      >
        <svg
          className="category__icon"
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4605 24.7L11.5087 22.9232C4.57657 16.6372 0 12.4913 0 7.40327C0 3.25744 3.25744 0 7.40327 0C9.7454 0 11.9933 1.0903 13.4605 2.81324C14.9277 1.0903 17.1756 0 19.5177 0C23.6635 0 26.921 3.25744 26.921 7.40327C26.921 12.4913 22.3444 16.6372 15.4123 22.9367L13.4605 24.7Z"
            fill="white"
          />
        </svg>
        <Link className="category__title" to={'favorite'}>
          Favorite
        </Link>
      </li>
      <li
        className={classNames('category', {
          'category--active': location.pathname.split('/')[2] === 'history',
        })}
      >
        <svg
          className="category__icon"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.7 12.3267C24.7126 19.1311 19.1635 24.6952 12.359 24.7C9.42013 24.7021 6.72065 23.6776 4.59929 21.9655C4.04767 21.5203 4.00644 20.6936 4.50771 20.1923L5.06879 19.6313C5.4975 19.2025 6.18193 19.1556 6.65691 19.5325C8.21984 20.7727 10.1978 21.5129 12.35 21.5129C17.4148 21.5129 21.5129 17.414 21.5129 12.35C21.5129 7.28527 17.414 3.1871 12.35 3.1871C9.91916 3.1871 7.71135 4.13173 6.07203 5.67364L8.5995 8.20111C9.10147 8.70308 8.74596 9.56131 8.03613 9.56131H0.796776C0.356707 9.56131 0 9.2046 0 8.76453V1.52518C0 0.815351 0.858227 0.459839 1.3602 0.961758L3.81885 3.42041C6.03602 1.30153 9.04101 0 12.35 0C19.163 0 24.6874 5.51668 24.7 12.3267ZM15.6909 16.25L16.1801 15.621C16.5853 15.1 16.4915 14.3491 15.9704 13.9439L13.9436 12.3674V7.17098C13.9436 6.5109 13.4085 5.97582 12.7484 5.97582H11.9516C11.2916 5.97582 10.7565 6.5109 10.7565 7.17098V13.9262L14.0137 16.4596C14.5348 16.8649 15.2856 16.771 15.6909 16.25V16.25Z"
            fill="white"
          />
        </svg>
        <Link className="category__title" to={'history'}>
          History
        </Link>
      </li>
    </ul>
  );
};

export default Categories;
