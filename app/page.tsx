'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamically set CSS variable for navbar height
  useEffect(() => {
    const nav = document.querySelector("nav");
    if (nav) {
      const height = nav.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    }
  }, [isLoaded]);

  return (
    <>
      <Navbar isLoaded={isLoaded} />

      {/* Wrapper to push content below navbar */}
      <main className="pageWrapper">
        <Hero isLoaded={isLoaded} scrollY={scrollY} />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
