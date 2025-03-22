import React from "react";
import "../Website.css"; 

const BookPromotion = () => {
  return (
    <div className="book-support">
      <div className="book-info">
        <h2>Buy My Book</h2>
        <p>
          Support my research and work by purchasing my latest book on the JFK assassination. Your support fuels further investigations.
        </p>
        <a href="/buy-book" className="book-link">
          Buy Now
        </a>
      </div>
      <div className="book-image">
        <img src="../assets/cover.jpg" alt="Book Cover" />
      </div>
    </div>
  );
};

export default BookPromotion;
