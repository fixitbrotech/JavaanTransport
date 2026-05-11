import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Tracking from './pages/Tracking';
import GetQuote from './pages/GetQuote';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import { Privacy, Terms, Accessibility } from './pages/PolicyPages';
import PageLoader from './components/PageLoader';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <PageLoader />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#060606' }}>
        <ScrollToTop />
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/quote" element={<GetQuote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
