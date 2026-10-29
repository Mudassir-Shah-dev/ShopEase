
import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <div className={styles.container}>

      <div className={styles.heading}>
        <p>OUR STANDARD</p>
        <h1>DESIGNED AROUND YOU.</h1>
      </div>

      <div className={styles.services}>

        <div className={styles.service}>
          <div className={styles.serviceTop}>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M3 8h17v15H3zM20 13h5l4 5v5h-9z" />
              <circle cx="9" cy="24" r="2.5" />
              <circle cx="24" cy="24" r="2.5" />
            </svg>
            <span>01</span>
          </div>

          <div className={styles.serviceInfo}>
            <h3>Fast Shipping</h3>
            <p>Worldwide dispatch within 24 hours.</p>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.serviceTop}>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <rect x="3" y="7" width="26" height="18" rx="1" />
              <path d="M3 13h26M7 20h7" />
            </svg>
            <span>02</span>
          </div>

          <div className={styles.serviceInfo}>
            <h3>Secure Payment</h3>
            <p>Protected and encrypted transactions.</p>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.serviceTop}>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M7 11a11 11 0 1 1-1 11M7 11V4M7 11h7" />
            </svg>
            <span>03</span>
          </div>

          <div className={styles.serviceInfo}>
            <h3>Easy Returns</h3>
            <p>Simple returns within 30 days.</p>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.serviceTop}>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path d="M6 18v-4a10 10 0 0 1 20 0v4" />
              <path d="M6 17H3v8h5v-8H6ZM26 17h3v8h-5v-8h2ZM24 27c-2 2-5 2-7 2" />
            </svg>
            <span>04</span>
          </div>

          <div className={styles.serviceInfo}>
            <h3>24/7 Support</h3>
            <p>Personal assistance whenever you need it.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
