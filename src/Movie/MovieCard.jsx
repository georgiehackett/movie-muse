import React,{useEffect, useState} from "react";

function MovieCards() {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{

        fetch("https://api.themoviedb.org/3/discover/movie?api_key=131c856f75867823ef322849c2612110")
       .then(res => res.json())
       .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
     console.log(movieList);
    return(
        <>
    <div>
        {movieList.map((movie)=>(
            <img style= {{width:"300px",height:"250px",margin:"10px"}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            
            )
        )}
    </div>
    </>
    )
}
export default MovieCards