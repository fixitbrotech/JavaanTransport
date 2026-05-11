import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Shield, Clock, Globe, Users, Star, MapPin, Truck, Package } from 'lucide-react';
import AnimatedSection, { fadeUp, fadeLeft, fadeRight, scaleIn, bounceIn, staggerContainer } from '../components/AnimatedSection';

const Home: React.FC = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: false, amount: 0.3 });

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920" alt="Transport Fleet" />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)'
          }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Truck size={14} /> Trusted Since 2010
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Experience Superior
              <span>Logistics Solutions</span>
            </motion.h1>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Javaan Transport delivers world-class logistics and shipping services. 
              From local deliveries to complex supply chains across 100+ cities.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link to="/quote" className="btn-main">
                Get Instant Quote <ArrowRight size={16} />
              </Link>
              <Link to="/tracking" className="btn-ghost">
                Track Shipment <MapPin size={16} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Stat Card */}
        <motion.div 
          initial={{ x: '-20%', opacity: 0 }}
          animate={{ x: '100vw', opacity: [0, 0.2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            bottom: '15%',
            left: 0,
            color: 'rgba(255,107,0,0.1)',
            zIndex: 1,
            pointerEvents: 'none'
          }}
        >
          <Truck size={200} strokeWidth={0.5} />
        </motion.div>
      </section>

      {/* ===== SCROLLING CLIENTS TICKER ===== */}
      <div style={{ 
        background: '#0C0C0C', 
        padding: '24px 0', 
        borderTop: '1px solid rgba(255,255,255,0.03)',
        borderBottom: '1px solid rgba(255,255,255,0.03)',
        overflow: 'hidden'
      }}>
        <div style={{ 
          display: 'flex', 
          gap: '64px', 
          animation: 'ticker 20s linear infinite',
          whiteSpace: 'nowrap' as const
        }}>
          {[...Array(2)].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              {['TechLogix Corp', 'FreshFoods Ltd', 'BuildPro Industries', 'MediCare Pharma', 'AutoParts Global', 'GreenGrow Agri', 'SteelMax Co', 'PackRight Solutions'].map((name, i) => (
                <span key={`${setIdx}-${i}`} style={{ 
                  color: '#333', 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  letterSpacing: '3px', 
                  textTransform: 'uppercase' as const,
                  flexShrink: 0
                }}>
                  {name}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ===== CORE SERVICES ===== */}
      <section className="section" style={{ background: '#060606', position: 'relative', overflow: 'hidden' }}>
        {/* Background Decorative Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,107,0,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px', pointerEvents: 'none'
        }} />
        
        <div className="container">
          <AnimatedSection variants={fadeUp} className="section-header">
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">What We <span>Offer</span></h2>
            <p className="section-desc">High-performance logistics tailored to your business needs.</p>
          </AnimatedSection>

          <div className="grid-3">
            {[
              { icon: <Shield size={24} />, title: "Secure Transport", desc: "Safe, insured handling of your most valuable cargo with real-time monitoring.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" },
              { icon: <Clock size={24} />, title: "Express Delivery", desc: "Time-critical shipments delivered with priority handling and precision timing.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" },
              { icon: <Globe size={24} />, title: "Nationwide Reach", desc: "Extensive network covering 100+ cities for seamless interstate logistics.", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600" }
            ].map((service, i) => (
              <AnimatedSection key={i} variants={fadeUp} delay={i * 0.15}>
                <div className="service-card">
                  <div className="service-card-img">
                    <img src={service.img} alt={service.title} />
                    <div className="overlay" />
                  </div>
                  <div className="service-card-body">
                    <div className="service-card-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link to="/services" className="service-card-link">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ background: '#0C0C0C', padding: '0' }}>
        <div className="container">
          <motion.div
            ref={statsRef}
            className="stats-bar"
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            {[
              { number: '15K+', label: 'Happy Clients' },
              { number: '500+', label: 'Fleet Vehicles' },
              { number: '100+', label: 'Cities Covered' },
              { number: '99.8%', label: 'On-Time Rate' }
            ].map((stat, i) => (
              <motion.div key={i} className="stat-item" variants={bounceIn}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== DIGITAL INTELLIGENCE SECTION - FILLING THE GAP ===== */}
      <section className="section" style={{ background: '#080808', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-10%', left: '-10%',
          width: '50%', height: '120%', 
          background: 'radial-gradient(circle, rgba(255,107,0,0.03) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <AnimatedSection variants={fadeLeft}>
              <div style={{ position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&q=80&w=800" 
                  alt="Digital Tracking" 
                  style={{ borderRadius: 24, width: '100%', height: 400, objectFit: 'cover', border: '1px solid rgba(255,107,0,0.1)' }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, #080808 0%, transparent 50%)'
                }} />
              </div>
            </AnimatedSection>
            
            <AnimatedSection variants={fadeRight}>
              <div className="section-tag" style={{ justifyContent: 'flex-start' }}>Digital Backbone</div>
              <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.5rem' }}>Intelligent <span>Fleet Management</span></h2>
              <p style={{ color: '#888', marginBottom: '28px', lineHeight: 1.8 }}>
                Our proprietary tracking ecosystem provides millisecond-accurate updates. 
                Optimized routing and predictive maintenance ensure your cargo is always moving.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { label: "Track Uptime", val: "99.9%" },
                  { label: "Safe Delivery", val: "100%" }
                ].map((item, i) => (
                  <div key={i} style={{ background: '#111', padding: '24px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.03)' }}>
                    <div style={{ color: '#FF6B00', fontSize: '1.5rem', fontWeight: 700, fontFamily: "'Josefin Sans', sans-serif" }}>{item.val}</div>
                    <div style={{ color: '#555', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: 4 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section" style={{ background: '#060606', position: 'relative', borderTop: '1px solid rgba(255,107,0,0.05)' }}>
        {/* Animated Tracking Pin Decorative */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            position: 'absolute', top: '10%', right: '5%',
            color: 'rgba(255,107,0,0.1)', pointerEvents: 'none'
          }}
        >
          <MapPin size={200} strokeWidth={0.5} />
        </motion.div>

        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '64px' }}>
            <AnimatedSection variants={fadeLeft}>
              <div className="section-tag" style={{ justifyContent: 'flex-start' }}>Why Choose Us</div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>The Javaan <span>Advantage</span></h2>
              <p style={{ color: '#999', marginBottom: '36px', lineHeight: 1.8 }}>
                We combine cutting-edge technology with decades of logistics experience to deliver 
                unparalleled service quality.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <Package size={20} />, title: 'GPS-Tracked Fleet', desc: 'Every vehicle monitored in real-time.' },
                  { icon: <Shield size={20} />, title: 'Full Insurance', desc: 'Complete coverage for your peace of mind.' },
                  { icon: <Users size={20} />, title: '24/7 Support', desc: 'Round-the-clock customer assistance.' },
                  { icon: <Clock size={20} />, title: 'On-Time Guarantee', desc: '99.8% on-time delivery performance.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div style={{ 
                      width: 44, height: 44, borderRadius: 10, 
                      background: 'rgba(255,107,0,0.1)', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#FF6B00', flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', marginBottom: '4px', fontFamily: "'Exo 2', sans-serif", fontWeight: 600 }}>{item.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#666' }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection variants={fadeRight}>
              <div style={{ position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800" 
                  alt="Logistics" 
                  style={{ borderRadius: 20, width: '100%', height: 480, objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', bottom: -20, left: -20,
                  background: '#FF6B00', borderRadius: 16, padding: '24px 32px',
                  boxShadow: '0 10px 40px rgba(255,107,0,0.3)'
                }}>
                  <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>12+</div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' as const, marginTop: 4 }}>Years Experience</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section" style={{ background: '#0A0A0A' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp} className="section-header">
            <div className="section-tag">Testimonials</div>
            <h2 className="section-title">Client <span>Stories</span></h2>
            <p className="section-desc">What our partners say about working with Javaan Transport.</p>
          </AnimatedSection>

          <div className="grid-2">
            {[
              { name: "Rajesh Kumar", role: "CEO, TechLogix", text: "Javaan Transport has revolutionized our supply chain. Their reliability and real-time tracking system is unmatched.", initial: "R" },
              { name: "Priya Sharma", role: "Manager, FreshFoods", text: "The temperature-controlled fleet and dedicated support team have been a game-changer for our perishable goods.", initial: "P" }
            ].map((review, i) => (
              <AnimatedSection key={i} variants={i === 0 ? fadeLeft : fadeRight} delay={i * 0.15}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="#FF6B00" stroke="#FF6B00" />)}
                  </div>
                  <p className="testimonial-text">"{review.text}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{review.initial}</div>
                    <div className="testimonial-info">
                      <h5>{review.name}</h5>
                      <span>{review.role}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, #FF6B00, #E05E00)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: -100, right: -100,
          width: 400, height: 400,
          borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.1)'
        }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <AnimatedSection variants={scaleIn}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 16, fontFamily: "'Josefin Sans', sans-serif" }}>
              Ready to Ship?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 500, margin: '0 auto 32px', fontSize: '1.05rem' }}>
              Get a free quote in under 2 minutes and experience logistics done right.
            </p>
            <Link to="/quote" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
              Get Free Quote <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
