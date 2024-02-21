import React, { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

import './App.css';

import TopRated from './Components/Movie/TopRated';
import PopularMovie from './Components/Movie/PopularMovie';
import MovieDetails from './Components/Movie/MovieDetails';
// import MovieCard from './Components/Movie/MovieCard';
import Upcoming from './Components/Movie/Upcoming';
import NowPlaying from './Components/Movie/NowPlaying'

import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';


const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Hero />

      <Routes>
        <Route path="/" element={<PopularMovie />} />
        <Route path="/popularmovies" element={<PopularMovie />} />
        <Route path="/moviedetail/" element={<MovieDetails />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/nowplaying" element={<NowPlaying />} />
      </Routes>
      {location.pathname === '/TopRated' ? '' : <TopRated />}
      {location.pathname === '/Upcoming' ? '' : <Upcoming />}
      {location.pathname === '/NowPlaying' ? '' : <NowPlaying />}
      <Footer />
    </>
  );
};

export default App;
