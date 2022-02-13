import { useSelector } from 'react-redux';
import './App.css';
import AppRouter from './components/AppRouter';
import Loader from './components/Loader';
import Modal from './components/Modal';

function App() {
  const currentMovie = useSelector((state) => state.data.movie.currentMovie);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const showMessage = useSelector((state) => state.ui.showMessage);

  return (
    <div
      className="background"
      style={{
        background: `linear-gradient(rgba(23, 4, 30, 0.8), rgba(23, 4, 30, 0.8)), url('${
          process.env.REACT_APP_TMDB_IMAGE_BASEURL +
            currentMovie.backdrop_path ||
          process.env.REACT_APP_TMDB_IMAGE_BASEURL + currentMovie.poster_path
        }')`,
      }}
    >
      <div className="container">
        <AppRouter />
      </div>
      {isLoading && <Loader />}
      {showMessage && <Modal />}
    </div>
  );
}

export default App;
