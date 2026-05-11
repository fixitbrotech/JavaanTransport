import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RealisticTruck = ({ size = 60, color = "#FF6B00" }) => (
  <div style={{ position: 'relative', width: size * 1.8, height: size }}>
    {/* Truck Bed / Container */}
    <div style={{ 
      position: 'absolute', left: 0, bottom: 12, 
      width: size * 1.2, height: size * 0.5, 
      background: color, borderRadius: '2px',
      boxShadow: `0 4px 15px ${color}44`
    }} />
    
    {/* Truck Cab */}
    <div style={{ 
      position: 'absolute', right: 0, bottom: 12, 
      width: size * 0.5, height: size * 0.6, 
      background: color, borderRadius: '4px 8px 2px 2px'
    }}>
      {/* Window */}
      <div style={{ 
        position: 'absolute', top: 5, right: 4, 
        width: '60%', height: '40%', 
        background: 'rgba(0,0,0,0.3)', borderRadius: '2px' 
      }} />
    </div>

    {/* Wheels - ROTATING */}
    {[0.15, 0.45, 0.75, 0.9].map((pos, i) => (
      <motion.div
        key={i}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.3, ease: "linear" }}
        style={{
          position: 'absolute', 
          left: `${pos * 100}%`, 
          bottom: 4,
          width: 12, height: 12,
          background: '#111',
          border: '2px solid #333',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <div style={{ width: 2, height: '80%', background: '#444' }} />
      </motion.div>
    ))}
  </div>
);

const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#040404',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}
        >
          {/* Logo & Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '100px' }}
          >
            <h2 style={{ 
              fontFamily: "'Josefin Sans', sans-serif", 
              fontSize: '1.2rem', 
              letterSpacing: '15px', 
              textTransform: 'uppercase', 
              color: '#fff',
              margin: 0
            }}>
              Javaan <span style={{ color: '#FF6B00' }}>Transport</span>
            </h2>
            <p style={{ color: '#333', fontSize: '0.65rem', letterSpacing: '4px', marginTop: 12, textTransform: 'uppercase' }}>
              Precision Logistics • Global Scale
            </p>
          </motion.div>

          {/* ROAD - Realistic Texture */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '4px',
            background: '#111',
            boxShadow: '0 0 30px rgba(255,107,0,0.1)'
          }}>
            {/* Moving Road Lines */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(to right, transparent 50%, rgba(255,107,0,0.2) 50%)',
              backgroundSize: '60px 100%',
              animation: 'road-move 0.4s linear infinite'
            }} />

            {/* THE Realistic TRUCK */}
            <motion.div
              initial={{ x: '-120vw' }}
              animate={{ x: '120vw' }}
              transition={{ duration: 3.2, ease: [0.45, 0, 0.55, 1] }}
              style={{
                position: 'absolute',
                top: '-45px',
                left: 0,
              }}
            >
              <div style={{ position: 'relative' }}>
                <RealisticTruck />
                
                {/* Dynamic Exhaust Cloud */}
                <motion.div
                  animate={{ 
                    scale: [1, 2.5, 3], 
                    opacity: [0.4, 0.2, 0],
                    x: [-10, -40],
                    y: [10, 5, 15]
                  }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  style={{
                    position: 'absolute', left: 0, bottom: 15,
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    filter: 'blur(4px)'
                  }}
                />
              </div>
            </motion.div>
          </div>

          <style>
            {`
              @keyframes road-move {
                to { background-position: -60px 0; }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
