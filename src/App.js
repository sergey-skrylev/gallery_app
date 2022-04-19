import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import AboutMe from './components/AboutMe';
import PhotoItem from './components/PhotoItem';
import Header from './components/Header';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Gallery />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path="/photos/:id" element={<PhotoItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
