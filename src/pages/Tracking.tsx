import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, CheckCircle, Clock, Truck, ShieldCheck, Package } from 'lucide-react';
import AnimatedSection, { fadeUp, slideUp } from '../components/AnimatedSection';

const Tracking: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    setIsSearching(true);
    setShowResult(false);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 2000);
  };

  const steps = [
    { title: 'Order Placed', status: 'completed', date: 'Apr 5, 2026 — 09:00 AM', icon: <Package size={16} /> },
    { title: 'Picked Up', status: 'completed', date: 'Apr 5, 2026 — 02:30 PM', icon: <Truck size={16} /> },
    { title: 'In Transit', status: 'active', date: 'In Progress...', icon: <MapPin size={16} /> },
    { title: 'Delivered', status: 'pending', date: 'Expected Apr 8', icon: <CheckCircle size={16} /> }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp}>
            <div className="section-tag">Real-Time Updates</div>
            <h1>Track <span>Shipment</span></h1>
            <p>Enter your tracking ID or registered mobile number to get live status of your cargo.</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Search Box */}
      <section className="section">
        <div className="container">
          <AnimatedSection variants={slideUp}>
            <div className="tracking-box">
              <form onSubmit={handleSearch}>
                <div className="tracking-input-wrap">
                  <input
                    type="text"
                    placeholder="Enter Tracking ID or Mobile Number"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                  />
                  <button type="submit">
                    <Search size={20} />
                  </button>
                </div>
              </form>

              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  <ShieldCheck size={14} style={{ color: '#FF6B00' }} /> SSL Secured
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                  <Clock size={14} style={{ color: '#FF6B00' }} /> Real-Time Updates
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Loading */}
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 0' }}
          >
            <div className="spinner" />
            <p style={{ color: '#FF6B00', fontSize: '0.8rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, marginTop: '24px' }}>
              Scanning Databases...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {showResult && (
          <motion.section
            className="section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container" style={{ maxWidth: 700 }}>
              {/* Result Header */}
              <div style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 16,
                padding: '32px',
                marginBottom: '32px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16 }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontFamily: "'Josefin Sans', sans-serif", marginBottom: 8 }}>
                      Tracking ID: <span style={{ color: '#FF6B00' }}>{trackingId}</span>
                    </h3>
                    <p style={{ color: '#666', fontSize: '0.85rem' }}>
                      Mumbai, MH → Bangalore, KA
                    </p>
                  </div>
                  <span style={{
                    background: 'rgba(255,107,0,0.1)',
                    color: '#FF6B00',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '6px 16px',
                    borderRadius: 50,
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    In Transit
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div style={{
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 16,
                padding: '40px 40px 40px 56px'
              }}>
                <div className="tracking-timeline">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      className="timeline-step"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.15 }}
                    >
                      <div className={`timeline-dot ${step.status}`}>
                        {step.icon}
                      </div>
                      <div style={{ opacity: step.status === 'pending' ? 0.35 : 1 }}>
                        <h4 style={{ color: step.status === 'active' ? '#FF6B00' : '#fff' }}>
                          {step.title}
                        </h4>
                        <span className="time">{step.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Clear */}
              <div style={{ textAlign: 'center', marginTop: 32 }}>
                <button
                  onClick={() => { setShowResult(false); setTrackingId(''); }}
                  style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  Clear Search
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Info Cards */}
      {!showResult && !isSearching && (
        <section className="section">
          <div className="container">
            <div className="grid-3">
              {[
                { icon: <Truck size={24} />, title: 'Live GPS Tracking', desc: 'Monitor your shipment location on a live map in real-time.' },
                { icon: <ShieldCheck size={24} />, title: 'Secure & Encrypted', desc: 'All tracking data is encrypted with industry-standard SSL.' },
                { icon: <Clock size={24} />, title: 'Instant Notifications', desc: 'Get SMS and email alerts at every milestone of your shipment.' }
              ].map((card, i) => (
                <AnimatedSection key={i} variants={fadeUp} delay={i * 0.12}>
                  <div className="contact-card">
                    <div className="contact-icon">{card.icon}</div>
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Tracking;
