/* import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <h1>Hi</h1>
      <Footer />
    </>
  );
}

export default App; */
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../src/components/footer/footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
