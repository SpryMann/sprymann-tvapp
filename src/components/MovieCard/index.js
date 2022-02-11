import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMovie } from '../../http/requests';
import { UPDATE_CURRENT_MOVIE } from '../../redux/dataReducer/movieReducer/consts';
import checkIsMovieFavorite from '../../helpers/checkIsMovieFavorite';
import Star from '../Star';
import './MovieCard.css';
import addMovieToFavorite from '../../helpers/addMovieToFavorite';
import removeMovieFromFavorite from '../../helpers/removeMovieFromFavorite';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ updateFavorites, updateMovies }) => {
  const dispatch = useDispatch();
  const currentMovieId = useSelector(
    (state) => state.data.movie.currentMovieId
  );
  const currentMovie = useSelector((state) => state.data.movie.currentMovie);
  const favoriteMovies = useSelector((state) => state.user.favoriteMovies);
  const user = useSelector((state) => state.user.user);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  const handleClickFavoriteButton = () => {
    if (!user) {
      return navigate('/signin');
    }

    updateFavorites().then(() => {
      if (checkIsMovieFavorite(favoriteMovies, currentMovieId)) {
        removeMovieFromFavorite(currentMovieId, user.uid).then(() => {
          setIsFavorite(false);
          updateMovies();
          updateFavorites();
        });
      } else {
        addMovieToFavorite(currentMovie, user.uid).then(() => {
          setIsFavorite(true);
          updateFavorites();
        });
      }
    });
  };

  useEffect(() => {
    if (currentMovieId) {
      getCurrentMovie(currentMovieId).then((data) =>
        dispatch({ type: UPDATE_CURRENT_MOVIE, payload: data })
      );

      if (user) {
        setIsFavorite(checkIsMovieFavorite(favoriteMovies, currentMovieId));
      }
    }
  }, [currentMovieId, dispatch, user]);

  if (!currentMovie) return '';

  return (
    <div className="card">
      <img
        className="card__poster"
        src={
          process.env.REACT_APP_TMDB_IMAGE_BASEURL + currentMovie.poster_path
        }
        alt={currentMovie.title}
      />

      <div className="card__info">
        <h2 className="card__title">
          {currentMovie.title}
          <span className="card__year">
            {currentMovie?.release_date?.split('-')[0]}
          </span>
        </h2>
        <div className="card__rating">
          {[...Array(5)].map((star, index) => (
            <Star
              key={index}
              fill={
                Math.floor(currentMovie.vote_average / 2) > index ? true : false
              }
            />
          ))}
          <span className="rating__rate">{currentMovie.vote_average}/10</span>
        </div>

        <p className="card__description">{currentMovie.overview}</p>

        <div className="card__more-info">
          <div className="more-info__row">
            <h3 className="more-info__title">Genre</h3>
            <p className="more-info__value">
              {currentMovie?.genres?.map((genre) => genre.name).join(', ')}
            </p>
          </div>

          <div className="more-info__row">
            <h3 className="more-info__title">Runtime</h3>
            <p className="more-info__value">{currentMovie.runtime}m</p>
          </div>

          {currentMovie?.production_countries?.length ? (
            <div className="more-info__row">
              <h3 className="more-info__title">Country</h3>
              <p className="more-info__value">
                {currentMovie.production_countries[0].iso_3166_1}
              </p>
            </div>
          ) : (
            ''
          )}
        </div>

        <div className="card__buttons">
          <button className="buttons__play">
            <svg
              className="play__icon"
              viewBox="0 0 11 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0V14L11 7L0 0Z" fill="black" />
            </svg>
            Trailer
          </button>

          <button
            className="buttons__favorite"
            onClick={() => handleClickFavoriteButton()}
          >
            <div className="favorite__wrap">
              <svg
                className="favorite__icon"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4605 24.7L11.5087 22.9232C4.57657 16.6372 0 12.4913 0 7.40327C0 3.25744 3.25744 0 7.40327 0C9.7454 0 11.9933 1.0903 13.4605 2.81324C14.9277 1.0903 17.1756 0 19.5177 0C23.6635 0 26.921 3.25744 26.921 7.40327C26.921 12.4913 22.3444 16.6372 15.4123 22.9367L13.4605 24.7Z"
                  fill="white"
                />
              </svg>
            </div>
            {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
