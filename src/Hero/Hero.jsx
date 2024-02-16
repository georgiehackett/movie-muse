//test

import React from 'react';
import './Hero.css';

const JumbotronSearch = () => {
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
        />
        <button className="btn btn-primary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default JumbotronSearch;
