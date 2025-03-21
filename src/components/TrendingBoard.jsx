import React from "react";
import "../Website.css"; 

const TrendingBoard = () => {
  // Dummy trending data for demonstration
  const trendingItems = [
    "Top Secret JFK Files",
    "Declassified Document 1950",
    "CIA Files Leak 1963",
    "Unsolved Mysteries of JFK",
    "Archive: JFK Investigations",
  ];

  return (
    <div className="trending-board">
      <ul>
        {trendingItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingBoard;
