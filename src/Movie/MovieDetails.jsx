import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { HiChevronLeft } from "react-icons/hi";
import noimage from '../assets/images/no-image.jpg';
import { FaPlay } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import slugify from 'react-slugify';
import { Container, Row, Col } from "reactstrap";

const API_KEY="131c856f75867823ef322849c2612110";

const MovieDetails = () => {
    const {id} =useParams();
    //const url = `https://api.themoviedb.org/3/find/${id}?external_source=`
  
    const [moviedet, setMoviedet] = useState([]);
  const [castdata, setCastdata] = useState([]);
  const [moviegenres, setMoviegenres] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const moviedetail = await data.json();
    setMoviedet(moviedetail);
    //console.log(moviedetail);
    setMoviegenres(moviedetail.genres);
    
  };

  const fetchCast = async () => {
    const castdata = await fetch(
        
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language`
    );
    const castdetail = await castdata.json();
    //console.log(castdetail);
    setCastdata(castdetail.cast);
   
  }

  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    const videodata = await data.json();
    setVideo(videodata.results);
    //console.log(videodata.results);
  }

  useEffect(() => {
    fetchMovie();
    fetchCast();
    fetchVideo();
  }, []);

  
  return (

    <>
            {/* poster */}
            {/* <h1 className='text-black text-center'>{moviedet.title}</h1> */}
            <div className='relative h-auto md:h-[82vh] flex justify-center'>
             {/*  <div className='h-full w-full shadowbackdrop absolute'></div> */}
              <h1 className='text-black text-center'>{moviedet.title}</h1>
              {moviedet.backdrop_path === null ? <img src={noimage} className='img-fluid rounded' /> : <img src={"https://image.tmdb.org/t/p/original/" + moviedet.backdrop_path} className='img-fluid rounded' />}
            </div>
   
            {/* overview */}
            <h2 className='text-black text-center pt-5 px-3 md:px-60 font-Roboto text-[18px]'>{moviedet.overview}</h2>

            <div className='text-primary font-semibold my-3 flex justify-center'>
              <h2 className='bg-blue-600/30 border-2 border-blue-700 py-2 px-3 rounded-full'>Release Date : {moviedet.release_date}</h2>
            </div>

            {/* tag */}
            <h3>Genres</h3>
            <Container>
                <Row>
                    
              {moviegenres.map((tag) => (
                <Col key={tag.id} xs="3">
                <div  className='text-black d-flex badge bg-primary rounded-pill text-center '>{tag.name}</div>
                </Col>
              ))}
              </Row>
            </Container>

            {/* cast */}
            <div className='flex flex-col items-center'>
              <h1 className=" text-primary font-semibold text-center p-2">Cast</h1>
              <div className="container-fluid movie-app">
              <div className="row">
              <div className='image-container d-flex justify-content-start m-3' >
                {castdata.map((cast) => (
                  <div key={cast.id}>
                    {cast.profile_path !== null ? <>
                      <div className='flex items-center text-center flex-col mx-1'>
                        <LazyLoadImage effect='blur' src={"https://image.tmdb.org/t/p/w200" + cast.profile_path} className="rounded" />
                        <p className='text-black'>{cast.name}</p>
                        <p className='text-primary'>({cast.character})</p>
                      </div>
                    </> : null}
                  </div>
                ))}
              </div>
              </div>
              </div>
            </div>

            {/* trailer 
            <div className='flex justify-center items-center mb-10 gap-5 flex-wrap'>
              {Array.from(video).filter(trail => trail.type === "Trailer").map((trail, index) => (
                <>
                    <>
                      <a key={trail.id} href={'https://www.youtube.com/watch?v=' + trail.key} target="_blank" className='flex border-2 border-red-600 bg-red-600/40 p-3 items-center justify-center gap-2 text-xl font-semibold rounded-full text-black'>
                        <FaPlay />Watch trailer {Array.from(video).filter(trail => trail.type === "Trailer").length>1?index+1:""}
                      </a>
                    </>
                </>
              ))
              }
            </div>*/}

            {/* watch movie 
            <div className='flex justify-center items-center mb-10 gap-5 flex-wrap'>
              <Link  to={`/player/${id}/${slugify(moviedet.title)}`} className='flex border-2 border-green-600 bg-green-600/40 p-3 items-center justify-center gap-2 text-xl font-semibold rounded-full text-black'>
                <FaPlay />Watch Movie
              </Link>
            </div>*/}
          
          </>
     
    
  )
}

export default MovieDetails
