import React from 'react';
import Moviecard from './Movie/MovieCard';
import './App.css';
import FavouritesIcon from './FavouritesIcon/FavouritesIcon';

function App() {
  console.log(FavouritesIcon);
  return (
    <>
      <Moviecard favouriteComponent={FavouritesIcon} />
    </>
  );
}

export default App;
