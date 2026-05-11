import React from 'react';
import AnimatedSection, { fadeUp } from '../components/AnimatedSection';

const PolicyLayout: React.FC<{ title: string; children: React.ReactNode; bg: string }> = ({ title, children, bg }) => (
  <div>
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <AnimatedSection variants={fadeUp}>
          <div className="section-tag">Legal Information</div>
          <h1>{title}</h1>
        </AnimatedSection>
      </div>
    </div>
    <section className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <AnimatedSection variants={fadeUp}>
          <div className="policy-content" style={{ color: '#aaa', lineHeight: 1.8, fontSize: '1rem' }}>
            {children}
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export const Privacy = () => (
  <PolicyLayout 
    title="Privacy Policy" 
    bg="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920"
  >
    <h3>1. Information We Collect</h3>
    <p>We collect information you provide directly to us when you request a quote, track a shipment, or communicate with our support team.</p>
    <h3>2. How We Use Information</h3>
    <p>We use the information we collect to provide, maintain, and improve our logistics services, and to process your shipment requests.</p>
    <h3>3. Data Security</h3>
    <p>We implement industry-standard security measures to protect your personal and shipment data from unauthorized access.</p>
  </PolicyLayout>
);

export const Terms = () => (
  <PolicyLayout 
    title="Terms of Service" 
    bg="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920"
  >
    <h3>1. Acceptance of Terms</h3>
    <p>By using Javaan Transport services, you agree to comply with and be bound by these terms and conditions.</p>
    <h3>2. Shipment Responsibility</h3>
    <p>Customers are responsible for providing accurate pickup and delivery information. Javaan Transport is not liable for delays caused by incorrect data.</p>
    <h3>3. Limitation of Liability</h3>
    <p>Our liability for any loss or damage is limited according to industry standards and specific service agreements.</p>
  </PolicyLayout>
);

export const Accessibility = () => (
  <PolicyLayout 
    title="Accessibility" 
    bg="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920"
  >
    <h3>Our Commitment</h3>
    <p>Javaan Transport is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone.</p>
    <h3>Standard Compliance</h3>
    <p>We strive to conform to Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards.</p>
    <h3>Feedback</h3>
    <p>If you encounter accessibility barriers on our website, please contact us at javaantransport@gmail.com.</p>
  </PolicyLayout>
);
