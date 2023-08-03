import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Team from './components/Team';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import './css/background.css';

const App = () => {
  return (
    <Router>
      <div className="background-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
