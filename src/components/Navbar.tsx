import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Fleet', path: '/fleet' },
    { title: 'Tracking', path: '/tracking' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="navbar-inner" style={scrolled ? { background: 'rgba(6,6,6,0.95)', borderColor: 'rgba(255,107,0,0.08)' } : {}}>
          <Link to="/" className="navbar-logo">
            <Truck size={22} />
            <span>Javaan <span className="highlight">Transport</span></span>
          </Link>

          <div className="navbar-links">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Link to="/quote" className="navbar-cta">
            Get Quote <ArrowRight size={14} />
          </Link>

          <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="mobile-close" onClick={() => setMobileOpen(false)}>
              <X size={28} />
            </button>
            {links.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 }}
            >
              <Link to="/quote" className="btn-main" onClick={() => setMobileOpen(false)} style={{ marginTop: '16px' }}>
                Get Quote <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
