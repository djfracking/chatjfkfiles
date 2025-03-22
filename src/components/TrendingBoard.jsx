import React, { useEffect, useState } from "react";
import { ref, onValue, query, orderByChild, limitToLast } from "firebase/database";
import { database } from "../firebase"; // adjust path if needed
import "../Website.css";

const TrendingBoard = () => {
  const [trendingDocs, setTrendingDocs] = useState([]);

  useEffect(() => {
    const docsRef = query(
      ref(database, "trumpDocs"),
      orderByChild("upvotes"),
      limitToLast(10) // get top 10 docs
    );

    const unsubscribe = onValue(docsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const docsArray = Object.entries(data)
          .map(([id, value]) => ({ id, ...value }))
          .sort((a, b) => b.upvotes - a.upvotes); // highest to lowest
        setTrendingDocs(docsArray);
      } else {
        setTrendingDocs([]);
      }
    });

    return () => unsubscribe(); // cleanup listener
  }, []);

  return (
    <div className="trending-board">
      <ul>
        {trendingDocs.map((doc, index) => (
          <li key={doc.id}>
            <strong>{index + 1}.</strong> {doc.title || "Untitled Document"}
            <span style={{ float: "right", color: "#aaa" }}>{doc.upvotes} ⬆</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingBoard;
