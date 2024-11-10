import Link from 'next/link';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <section className="footer-section">
        <footer className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <span className="footer-title">Huda Noor Portfolio</span>
              <p className="footer-copy">
                © 2024 Huda Noor Portfolio
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
