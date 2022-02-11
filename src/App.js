import { useSelector } from 'react-redux';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  const currentMovie = useSelector((state) => state.data.movie.currentMovie);

  return (
    <div
      className="background"
      style={{
        background: `linear-gradient(rgba(23, 4, 30, 0.8), rgba(23, 4, 30, 0.8)), url('${
          process.env.REACT_APP_TMDB_IMAGE_BASEURL + currentMovie.backdrop_path
        }')`,
      }}
    >
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
