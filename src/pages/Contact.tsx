import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, ArrowUpRight } from 'lucide-react';
import AnimatedSection, { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer } from '../components/AnimatedSection';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp}>
            <div className="section-tag">Get In Touch</div>
            <h1>Contact <span>Us</span></h1>
            <p>Have questions about our logistics services? Our team is ready to help you find the perfect solution.</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="section" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <motion.div
            className="grid-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              { icon: <Phone size={24} />, title: 'Call Us', info: '+91 70922 13666', sub: '+91 96551 12549' },
              { icon: <Mail size={24} />, title: 'Email', info: 'javaantransport@gmail.com', sub: 'support@javaantransport.com' },
              { icon: <MapPin size={24} />, title: 'Office', info: 'Sulur, Coimbatore', sub: 'Tamil Nadu 641402' },
              { icon: <Clock size={24} />, title: 'Working Hours', info: 'Mon – Sat: 8AM – 9PM', sub: 'Sunday: 9AM – 5PM' }
            ].map((card, i) => (
              <motion.div key={i} variants={scaleIn}>
                <div className="contact-card">
                  <div className="contact-icon">{card.icon}</div>
                  <h4>{card.title}</h4>
                  <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>{card.info}</p>
                  <p style={{ color: '#666', fontSize: '0.8rem', marginTop: 4 }}>{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + WhatsApp */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px', alignItems: 'start' }}>
            {/* Contact Form */}
            <AnimatedSection variants={fadeLeft}>
              <div style={{
                background: '#141414', border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 20, padding: '48px'
              }}>
                <h3 style={{ fontSize: '1.5rem', fontFamily: "'Josefin Sans', sans-serif", marginBottom: 32 }}>
                  Send Us a <span style={{ color: '#FF6B00' }}>Message</span>
                </h3>
                <form>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <input className="form-input" placeholder="Your Name" required />
                    <input className="form-input" type="email" placeholder="Email Address" required />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <input className="form-input" placeholder="Subject" required />
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <textarea
                      className="form-input"
                      placeholder="Tell us about your logistics needs..."
                      required
                      style={{ minHeight: 180, resize: 'vertical' }}
                    />
                  </div>
                  <button type="submit" className="btn-main" style={{ width: '100%', justifyContent: 'center', padding: 18 }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Side Panel */}
            <AnimatedSection variants={fadeRight}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* WhatsApp Card */}
                <div style={{
                  background: '#141414', border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: 20, padding: '36px', textAlign: 'center'
                }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(37,211,102,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px', color: '#25D366'
                  }}>
                    <MessageCircle size={28} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontFamily: "'Josefin Sans', sans-serif", marginBottom: 8 }}>
                    Quick Chat on WhatsApp
                  </h4>
                  <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: 24, lineHeight: 1.7 }}>
                    Get instant responses from our support team. Available 24/7.
                  </p>
                  <a href="https://wa.me/917092213666" target="_blank" rel="noreferrer" className="whatsapp-btn" style={{ justifyContent: 'center', width: '100%' }}>
                    <MessageCircle size={18} /> Chat Now
                  </a>
                </div>

                {/* Map Placeholder */}
                <div style={{
                  background: '#141414', border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: 20, padding: '48px', textAlign: 'center',
                  position: 'relative', overflow: 'hidden'
                }}>
                  {/* Decorative rings */}
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 200, height: 200, borderRadius: '50%',
                    border: '1px solid rgba(255,107,0,0.06)',
                    animation: 'spin-slow 25s linear infinite'
                  }} />
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 140, height: 140, borderRadius: '50%',
                    border: '1px dashed rgba(255,107,0,0.04)',
                    animation: 'spin-slow 15s linear infinite reverse'
                  }} />

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <MapPin size={40} strokeWidth={1} style={{ color: 'rgba(255,107,0,0.2)', marginBottom: 16 }} />
                    <h4 style={{ fontSize: '1rem', fontFamily: "'Josefin Sans', sans-serif", marginBottom: 8 }}>
                      Visit Our <span style={{ color: '#FF6B00' }}>Office</span>
                    </h4>
                    <p style={{ color: '#555', fontSize: '0.8rem', lineHeight: 1.8, marginBottom: 20 }}>
                      Shop No.3, Ganapathy Coffee Near,<br />Trichy Road, Sulur,<br />Coimbatore 641402
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      color: '#FF6B00', fontSize: '0.8rem', fontWeight: 600,
                      letterSpacing: '1px', textTransform: 'uppercase'
                    }}>
                      Open in Maps <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Google Map Embed */}
                <div style={{
                  background: '#141414', border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: 20, height: '300px', overflow: 'hidden', position: 'relative'
                }}>
                  <iframe 
                    title="Javaan Transport Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6346766465495!2d77.12349137451996!3d11.028522355201172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85698b6727271%3A0x67e91d5757d38392!2sSulur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712497000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                    allowFullScreen 
                    loading="lazy" 
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
