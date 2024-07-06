import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes, Link, useLocation } from 'react-router-dom';
import SimpleNavbar from './components/SimpleNavbar';
import Hero from './components/Hero';
import Image from './components/Image';
import Videos from './components/Videos';
import Document from './components/Document';
import Sec from './components/Sec';
import './App.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SimpleNavbar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

function Main() {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/sec" element={<Sec />} />
          <Route path="/gallery" element={<Image />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/documents" element={<Document />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
