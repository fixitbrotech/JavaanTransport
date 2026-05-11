import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection, { fadeUp, fadeLeft, fadeRight, rotateIn } from '../components/AnimatedSection';

const AboutUs: React.FC = () => {
  const milestones = [
    { year: '2010', title: 'The Beginning', desc: 'Started with a single truck and a vision to revolutionize logistics.' },
    { year: '2014', title: 'Regional Expansion', desc: 'Expanded to 5 states with a growing fleet of 50+ vehicles.' },
    { year: '2018', title: 'Nationwide Network', desc: 'Reached 100+ cities with GPS tracking and cloud management.' },
    { year: '2022', title: 'Industry Leader', desc: 'Recognized as the fastest-growing logistics firm with 500+ fleet.' },
    { year: '2026', title: 'Digital Future', desc: 'AI-powered route optimization and real-time analytics platform launch.' }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp}>
            <div className="section-tag">Who We Are</div>
            <h1>Our <span>Legacy</span></h1>
            <p>Javaan Transport has been a cornerstone of logistics excellence, driving industries forward through innovative transport solutions since 2010.</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '40px' }}>
            <AnimatedSection variants={fadeLeft}>
              <div style={{
                background: '#141414', border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 20, padding: '48px', height: '100%',
                position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', top: -30, right: -30,
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'rgba(255,107,0,0.04)'
                }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'rgba(255,107,0,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FF6B00', marginBottom: 24
                  }}>
                    <Target size={28} />
                  </div>
                  <h2 style={{ fontSize: '2rem', fontFamily: "'Josefin Sans', sans-serif", marginBottom: 20 }}>
                    Our <span style={{ color: '#FF6B00' }}>Vision</span>
                  </h2>
                  <p style={{ color: '#999', lineHeight: 1.9, fontSize: '1rem' }}>
                    To become the global benchmark for logistics reliability and efficiency,
                    connecting businesses through a seamless, technology-driven transport network
                    that sets new industry standards.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variants={fadeRight}>
              <div style={{
                background: '#141414', border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 20, padding: '48px', height: '100%',
                position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', bottom: -30, left: -30,
                  width: 120, height: 120, borderRadius: '50%',
                  background: 'rgba(255,107,0,0.04)'
                }} />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 14,
                    background: 'rgba(255,107,0,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FF6B00', marginBottom: 24
                  }}>
                    <Globe size={28} />
                  </div>
                  <h2 style={{ fontSize: '2rem', fontFamily: "'Josefin Sans', sans-serif", marginBottom: 20 }}>
                    Our <span style={{ color: '#FF6B00' }}>Mission</span>
                  </h2>
                  <p style={{ color: '#999', lineHeight: 1.9, fontSize: '1rem' }}>
                    Delivering high-quality transport services with unwavering focus on safety,
                    speed, and sustainability, while maintaining transparency and integrity in every
                    single shipment we handle.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: '#0A0A0A' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp} className="section-header">
            <div className="section-tag">Our Journey</div>
            <h2 className="section-title">Company <span>Milestones</span></h2>
          </AnimatedSection>

          <div className="timeline-container">
            <div className="timeline-line" />
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="timeline-dot-center" />
                <div className="timeline-item-content" style={{ marginLeft: i % 2 === 0 ? '0' : 'auto', marginRight: i % 2 === 0 ? 'auto' : '0' }}>
                  <div className="timeline-year">{item.year}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <AnimatedSection variants={rotateIn}>
            <div className="stats-bar">
              {[
                { number: '12+', label: 'Years Experience' },
                { number: '800+', label: 'Team Members' },
                { number: '5M+', label: 'Miles Covered' },
                { number: '99%', label: 'Client Satisfaction' }
              ].map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="section" style={{ background: '#0A0A0A' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp} className="section-header">
            <div className="section-tag">What Drives Us</div>
            <h2 className="section-title">Core <span>Values</span></h2>
          </AnimatedSection>

          <div className="grid-3" style={{ maxWidth: 900, margin: '0 auto' }}>
            {[
              { title: 'Safety First', desc: 'Every shipment is handled with maximum care and precaution.' },
              { title: 'Integrity', desc: 'Transparent pricing, honest communication, no hidden fees.' },
              { title: 'Innovation', desc: 'Leveraging AI and IoT for smarter logistics solutions.' },
              { title: 'Reliability', desc: '99.8% on-time delivery rate across all services.' },
              { title: 'Customer Focus', desc: 'Dedicated team for personalized logistics support.' },
              { title: 'Sustainability', desc: 'Eco-friendly fleet and carbon offset programs.' }
            ].map((val, i) => (
              <AnimatedSection key={i} variants={fadeUp} delay={i * 0.08}>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: 14,
                  padding: '20px', borderRadius: 14,
                  background: '#141414', border: '1px solid rgba(255,255,255,0.03)',
                  transition: 'all 0.3s ease'
                }}>
                  <CheckCircle size={20} style={{ color: '#FF6B00', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontFamily: "'Exo 2', sans-serif", fontWeight: 600, marginBottom: 4 }}>{val.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.6 }}>{val.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{
        background: 'linear-gradient(135deg, #FF6B00, #E05E00)',
        textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', bottom: -80, left: -80,
          width: 300, height: 300, borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.1)'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <AnimatedSection variants={fadeUp}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontFamily: "'Josefin Sans', sans-serif", marginBottom: 16 }}>
              Partner With Us
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 500, margin: '0 auto 32px', fontSize: '1rem' }}>
              Join 15,000+ businesses who trust Javaan Transport for their logistics needs.
            </p>
            <Link to="/contact" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
              Get In Touch <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
