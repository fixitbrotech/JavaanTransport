import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Package, Weight, Phone, User, Mail, ArrowRight, ShieldCheck, Truck, CheckCircle } from 'lucide-react';
import AnimatedSection, { fadeUp, fadeLeft, fadeRight } from '../components/AnimatedSection';

const GetQuote: React.FC = () => {
  const [formData, setFormData] = useState({
    pickup: '', drop: '', loadType: '', weight: '',
    name: '', email: '', mobile: ''
  });
  const [isEstimating, setIsEstimating] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const handleEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEstimating(true);
    setEstimatedPrice(null);
    setTimeout(() => {
      setIsEstimating(false);
      const w = parseFloat(formData.weight) || 10;
      setEstimatedPrice(Math.round(w * 1500 + Math.random() * 5000));
    }, 2200);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#0C0C0C',
    border: '1px solid rgba(255,255,255,0.06)',
    color: '#fff',
    padding: '16px 20px 16px 52px',
    borderRadius: 12,
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const iconStyle: React.CSSProperties = {
    position: 'absolute',
    left: 18,
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#FF6B00',
    pointerEvents: 'none'
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp}>
            <div className="section-tag">Free Estimate</div>
            <h1>Get a <span>Quote</span></h1>
            <p>Fill out the form to receive a personalized logistics quote with instant price estimation.</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Form Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '40px', alignItems: 'start' }}>
            {/* Form */}
            <AnimatedSection variants={fadeLeft}>
              <div style={{ 
                background: '#141414', border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 20, padding: '48px'
              }}>
                <form onSubmit={handleEstimate}>
                  {/* Logistics Section */}
                  <h3 style={{ 
                    fontSize: '0.75rem', fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
                    color: '#555', letterSpacing: '3px', textTransform: 'uppercase',
                    paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.04)', marginBottom: 24
                  }}>
                    Shipment Details
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div style={{ position: 'relative' }}>
                      <MapPin size={16} style={iconStyle} />
                      <input style={inputStyle} placeholder="Pickup Location" required
                        value={formData.pickup} onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#FF6B00'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                      />
                    </div>
                    <div style={{ position: 'relative' }}>
                      <MapPin size={16} style={{ ...iconStyle, color: '#FF8C33' }} />
                      <input style={inputStyle} placeholder="Drop Location" required
                        value={formData.drop} onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#FF6B00'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
                    <div style={{ position: 'relative' }}>
                      <Package size={16} style={iconStyle} />
                      <select style={{ ...inputStyle, appearance: 'none' as const, cursor: 'pointer' }} required
                        value={formData.loadType} onChange={(e) => setFormData({ ...formData, loadType: e.target.value })}
                      >
                        <option value="" disabled>Load Type</option>
                        <option value="consumer">Consumer Goods</option>
                        <option value="industrial">Industrial Machines</option>
                        <option value="fragile">Fragile Items</option>
                        <option value="liquid">Liquid / Chemical</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <Weight size={16} style={iconStyle} />
                      <input style={inputStyle} type="number" placeholder="Weight (Tons)" required
                        value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#FF6B00'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                      />
                    </div>
                  </div>

                  {/* Contact Section */}
                  <h3 style={{ 
                    fontSize: '0.75rem', fontFamily: "'Exo 2', sans-serif", fontWeight: 700,
                    color: '#555', letterSpacing: '3px', textTransform: 'uppercase',
                    paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.04)', marginBottom: 24
                  }}>
                    Your Details
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 36 }}>
                    <div style={{ position: 'relative' }}>
                      <User size={16} style={iconStyle} />
                      <input style={{ ...inputStyle, padding: '14px 16px 14px 48px', fontSize: '0.85rem' }} 
                        placeholder="Full Name" required
                        value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#FF6B00'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                      />
                    </div>
                    <div style={{ position: 'relative' }}>
                      <Mail size={16} style={iconStyle} />
                      <input style={{ ...inputStyle, padding: '14px 16px 14px 48px', fontSize: '0.85rem' }} 
                        type="email" placeholder="Email" required
                        value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#FF6B00'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                      />
                    </div>
                    <div style={{ position: 'relative' }}>
                      <Phone size={16} style={iconStyle} />
                      <input style={{ ...inputStyle, padding: '14px 16px 14px 48px', fontSize: '0.85rem' }} 
                        type="tel" placeholder="Mobile" required
                        value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#FF6B00'}
                        onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-main" style={{ width: '100%', justifyContent: 'center', padding: '18px' }}>
                    Calculate Estimate <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Price Panel */}
            <AnimatedSection variants={fadeRight}>
              <div style={{ 
                background: '#141414', border: '1px solid rgba(255,255,255,0.04)',
                borderRadius: 20, padding: '48px', minHeight: 400,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', position: 'sticky', top: 120
              }}>
                <AnimatePresence mode="wait">
                  {isEstimating ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                      <div className="spinner" />
                      <p style={{ color: '#FF6B00', fontSize: '0.75rem', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 700, marginTop: 20 }}>
                        Optimizing Route...
                      </p>
                    </motion.div>
                  ) : estimatedPrice ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      style={{ width: '100%' }}
                    >
                      <div style={{ fontSize: '0.7rem', letterSpacing: '3px', textTransform: 'uppercase', color: '#666', marginBottom: 12 }}>
                        Estimated Charge
                      </div>
                      <div style={{ fontSize: '3.5rem', fontWeight: 700, color: '#FF6B00', fontFamily: "'Josefin Sans', sans-serif", lineHeight: 1, marginBottom: 8 }}>
                        ₹{estimatedPrice.toLocaleString()}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#555', marginBottom: 28 }}>Excluding GST & Insurance</div>
                      
                      <div style={{
                        background: 'rgba(255,107,0,0.06)', border: '1px solid rgba(255,107,0,0.15)',
                        borderRadius: 12, padding: '14px 20px', marginBottom: 20,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                        color: '#FF6B00', fontSize: '0.8rem', fontWeight: 600
                      }}>
                        <ShieldCheck size={16} /> Price Locked for 24h
                      </div>

                      <button className="btn-main" style={{ width: '100%', justifyContent: 'center' }}>
                        Confirm Booking <CheckCircle size={14} />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Truck size={64} strokeWidth={1} style={{ color: '#252525', marginBottom: 20 }} />
                      <p style={{ color: '#333', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', lineHeight: 1.8 }}>
                        Fill the form to see<br />instant pricing
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
