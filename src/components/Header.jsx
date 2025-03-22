import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const getTitle = () => {
    const host = window.location.hostname;
    if (host.includes("chatjfkfiles.com")) {
      return "Chat JFK Files";
    } else if (host.includes("jfkfilesarchives.com")) {
      return "JFK Assassination Files Archives";
    }
    return "JFK Assassination Files Archives"; // Fallback title
  };

  return (
    <header className="header">
      <div className="nav-container">
        {/* Left Section - Site Title */}
        <div className="nav-left">
          <Link to="/" className="site-title">{getTitle()}</Link>
        </div>

        {/* Right Section - Navigation & GitHub */}
        <div className="nav-right">
          <Link to="/" className="nav-link">Search</Link>
          {/* <Link to="/archive" className="nav-link">Archives</Link> */}
          <Link to="/methods" className="nav-link">Methods</Link>
          <a 
            href="https://github.com/djfracking/chatjfkfiles" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link github-icon"
          >
            <FaGithub size={26} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
