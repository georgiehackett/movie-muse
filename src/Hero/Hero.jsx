import React,{useEffect, useState} from "react";
import './Hero.css';

const API_KEY="131c856f75867823ef322849c2612110";
const Image_url = "https://image.tmdb.org/t/p/w200/";
const JumbotronSearch = () => {
  const [query, setQuery] = useState(""); 
  const [results,setResult] = useState([]);

 
  const onChange = (e) =>{
    e.preventDefault();
    const Search_url= `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}&query=${e.target.value}`
    setQuery(e.target.value);

    fetch(`${Search_url}`)
       .then(res => res.json())
       .then(data =>{ 
        if(!data.errors) {
          setResult(data.results)
          //console.log(data.results);
        }
        });
  };

  return (
    <div className="jumbotron">
      <h1 className="display-4">Welcome to Movie Muse</h1>
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
        {/* <button className="btn btn-primary" type="button">
          Search
        </button> */}
      </div>
      {results.length >0 && (
        <div className="CardDisplay">
        {results.map((movie)=>(
            <div className="movieCardContainer" key={movie.id}>
              <img  src={Image_url + `${movie.poster_path}`} alt={movie.title} />
               <h3 className="CardTitle">{movie.title}</h3>
            <h5>{movie.release_date}</h5>
        
            </div>
            )
        )}
    </div>
      )
      }
    </div>
  );
};

export default JumbotronSearch;