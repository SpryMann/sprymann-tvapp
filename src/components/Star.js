import React from 'react';
import classNames from 'classnames';

const Star = ({ fill = false }) => {
  return (
    <svg
      className={classNames('rating__icon', { 'rating__icon--fill': fill })}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.9999 19.851L21.0339 24.7L18.9019 15.561L25.9999 9.412L16.6529 8.619L12.9999 0L9.34694 8.619L-5.72205e-05 9.412L7.09794 15.561L4.96594 24.7L12.9999 19.851Z"
        fill="white"
      />
    </svg>
  );
};

export default Star;
