import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_SHOW_MOVIE_VIDEOS } from '../../redux/uiReducer/consts';
import ReactPlayer from 'react-player';
import './VideosModal.css';

const VideosModal = () => {
  const dispatch = useDispatch();
  const movieVideos = useSelector((state) => state.data.movie.movieVideos);
  const [videoIndex, setVideoIndex] = useState(0);

  const changePrevVideo = () => {
    if (videoIndex === 0) {
      setVideoIndex(movieVideos.length - 1);
    } else {
      setVideoIndex(videoIndex - 1);
    }
  };

  const changeNextVideo = () => {
    if (videoIndex === movieVideos.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex(videoIndex + 1);
    }
  };

  return (
    <div className="videos">
      <div className="videos__content">
        <div className="videos__head">
          <button className="videos__button" onClick={() => changePrevVideo()}>
            <svg
              className="videos__icon"
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.8572 0V24L3.43323e-05 12L18.8572 0Z" fill="white" />
            </svg>
          </button>
          <button className="videos__button" onClick={() => changeNextVideo()}>
            <svg
              className="videos__icon"
              width="19"
              height="24"
              viewBox="0 0 19 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0V24L18.8571 12L0 0Z" fill="white" />
            </svg>
          </button>
          <button
            className="videos__button videos__button--close"
            onClick={() =>
              dispatch({ type: CHANGE_SHOW_MOVIE_VIDEOS, payload: false })
            }
          >
            <svg
              className="videos__icon"
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

        <ReactPlayer
          className="videos__video"
          url={`https://www.youtube.com/watch?v=${movieVideos[videoIndex].key}`}
          controls={true}
        />
      </div>
    </div>
  );
};

export default VideosModal;
