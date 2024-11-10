"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import './About.css' 
const About = () => {
  return (
    <div id="About">
      <section className="about-section">
        <div className="about-container">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              className="about-image"
              alt="hero"
              src="/assets/profilepic.JPG"
              width={500}
              height={500}
            />
          </motion.div>
          <div className="about-content">
            <motion.h1
              className="about-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
            >
              As a frontend developer with a strong background in building
              dynamic and responsive web applications, I bring extensive
              experience in leveraging Next.js, Tailwind CSS, and TypeScript to
              create seamless and performant user interfaces. My expertise
              includes developing scalable web solutions, implementing
              modern design principles, and optimizing user experiences.
            </motion.p>
            <div className="about-button-container">
              <Link href="/assets/cv/1.pdf">
                <motion.button
                  className="about-button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  View CV
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
