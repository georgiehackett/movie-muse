import React from 'react';
import MovieCard from '../Components/Movie/MovieCard';

function FavouritesPage({ favouriteMovies, setFavouriteMovies }) {
//   console.log(favouriteMovies);


  return (
    <div className="container-fluid movie-app">
      <div>
        <h1>Favourites</h1>
      </div>
      <MovieCard movieList={favouriteMovies} favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />
    </div>
  );
}

export default FavouritesPage;
