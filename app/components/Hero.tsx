'use client';

import React from 'react';
import styles from '../styles/hero.module.css';
import Lottie from 'lottie-react';
import SharkAnimation from '@/app/assets/Shark.json';

// Interface and states

interface HeroProps {
  isLoaded: boolean;
  scrollY: number;
}

export default function Hero({ isLoaded }: HeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        
        {/* LEFT SIDE: Text */}
        <div className={styles.heroText}>
          
          {/* Big catchy text */}
          <div className={`${styles.fadeInUp} ${styles.stagger2}`}>
            <h1 className={styles.heroCatchy}>
              We dive deep for amazing web design
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`${styles.fadeInUp} ${styles.stagger3}`}>
            <div className={styles.heroSubtitle}>
              Web Development Studio — Amsterdam
            </div>
          </div>

          {/* CTA */}
          <div className={`${styles.fadeInUp} ${styles.stagger4}`}>
            <a href="#work" className={styles.heroCta}>
              <span className={styles.linkUnderline}>View Selected Work</span>
              <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Shark Animation */}
        <div className={styles.heroAnimation}>
          <Lottie animationData={SharkAnimation} loop autoplay />
        </div>

      </div>
    </section>
  );
}
