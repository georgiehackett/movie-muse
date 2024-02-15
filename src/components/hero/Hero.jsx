import React from 'react';
import './App.css';

function App() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Search</h1>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button>Go</button>
        </div>
      </div>
    </div>
  );
}

export default App;
