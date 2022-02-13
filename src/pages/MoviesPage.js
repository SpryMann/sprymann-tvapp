import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import Categories from '../components/Categories';
import MovieCard from '../components/MovieCard';
import Row from '../components/Row';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CHANGE_CURRENT_MOVIE_ID,
  UPDATE_MOVIES,
} from './../redux/dataReducer/movieReducer/consts';
import { UPDATE_FAVORITE_MOVIES } from './../redux/userReducer/consts';
import { useLocation } from 'react-router-dom';
import getMoviesByLocation from '../helpers/getMoviesByLocation';
import getFavoriteMovies from '../helpers/getFavoriteMovies';
import { UPDATE_IS_LOADING } from '../redux/uiReducer/consts';
import VideosModal from '../components/VideosModal';

const MoviesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((state) => state.user.user);
  const showMovieVideos = useSelector((state) => state.ui.showMovieVideos);

  const updateFavorites = useCallback(async () => {
    dispatch({ type: UPDATE_IS_LOADING, payload: true });
    const data = await getFavoriteMovies();
    dispatch({ type: UPDATE_FAVORITE_MOVIES, payload: data });
    dispatch({ type: UPDATE_IS_LOADING, payload: false });
  }, [dispatch]);

  const updateMovies = useCallback(async () => {
    dispatch({ type: UPDATE_IS_LOADING, payload: true });
    getMoviesByLocation(location.pathname).then((data) => {
      dispatch({ type: UPDATE_MOVIES, payload: data });
      dispatch({
        type: CHANGE_CURRENT_MOVIE_ID,
        payload: data[Math.floor(Math.random() * data.length)].id,
      });
      dispatch({ type: UPDATE_IS_LOADING, payload: false });
    });
  }, [dispatch, location]);

  useEffect(() => {
    updateMovies().then(() => {
      if (user) {
        updateFavorites();
      }
    });
  }, [updateMovies, location, updateFavorites, user]);

  return (
    <>
      <Sidebar />
      <div className="main">
        <Topbar />
        <Categories />
        <MovieCard
          updateFavorites={updateFavorites}
          updateMovies={updateMovies}
        />
        <Row />
      </div>
      {showMovieVideos && <VideosModal />}
    </>
  );
};

export default MoviesPage;
