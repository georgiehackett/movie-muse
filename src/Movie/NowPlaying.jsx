import React,{useEffect, useState} from "react";
const API_KEY="131c856f75867823ef322849c2612110";
const Image_url = "https://image.tmdb.org/t/p/w200/";
const NowPlaying_url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`;
//const Search_url= `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${process.env.API_KEY}&query=`
function NowPlaying() {
    const [movieList,setMovieList] = useState([])
    const getMovie = ()=>{

        fetch(`${NowPlaying_url}`)
       .then(res => res.json())
       .then(json => setMovieList(json.results))
    }
    useEffect(()=>{
        getMovie()
    },[])
     
    return(
        <div className='container-fluid movie-app'>
        <div>
            <h1>Now Playing Movies</h1>
            </div>
           
    <div className="row popular-card">
        {movieList.map((movie)=>(
            <div className="image-container justify-content-start m-3" key={movie.id}>
                <a href={`/moviedetail/${movie.id}`}>
              <img  src={Image_url + `${movie.poster_path}`} alt={movie.title} />
              </a>
               <h3 className="CardTitle">{movie.title}</h3>
            <h5>{movie.release_date}</h5>
        
            </div>
            )
        )}
    </div>
    
    </div>
    )
}
export default NowPlaying