import React,{useEffect, useState} from "react";
const API_KEY="131c856f75867823ef322849c2612110";
const Image_url = "https://image.tmdb.org/t/p/w200/";
const Popular_url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`;
//const Search_url= `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${process.env.API_KEY}&query=`
function MovieCards() {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{

        fetch(`${Popular_url}`)
       .then(res => res.json())
       .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
     
    return(
        <>
        <div>
            <h1>Popular Movies</h1>
            </div>
    <div className="CardDisplay">
        {movieList.map((movie)=>(
            <div className="movieCardContainer" key={movie.id}>
              <img  src={Image_url + `${movie.poster_path}`} alt={movie.title} />
               <h3 className="CardTitle">{movie.title}</h3>
            <h5>{movie.release_date}</h5>
        
            </div>
            )
        )}
    </div>
    </>
    )
}
export default MovieCards