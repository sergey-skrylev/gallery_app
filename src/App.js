import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery'
import AboutMe from './components/AboutMe'
import PhotoItem from './components/AboutMe'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Gallery />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path="photos/:id" element={<PhotoItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
