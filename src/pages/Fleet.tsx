import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Truck, Settings, Shield, Gauge, Fuel, ArrowRight } from 'lucide-react';
import AnimatedSection, { fadeUp, scaleIn, staggerContainer } from '../components/AnimatedSection';

const Fleet: React.FC = () => {
  const fleetData = [
    {
      id: 'heavy-duty',
      title: 'Heavy Duty Trailers',
      type: 'Closed Container',
      capacity: '25 - 40 Tons',
      fuel: 'Diesel',
      speed: '80 km/h',
      desc: 'Ideal for long-haul interstate transport of industrial goods and high-volume cargo.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'medium-trucks',
      title: 'Medium Cargo Trucks',
      type: 'Open / Closed',
      capacity: '10 - 15 Tons',
      fuel: 'Diesel',
      speed: '90 km/h',
      desc: 'Perfect for regional distribution and construction materials with flexible loading.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'mini-trucks',
      title: 'Mini Pickup Vehicles',
      type: 'Closed / Open',
      capacity: '1 - 3 Tons',
      fuel: 'CNG / Diesel',
      speed: '100 km/h',
      desc: 'Versatile vehicles for last-mile city delivery and express parcel services.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'tankers',
      title: 'Specialized Tankers',
      type: 'Liquid / Gas',
      capacity: '15 - 25 KL',
      fuel: 'Diesel',
      speed: '70 km/h',
      desc: 'Equipped for safe transport of chemicals, water, and specialized liquid cargo.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="page-header" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920)' }}>
        <div className="container">
          <AnimatedSection variants={fadeUp}>
            <div className="section-tag">Our Vehicles</div>
            <h1>Our <span>Fleet</span></h1>
            <p>State-of-the-art vehicles designed to handle every logistics challenge with maximum efficiency and safety.</p>
          </AnimatedSection>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <motion.div className="grid-2" style={{ gap: '32px' }} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer}>
            {fleetData.map((vehicle) => (
              <motion.div key={vehicle.id} variants={scaleIn}>
                <div className="fleet-card">
                  <div className="fleet-card-img" style={{ height: 260 }}>
                    <img src={vehicle.image} alt={vehicle.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="fleet-badge">{vehicle.capacity}</div>
                  </div>
                  <div className="fleet-card-body">
                    <h3>{vehicle.title}</h3>
                    <div className="fleet-meta">
                      <span><Settings size={12} /> {vehicle.type}</span>
                      <span><Shield size={12} /> Insured</span>
                    </div>
                    <p>{vehicle.desc}</p>
                  </div>
                  <div className="fleet-card-footer">
                    <div className="spec-item">
                      <div className="spec-value"><Truck size={14} style={{ display: 'inline', marginRight: 4 }} />{vehicle.capacity}</div>
                      <div className="spec-label">Capacity</div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-value"><Gauge size={14} style={{ display: 'inline', marginRight: 4 }} />{vehicle.speed}</div>
                      <div className="spec-label">Max Speed</div>
                    </div>
                    <div className="spec-item">
                      <div className="spec-value"><Fuel size={14} style={{ display: 'inline', marginRight: 4 }} />{vehicle.fuel}</div>
                      <div className="spec-label">Fuel Type</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#FF6B00', padding: '48px 0' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <AnimatedSection variants={fadeUp}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontFamily: "'Josefin Sans', sans-serif", marginBottom: 4, color: '#fff' }}>Need a Specific Vehicle?</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>We can arrange custom fleet solutions for your unique requirements.</p>
              </div>
              <Link to="/quote" className="btn-main" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Request Fleet <ArrowRight size={14} /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
