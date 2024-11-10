"use client";
import React from 'react';
import Image from 'next/image';
import Typewriter from "typewriter-effect";
import Link from 'next/link';
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import './Hero.css'; 

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="hero-name">
              {`I'm`} <br />
              <Typewriter
                options={{
                  strings: ["Frontend Web Developer "],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50
                }}
              />
            </p>
          </motion.h1>
          <div className='hero-underline'></div>
          <p className="hero-description">
            Experienced Frontend Web Developer | Expert in Typescript, JavaScript, Node.js, React.js, Next.js, HTML, CSS | Participant in Piaic and Governor Initiative of Artificial Intelligence
          </p>
          <div className="hero-contact">
            <Link href="#Contact">
              <motion.button
                className="hero-button"
                whileHover={{ scale: 1.1 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <motion.div
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3 }}
          >
            <Image
              className="hero-image"
              alt="hero"
              height={500}
              width={500}
              src="/assets/profilepic.png"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Export the component with dynamic import
export default dynamic(() => Promise.resolve(Hero), { ssr: false });
