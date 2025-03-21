import React from "react";
import Hero from "../components/Hero";
import TrendingBoard from "../components/TrendingBoard";
import Chat from "../components/Chat";
import Methods from "../components/Methods";
import MLK from "../components/MLK";
import Sponsors from "../components/Sponsors";
import BookPromotion from "../components/BookPromotion";
import "../Website.css";

const Home = ({ handleSearch }) => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero-section">
        <Hero handleSearch={handleSearch} />
      </section>

      {/* Trending/Leaderboard Section */}
      <section id="trending-section" className="container">
        <h2>Trending Records</h2>
        <TrendingBoard />
      </section>

      {/* Chat Section */}
      <section id="chat-section" className="container">
        <h2>Try Chat with JFK Files</h2>
        <Chat />
      </section>

      {/* Methods Section */}
      <section id="methods-section" className="container">
        <Methods />
      </section>

      {/* MLK Section */}
      <section id="mlk-section" className="container">
        <MLK />
      </section>

      {/* Sponsors Section */}
      <section id="sponsors-section" className="container">
        <h2>Our Sponsors</h2>
        <Sponsors />
      </section>

      {/* Book Promotion Section */}
      <section id="book-section" className="container">
        <BookPromotion />
      </section>
    </div>
  );
};

export default Home;
