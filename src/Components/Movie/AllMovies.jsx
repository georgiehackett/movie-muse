import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
const Image_url = 'https://image.tmdb.org/t/p/w200/';

const API_KEY = '131c856f75867823ef322849c2612110';
const Discover_url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=revenue.desc&api_key=${API_KEY}`;


function AllMovies({ favouriteMovies, setFavouriteMovies }) {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(`${Discover_url}`)
      .then(res => res.json())
      .then(json => {console.log(json.results);
         setMovieList(json.results)});
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="container-fluid movie-app">
      <div>
        <h1>All Movies</h1>
      </div>
      <MovieCard movieList={movieList} favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />
    </div>
  );
}
export default AllMovies;
