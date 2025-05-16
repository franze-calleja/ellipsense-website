"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';

export default function Home() {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.backgroundCircles}>
        {[...Array(8)].map((_, i) => (
          <div key={i} className={styles.circle} />
        ))}
      </div>
      
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoCircles}>
          <img 
          src="/images/logo.png" 
          alt="Dashboard Preview" 
          className={styles.dashboardImage}
        />
          </div>
        </div>
        <div className={styles.links}>
          <a href="#">Home</a>
          <a href="#">Company</a>
          <a href="#">Product</a>
          <button className={styles.contactBtn}>Contact Us</button>
        </div>
      </nav>

      <motion.section 
        className={styles.hero}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h1 variants={fadeInUp}>
          <span className={styles.highlight}>Elipsense</span> Tech
          <div className={styles.subTitle}>Solution</div>
        </motion.h1>
        <motion.p 
          className={styles.description}
          variants={fadeInUp}
        >
          From custom software development to digital transformation, Elipsense Tech
          Solution is your trusted partner in leveraging technology to achieve your
          business goals.
        </motion.p>
        <motion.button 
          className={styles.joinButton}
          variants={fadeInUp}
        >
          Join Us today
        </motion.button>
      </motion.section>

      <motion.section 
        className={styles.dashboard}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="/images/dashboard.png" 
          alt="Dashboard Preview" 
          className={styles.dashboardImage}
        />
      </motion.section>

      <motion.section 
        className={styles.about}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp}>About Us</motion.h2>
        <motion.div 
          className={styles.glassContainer}
          variants={staggerContainer}
        >
          <motion.div 
            className={styles.glassCard}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Our Mission</h3>
                <p>To deliver innovative technological solutions that empower businesses to thrive in the digital age.</p>
              </div>
              <div className={styles.cardBack}>
                <h3>Mission</h3>
                <p>Empowering Digital Success</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.glassCard}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Our Vision</h3>
                <p>To be the leading force in digital transformation, setting new standards in technological excellence.</p>
              </div>
              <div className={styles.cardBack}>
                <h3>Vision</h3>
                <p>Leading Innovation</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.glassCard}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2 * 0.2 }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <h3>Who We Are</h3>
                <p>A team of passionate tech experts dedicated to creating impactful solutions for our clients.</p>
              </div>
              <div className={styles.cardBack}>
                <h3>Identity</h3>
                <p>Tech Excellence</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}
