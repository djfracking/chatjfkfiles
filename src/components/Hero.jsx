import React, { useState } from "react";
import "./Hero.css";

const Hero = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchQuery);
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Uncover the Truth</h1>
          <p>Explore declassified JFK assassination files</p>
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="text"
              placeholder="Search the archives..."
              value={searchQuery}
              onChange={handleInputChange}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </div>
      <div className="jfk-image"></div>
    </section>
  );
};

export default Hero;
