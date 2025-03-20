import React from "react";

const Footer = () => (
  <footer className="footer">
    <p className="footer-text">
      &copy; {new Date().getFullYear()} ChatJFKFiles. All rights reserved.
    </p>
    <p className="footer-powered">
      Powered by liquid gold from DJ Fracking. Learn more at{" "}
      <a href="https://djfracking.org" target="_blank" rel="noopener noreferrer" className="footer-link">
        djfracking.org
      </a>
    </p>
  </footer>
);

export default Footer;
