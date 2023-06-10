import React, { useState } from 'react';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { GrDocumentPdf } from 'react-icons/gr';
import AboutPage from './AboutPage';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleSearchBarClick = () => {
    setIsSearchBarFocused(true);
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  const handlePageChange = () => {
    setCurrentPage((prevPage) => (prevPage === 'home' ? 'about' : 'home'));
  };

  const renderPage = () => {
    if (currentPage === 'home') {
      return (
        <>
          {/* Your existing home page content */}
        </>
      );
    } else if (currentPage === 'about') {
      return <AboutPage />;
    }

    // Add additional page components here for other pages

    return null;
  };

  return (
    <div className="app">
      <header className="header">
        <img
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
        />
      </header>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className={`search-bar ${isSearchBarFocused ? 'focused' : ''}`}>
          <FaSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            onClick={handleSearchBarClick}
            placeholder="Tell me about Jonathan Pan"
          />
          <FaMicrophone className="mic-icon" />
        </div>
      </form>
      
      <footer className="footer">
        <a href="#" onClick={handlePageChange}>
          <VscAccount />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-pan/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/jonathanpan777" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="/JonathanPan2023Resume.pdf" target="_blank" rel="noopener noreferrer">
          <GrDocumentPdf />
        </a>
      </footer>

      {renderPage()}
    </div>
  );
}

export default App;
