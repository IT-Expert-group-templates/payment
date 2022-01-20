import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/components/Navbar/Navbar';
import Routes from './components/Routes';
import Footer from './components/components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
