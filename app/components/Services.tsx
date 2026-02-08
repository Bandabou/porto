'use client';

import React from 'react';
import styles from '../styles/services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesGrid}>

          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>01</div>
            <h3 className={styles.serviceTitle}>Brand Identity</h3>
            <p className={styles.serviceDescription}>
              Distinctive visual systems that communicate your essence with clarity and sophistication.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>02</div>
            <h3 className={styles.serviceTitle}>Digital Design</h3>
            <p className={styles.serviceDescription}>
              Interfaces engineered for both beauty and performance, creating memorable user experiences.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.serviceNumber}>03</div>
            <h3 className={styles.serviceTitle}>Development</h3>
            <p className={styles.serviceDescription}>
              Pixel-perfect execution with modern frameworks, optimized for speed and scalability.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
