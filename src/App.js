import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Website.css';

// Import page components
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Data from "./pages/Data";
import Methods from "./pages/Methods";

// Import Header and Footer
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/data" element={<Data />} />
            <Route path="/methods" element={<Methods />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
