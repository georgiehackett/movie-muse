import React, { useEffect, useState } from 'react';
import './Hero.css';
import MovieCard from '../Movie/MovieCard';



const API_KEY="131c856f75867823ef322849c2612110";

const JumbotronSearch = () => {
  const [query, setQuery] = useState(""); 
  const [results,setResult] = useState([]);
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
 /*  const getMovie = ()=>{

    fetch(`${Search_url}`)
   .then(res => res.json())
   .then(json => setMovieList(json.results))
}
useEffect(()=>{
    getMovie()
},[]) */
  return (
    <div className="jumbotron">
      {/* <h1 className="display-4">Welcome to Movie Muse</h1> */}
      <img src="src/images/logo.png" alt="logo" />
      <p className="lead">Find your favourite movies here!</p>
      <hr className="my-4" />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for movies..."
          value={query}
          onChange={onChange}
        />
      </div>
      {results.length >0 && (
      <MovieCard movieList={results}/>
      )
      }
    </div>
  );
};

export default JumbotronSearch;
