import React from "react";
import { Link } from "react-router-dom";
import "../Website.css";

const Methods = () => {
  return (
    <section className="methods-section">
      <div className="methods-overlay">
        <h2>Methods & LLM</h2>
        <p>
          We leverage advanced language models and data analysis techniques to curate and interpret historical records. Our process is transparent, rigorous, and continuously evolving.
        </p>
        <Link to="/methods" className="button-primary">Explore Our Methods</Link>
      </div>
    </section>
  );
};

export default Methods;
