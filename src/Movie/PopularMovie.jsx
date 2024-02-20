import React, { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
const Image_url = "https://image.tmdb.org/t/p/w200/";

const API_KEY = '131c856f75867823ef322849c2612110';
const Popular_url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import AddToFavourites from '../AddToFavourites/AddToFavourites';

function PopularMovies(props) {

  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(`${Popular_url}`)
      .then(res => res.json())
      .then(json => setMovieList(json.results));
  };
  useEffect(() => {
    getMovie();
  }, []);

  /* const [favouriteMovies, setFavouriteMovies] = useState([]);

  const handleFavouriteMoviesClick = movie => {
    const newFavouriteMovies = [...favouriteMovies, movie]
    setFavouriteMovies(newFavouriteMovies)
  }; */

  //console.log(favouriteMovies);

  return (
    <div className="container-fluid movie-app">
      <div>
        <h1>Popular Movies</h1>
      </div>

      <MovieCard movieList={movieList}/>

    </div>
  );
}
export default PopularMovies;
