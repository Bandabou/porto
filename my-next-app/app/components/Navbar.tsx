'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import LogoDr from '@/app/assets/logodr.png'; // your logo

interface NavbarProps {
  isLoaded: boolean;
}

export default function Navbar({ isLoaded }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["work", "services", "contact"];
      let currentSection = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
          if (window.scrollY >= top) currentSection = id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isLoaded ? styles.fadeIn : ""} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarContent}>

        {/* Logo */}
        <div className={`${styles.logo} ${scrolled ? styles.logoScrolled : ""}`}>
          <Image 
            src={LogoDr} 
            alt="Deepreef Design Logo" 
            className={styles.logoImage} 
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className={styles.navLinks}>
          <a href="#work" className={`${styles.navLink} ${active === "work" ? styles.active : ""}`}>Work</a>
          <a href="#services" className={`${styles.navLink} ${active === "services" ? styles.active : ""}`}>Services</a>
          <a href="#contact" className={`${styles.navLink} ${active === "contact" ? styles.active : ""}`}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
