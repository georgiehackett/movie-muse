import React from 'react';
import Moviecard from './Movie/MovieCard';
import './App.css';
import FavouritesIcon from './FavouritesIcon/FavouritesIcon';

function App() {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  const addFavouriteMovie = movie => {
    setFavouriteMovies(prev => {
      return [movie, ...prev];
    });
  };

  return (
    <>
      <Moviecard favouriteComponent={FavouritesIcon} />
    </>
  );
}

export default App;
