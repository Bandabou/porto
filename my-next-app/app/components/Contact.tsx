'use client';

import React from 'react';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>
          Let's create something<br />
          <span className={styles.italic}>extraordinary</span>
        </h2>

        <p className={styles.contactDescription}>
          We're selective about our projects, ensuring we can dedicate the attention 
          your vision deserves.
        </p>

        <div className={styles.contactButtonWrapper}>
          <a href="mailto:hello@atelier.studio" className={styles.contactButton}>
            START A CONVERSATION
          </a>
        </div>
      </div>
    </section>
  );
}
