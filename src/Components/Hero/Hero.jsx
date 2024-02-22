import React, { useEffect, useState } from 'react';
import './Hero.css';
import MovieCard from '../Movie/MovieCard';
import Logo from '../assets/images/logo-recolour.png';

const API_KEY = '131c856f75867823ef322849c2612110';

const JumbotronSearch = ({ favouriteMovies, setFavouriteMovies }) => {
  const [query, setQuery] = useState('');
  const [results, setResult] = useState([]);
  //const [movieList,setMovieList] = useState([])

  const onChange = e => {
    e.preventDefault();
    const Search_url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}&query=${e.target.value}`;
    setQuery(e.target.value);

    fetch(`${Search_url}`)
      .then(res => res.json())
      .then(data => {
        if (!data.errors) {
          setResult(data.results);
          //console.log(data.results);
        }
      });
  };

  const handleSearchScroll = () => results.current.scrollIntoView();

  /*  const getMovie = ()=>{

    fetch(`${Search_url}`)
   .then(res => res.json())
   .then(json => setMovieList(json.results))
}
useEffect(()=>{
    getMovie()
},[]) */
  return (
    <>
      <div className="jumbotron">
        <img src={Logo} alt="logo" id="logo" />
        <p className="lead">Find your favourite movies here!</p>
        <hr className="my-4" />
        <div className="input-group mb-10 d-flex justify-content-center">
          <input
            type="text"
            className="form-control rounded"
            placeholder="Search for movies..."
            value={query}
            onChange={onChange}
          />
          <button
            className="ms-3 btn btn-light rounded"
            type="button"
            onClick={handleSearchScroll}
          >
            Search
          </button>
        </div>
      </div>
      <div id="results" ref={results}>
        {results.length > 0 && <MovieCard movieList={results} favouriteMovies={favouriteMovies} setFavouriteMovies={setFavouriteMovies} />}
      </div>
    </>
  );
};

export default JumbotronSearch;
