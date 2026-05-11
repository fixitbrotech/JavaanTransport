import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, MessageCircle, Send, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-inner">
            <div className="newsletter-text">
              <h3>Subscribe to our newsletter</h3>
              <p>Stay updated with latest logistics news, offers & route expansions.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" />
              <button type="submit">Get Started</button>
            </form>
          </div>
        </div>
      </section>

      <div style={{
        background: '#0C0C0C',
        borderTop: '1px solid rgba(255,107,0,0.1)',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          perspective: '1000px',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            inset: '-100% 0 0 0',
            backgroundImage: `
              linear-gradient(90deg, rgba(255,107,0,0.05) 1px, transparent 1px),
              linear-gradient(0deg, rgba(255,107,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'rotateX(60deg)',
            transformOrigin: 'top center',
            animation: 'road-scroll 10s linear infinite',
            maskImage: 'linear-gradient(to top, black, transparent)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="footer-cta-card"
            style={{ maxWidth: '600px' }}
          >
            <div className="section-tag" style={{ border: 'none', padding: 0 }}>National Network</div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '24px', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, lineHeight: 1.1 }}>
              Experience Superior <br/><span style={{ color: '#FF6B00' }}>Logistics</span>
            </h2>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/quote" className="btn-main" style={{ padding: '16px 32px' }}>
                Get Quote Now <ArrowUpRight size={18} />
              </Link>
              <Link to="/contact" className="btn-ghost" style={{ padding: '16px 32px' }}>
                Contact Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="footer" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="navbar-logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
                <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: '1.2rem', letterSpacing: '2.5px', textTransform: 'uppercase' as const }}>
                  Javaan <span style={{ color: '#FF6B00' }}>Transport</span>
                </span>
              </Link>
              <p style={{ lineHeight: 1.8, color: '#666', fontSize: '0.9rem' }}>Your reliable partner in nationwide cargo transport. We guarantee safety, speed, and 24/7 transparency.</p>
              <div className="footer-socials" style={{ marginTop: '24px' }}>
                <a href="#"><Globe size={18} /></a>
                <a href="#"><MessageCircle size={18} /></a>
                <a href="#"><Send size={18} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Organization</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/fleet">Our Fleet</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Core Services</h4>
              <ul>
                <li><Link to="/services">Interstate Freight</Link></li>
                <li><Link to="/services">Priority Parcel</Link></li>
                <li><Link to="/services">Smart Warehousing</Link></li>
                <li><Link to="/services">Port Logistics</Link></li>
                <li><Link to="/services">Custom Solutions</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul style={{ gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                   <MapPin size={18} style={{ color: '#FF6B00', flexShrink: 0, marginTop: '2px' }} />
                   <span style={{ color: '#888', fontSize: '0.85rem' }}>Sulur, Coimbatore 641402</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <Phone size={16} style={{ color: '#FF6B00', flexShrink: 0 }} />
                   <a href="tel:+917092213666" style={{ color: '#888', fontSize: '0.85rem' }}>+91 70922 13666</a>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <Mail size={16} style={{ color: '#FF6B00', flexShrink: 0 }} />
                   <a href="mailto:javaantransport@gmail.com" style={{ color: '#888', fontSize: '0.85rem' }}>javaantransport@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom-new">
            <div className="footer-credit-new">
              DESIGNED & BUILT BY 
              <a href="https://fixitbrotech.com" target="_blank" rel="noreferrer">
                FIXITBROTECH.COM
              </a>
            </div>

            <div className="footer-links-row">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>

            <div className="footer-copyright">
              © {new Date().getFullYear()} Javaan Transport. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
