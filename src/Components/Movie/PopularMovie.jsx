import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const Image_url = 'https://image.tmdb.org/t/p/w200/';

const API_KEY = '131c856f75867823ef322849c2612110';
const Popular_url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AddToFavourites from '../AddToFavourites/AddToFavourites';
import RemoveFromFavourites from '../RemoveFromFavourites/RemoveFromFavourites';

function PopularMovies({ favouriteMovies, setFavouriteMovies }) {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(`${Popular_url}`)
      .then(res => res.json())
      .then(json => {
        setMovieList(json.results);
      });
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="container-fluid roundede movie-app mt-2">
      <div>
        <h1 className="mt-5 ms-3 mb-4 p-2">Popular Movies</h1>
      </div>
      <MovieCard
        movieList={movieList}
        favouriteMovies={favouriteMovies}
        setFavouriteMovies={setFavouriteMovies}
      />
    </div>
  );
}
export default PopularMovies;
