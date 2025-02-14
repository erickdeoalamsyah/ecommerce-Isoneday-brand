import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Details from "./pages/Details";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Scroll ke atas langsung di dalam App */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    
    </Router>
  );
};

// Fungsi untuk mengatur scroll ke atas
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Setiap kali URL berubah, scroll ke atas

  return null;
};

export default App;
