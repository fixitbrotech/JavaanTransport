import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, Warehouse, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { fadeUp, fadeLeft, fadeRight } from '../components/AnimatedSection';

const Services: React.FC = () => {
  const servicesData = [
    {
      id: 'goods-transport',
      title: 'Goods Transport',
      desc: 'Reliable and efficient movement of goods across local and regional destinations with priority handling and real-time tracking.',
      icon: <Package size={28} />,
      benefits: ['Door-to-door delivery', 'GPS tracking enabled', 'Full insurance coverage', 'Dedicated fleet assignment'],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'logistics-management',
      title: 'Logistics Management',
      desc: 'End-to-end supply chain coordination and efficiency optimization tailored to your business needs with advanced reporting.',
      icon: <Truck size={28} />,
      benefits: ['Real-time reporting', 'Cost optimization', 'Custom management solutions', 'Route planning AI'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'warehousing',
      title: 'Warehousing',
      desc: 'State-of-the-art storage facilities with inventory control and seamless distribution integration across all major hubs.',
      icon: <Warehouse size={28} />,
      benefits: ['High-security storage', 'Inventory management', 'Packaging services', 'Climate control available'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'nationwide-delivery',
      title: 'Local & Interstate Delivery',
      desc: 'Comprehensive delivery networks connecting major cities and remote areas with precision timing and care.',
      icon: <Globe size={28} />,
      benefits: ['Express transit options', 'Cross-state documentation', 'Specialized cargo handling', 'Last-mile delivery'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp}>
            <div className="section-tag">What We Do</div>
            <h1>Our <span>Services</span></h1>
            <p>From specialized shipping to large-scale industrial cargo, Javaan Transport provides tailored solutions that keep your business moving forward.</p>
          </AnimatedSection>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={service.id} className="grid-2" style={{ alignItems: 'center', gap: '48px' }}>
                  <AnimatedSection variants={isEven ? fadeLeft : fadeRight} style={{ order: isEven ? 1 : 2 }}>
                    <div style={{ color: '#FF6B00', marginBottom: '20px', width: 56, height: 56, borderRadius: 14, background: 'rgba(255,107,0,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {service.icon}
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '16px', fontFamily: "'Josefin Sans', sans-serif" }}>{service.title}</h2>
                    <p style={{ color: '#999', lineHeight: 1.8, marginBottom: '32px', fontSize: '1rem' }}>{service.desc}</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                      {service.benefits.map((b, i) => (
                        <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.35, delay: i * 0.08 }} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.92rem' }}>
                          <CheckCircle size={18} style={{ color: '#FF6B00', flexShrink: 0 }} />
                          <span style={{ color: '#ccc' }}>{b}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Link to="/quote" className="btn-main">Get Quote <ArrowRight size={14} /></Link>
                  </AnimatedSection>
                  <AnimatedSection variants={isEven ? fadeRight : fadeLeft} style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', height: 420 }}>
                      <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 80, height: 80, background: 'linear-gradient(135deg, transparent 50%, #FF6B00 50%)' }} />
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#0C0C0C', textAlign: 'center' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp}>
            <div className="section-tag">Ready to Start?</div>
            <h2 className="section-title">Need a Custom <span>Solution?</span></h2>
            <p className="section-desc" style={{ marginBottom: '36px' }}>Our logistics experts will design a personalized plan for your business requirements.</p>
            <Link to="/contact" className="btn-main">Contact Our Team <ArrowRight size={14} /></Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
