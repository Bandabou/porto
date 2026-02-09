'use client';

import React from 'react';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>

        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerLogo}>DeepReef Design</h3>
            <p className={styles.footerAddress}>
              Design Studio<br />
              Amsterdam, Netherlands
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Connect</h4>
            <a href="#" className={styles.footerLink}>Instagram</a>
            <a href="#" className={styles.footerLink}>LinkedIn</a>
            <a href="#" className={styles.footerLink}>Behance</a>
          </div>

          <div className={styles.footerColumn}>
            <h4 className={styles.footerHeading}>Contact</h4>
            <a href="mailto:hello@atelier.studio" className={styles.footerLink}>
              deepreef@gmail.com
            </a>
            <a href="tel:+31207741222" className={styles.footerLink}>
              +31 20 774 1222
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerCopyright}>
            © 2026 Atelier. All rights reserved.
          </div>
          <div className={styles.footerLegal}>
            <a href="#" className={styles.footerLegalLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLegalLink}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
