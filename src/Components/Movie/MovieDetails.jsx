import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
//import noimage from '../assets/images/no-image.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'reactstrap';

const API_KEY = '131c856f75867823ef322849c2612110';

const MovieDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get('q');
  console.log(id);
  

  const [moviedet, setMoviedet] = useState([]);
  const [castdata, setCastdata] = useState([]);
  const [moviegenres, setMoviegenres] = useState([]);
  const [video, setVideo] = useState([]);

  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    const moviedetail = await data.json();
    setMoviedet(moviedetail);
    
    setMoviegenres(moviedetail.genres);

  
  };

  const fetchCast = async () => {
    const castdata = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language`,
    );
    const castdetail = await castdata.json();
    
    setCastdata(castdetail.cast);
  };

  const fetchVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
    );
    const videodata = await data.json();
    setVideo(videodata.results);
   
  };

  useEffect(() => {
    fetchMovie();
    fetchCast();
    fetchVideo();
  }, []);

  return (
    <>
      <Link
        to="/"
        className="fixed z-10 text-4xl text-black bg-white m-3  md:m-5 rounded-full"
      >
        <HiChevronLeft />
        Home
        <HiChevronRight />
      </Link>

      {/* poster, overview, release, genre card*/}

      <div className="card mb-3 mt-2 movie-overview">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                moviedet.backdrop_path
                  ? `https://image.tmdb.org/t/p/w400/${moviedet.backdrop_path}`
                  : ''
              }
              alt="movie poster"
              className="px-3"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{moviedet.title}</h5>
              <p className="card-text">{moviedet.overview}</p>
              <h5 className=" text-center text-primary ">
                Release Date : {moviedet.release_date}
              </h5>
              <h3>Genres</h3>
      <Container>
        <Row>
          {moviegenres.map(tag => (
            <Col key={tag.id} xs="3" className='p-2'>
              <div className="text-black d-flex badge bg-primary rounded-pill text-center">
                {tag.name}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
            </div>
          </div>
        </div>
      </div>

      {/* cast */}
      <div className="flex flex-col items-center">
        <h1 className=" text-primary font-semibold text-center p-2">Cast</h1>
        <div className="container-fluid movie-app">
          <div className="row">
            <div className="image-container d-flex justify-content-start m-3">
              {castdata.map(cast => (
                <div key={cast.id}>
                  {cast.profile_path !== null ? (
                    <>
                      <div className="flex items-center text-center flex-col mx-1">
                        <LazyLoadImage
                          effect="blur"
                          src={
                            'https://image.tmdb.org/t/p/w200' +
                            cast.profile_path
                          }
                          className="rounded"
                        />
                        <p className="text-black">{cast.name}</p>
                        <p className="text-primary">({cast.character})</p>
                      </div>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
