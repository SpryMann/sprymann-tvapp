import './Row.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_CURRENT_MOVIE_ID } from '../../redux/dataReducer/movieReducer/consts';

const Row = () => {
  const rowPosters = useRef(null);
  const [showArrowRight, setShowArrowRight] = useState(false);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const movies = useSelector((state) => state.data.movie.movies);
  const dispatch = useDispatch();

  const scrollPosters = (direction) => {
    switch (direction) {
      case 'left':
        rowPosters.current.scrollLeft -= 500;
        break;
      case 'right':
        rowPosters.current.scrollLeft += 500;
        break;
      default:
        break;
    }
  };

  const handleShowArrows = useCallback(() => {
    if (rowPosters.current.scrollLeft === 0) {
      setShowArrowLeft(false);
      setShowArrowRight(true);
    } else if (
      rowPosters.current.scrollWidth ===
      rowPosters.current.offsetWidth + rowPosters.current.scrollLeft
    ) {
      setShowArrowLeft(true);
      setShowArrowRight(false);
    } else {
      setShowArrowLeft(true);
      setShowArrowRight(true);
    }
  }, []);

  useEffect(() => {
    handleShowArrows();
  }, [handleShowArrows]);

  if (!movies) return '';

  return (
    <div
      className={classNames('row', {
        'row--scrolled':
          rowPosters?.current?.scrollWidth > rowPosters?.current?.offsetWidth,
      })}
    >
      <svg
        className={classNames('row__arrow', 'row__arrow--left', {
          'row__arrow--disabled': !showArrowLeft,
        })}
        width="19"
        height="24"
        viewBox="0 0 19 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => scrollPosters('left')}
      >
        <path d="M18.8572 0V24L3.43323e-05 12L18.8572 0Z" fill="white" />
      </svg>

      <div
        className="row__posters"
        ref={rowPosters}
        onScroll={() => handleShowArrows()}
      >
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={process.env.REACT_APP_TMDB_IMAGE_BASEURL + movie.poster_path}
            alt={movie.title}
            onClick={() =>
              dispatch({ type: CHANGE_CURRENT_MOVIE_ID, payload: movie.id })
            }
          />
        ))}
      </div>

      <svg
        className={classNames('row__arrow', 'row__arrow--right', {
          'row__arrow--disabled': !showArrowRight,
        })}
        width="19"
        height="24"
        viewBox="0 0 19 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => scrollPosters('right')}
      >
        <path d="M0 0V24L18.8571 12L0 0Z" fill="white" />
      </svg>
    </div>
  );
};

export default Row;
