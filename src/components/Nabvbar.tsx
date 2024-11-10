import React from 'react';
import Link from 'next/link';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import './Navbar.css'; // CSS file ko link karein

const Navbar = () => {
  return (
    <div className="navbar-container">
      <section className="navbar-section">
        <header className="navbar-header">
          <div className="navbar-inner">
            <a className="navbar-logo">
              <span className="navbar-title">HUDA NOOR Portfolio</span>
            </a>
            <nav className="navbar-links">
              <Link href="#About" className="navbar-link">About</Link>
              <Link href="#skills" className="navbar-link">Skills</Link>
              <Link href="#Contact" className="navbar-link">Contact</Link>
            </nav>
            <a href="/assets/cv/1.pdf" className="navbar-button-link">
              <button className="navbar-button">
                Download CV
                <AiOutlineCloudDownload />
              </button>
            </a>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Navbar;
