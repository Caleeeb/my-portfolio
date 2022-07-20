import './App.css';
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  function choosePage(page) {
    if (page === 'About') {
      return <About />;
    }
    if (page === 'Project') {
      return <Project />;
    }
    if (page === 'Contact') {
      return <Contact />;
    }
  }

  const handlePage = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Nav 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        handlePage={handlePage}></Nav>
      {choosePage(currentPage)}
    </div>
  );
}

export default App;
