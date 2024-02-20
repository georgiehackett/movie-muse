import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Hero/Hero';
import Footer from './footer/footer';
import PopularMovie from './Movie/PopularMovie';
import TopRated from './Movie/TopRated';
import NowPlaying from './Movie/NowPlaying';
import Navbar from './navbar/navbar';
import MovieDetails from './Movie/MovieDetails';
import Upcoming from './Movie/Upcoming';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />

        <Routes>
          <Route path="/" element={<PopularMovie />} />
          <Route path="/popularmovies" element={<PopularMovie />} />
          <Route path="/moviedetail/:id" element={<MovieDetails />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
        </Routes>
        <TopRated />
        <Upcoming />
        <NowPlaying />
        <Footer />
      </Router>
    </>
  );
};

export default App;
