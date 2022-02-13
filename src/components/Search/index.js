import './Search.css';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import useSearch from '../../hooks/useSearch';
import { searchMovies } from '../../http/requests';
import {
  CHANGE_CURRENT_MOVIE_ID,
  UPDATE_SERACH_RESULTS,
} from '../../redux/dataReducer/movieReducer/consts';
import addMovieToHistory from '../../helpers/addMovieToHistory';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const search = useRef(null);
  const searchResults = useSelector((state) => state.data.movie.searchResults);
  const [showResults, setShowResults] = useState(false);
  let timer = null;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useSearch(search, () => {
    setShowResults(false);
    search.current.classList.remove('search--searching');
  });

  const onStartSearch = () => {
    search.current.classList.add('search--searching');
    setShowResults(true);
  };

  const handleInput = (event) => {
    clearTimeout(timer);
    setSearchInput(event.target.value);
    timer = setTimeout(() => {
      if (searchInput.trim()) {
        searchMovies(searchInput).then((data) =>
          dispatch({ type: UPDATE_SERACH_RESULTS, payload: data })
        );
      }
    }, 2000);
  };

  const handleClickSearchResult = (movieId) => {
    dispatch({
      type: CHANGE_CURRENT_MOVIE_ID,
      payload: movieId,
    });

    if (user) {
      addMovieToHistory(movieId, user.uid);
    }

    setSearchInput('');
  };

  return (
    <div className="search" ref={search}>
      <button className="search__button">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7204 9.43396H10.0429L9.80274 9.2024C10.6432 8.2247 11.1492 6.9554 11.1492 5.57461C11.1492 2.49571 8.65352 0 5.57461 0C2.49571 0 0 2.49571 0 5.57461C0 8.65352 2.49571 11.1492 5.57461 11.1492C6.9554 11.1492 8.2247 10.6432 9.2024 9.80274L9.43396 10.0429V10.7204L13.7221 15L15 13.7221L10.7204 9.43396V9.43396ZM5.57461 9.43396C3.43911 9.43396 1.71527 7.71012 1.71527 5.57461C1.71527 3.43911 3.43911 1.71527 5.57461 1.71527C7.71012 1.71527 9.43396 3.43911 9.43396 5.57461C9.43396 7.71012 7.71012 9.43396 5.57461 9.43396Z"
            fill="white"
          />
        </svg>
      </button>

      <input
        className="search__input"
        type="text"
        value={searchInput}
        onChange={(e) => handleInput(e)}
        onFocus={() => onStartSearch()}
      />

      {searchResults.length ? (
        <ul
          className={classNames('search__results', {
            'search__results--active': showResults,
          })}
        >
          {searchResults.map(
            (searchResult, index) =>
              index < 5 && (
                <li key={searchResult.id} className="results__item">
                  <span
                    className="results__link"
                    onClick={() => handleClickSearchResult(searchResult.id)}
                  >
                    {searchResult.title}
                  </span>
                </li>
              )
          )}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Search;
