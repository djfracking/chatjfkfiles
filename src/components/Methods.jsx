import React from "react";
import { Link } from "react-router-dom";
import "../Website.css";

const Methods = () => (
  <section className="methods-section">
    <div className="methods-overlay">
      <h2>Methods</h2>
      <p>
        We scanned over 68,000 records using Optical Character Recognition and built multiple indexes for intelligent search.
      </p>
      <Link to="/methods" className="button-primary">Explore Our Methods</Link>
    </div>
  </section>
);

export default Methods;
