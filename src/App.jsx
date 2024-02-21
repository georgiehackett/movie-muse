import React, { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.css';
import Hero from './Components/Hero/Hero';
import Footer from './footer/footer';
import PopularMovie from './Movie/PopularMovie';
import TopRated from './Movie/TopRated';
import NowPlaying from './Movie/NowPlaying';
import Navbar from './navbar/navbar';
import MovieDetails from './Movie/MovieDetails';
import Upcoming from './Movie/Upcoming';

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
