'use client';

import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import styles from '../styles/portfolio.module.css';

import Image_felizz from '@/app/assets/felizz.png';

interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image?: StaticImageData;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Felizz Real Estate',
    category: 'Website Development',
    description:
      'Redefining luxury accommodation through seamless digital touchpoints and elevated brand presence.',
    image: Image_felizz,
    link: 'https://felizzrealestate.webflow.io/', //
  },
  {
    title: 'Verdant Capital',
    category: 'Financial Platform',
    description:
      'Building trust through clarity. A sophisticated investment platform designed for discerning clients.',
  },
  {
    title: 'Atelier Noir',
    category: 'E-commerce Experience',
    description:
      'Where craftsmanship meets digital innovation. An immersive shopping experience for contemporary design.',
  },
];

export default function Portfolio() {
  return (
    <section id="work" className={styles.portfolioSection}>
      <div className={styles.portfolioContainer}>
        <div className={styles.portfolioHeader}>
          <h2 className={styles.portfolioTitle}>Selected Work</h2>
          <p className={styles.portfolioSubtitle}>
            A curated collection of projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, index) => (
            <div key={index} className={styles.portfolioCard}>
              <div className={styles.portfolioLayout}>
                <div className={styles.portfolioImageWrapper}>
                  <div className={styles.portfolioImageContainer}>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        className={styles.portfolioImage}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <div className={styles.imageOverlay} />
                  </div>
                </div>

                <div className={styles.portfolioContent}>
                  <div className={styles.portfolioCategory}>
                    {item.category}
                  </div>
                  <h3 className={styles.portfolioItemTitle}>
                    {item.title}
                  </h3>
                  <p className={styles.portfolioDescription}>
                    {item.description}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      className={styles.portfolioLink}
                      target="_blank"                // open in new tab
                      rel="noopener noreferrer"      // security for external links
                    >
                      <span className={styles.linkUnderline}>View Case Study</span>
                      <svg
                        className={styles.arrowDiagonal}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M17 7H7M17 7v10"
                        />
                      </svg>
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
