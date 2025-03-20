import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/privacy">Privacy</Link>
        </li>
        <li className="nav-item">
          <Link to="/data">Data</Link>
        </li>
        <li className="nav-item">
          <Link to="/methods">Methods</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
