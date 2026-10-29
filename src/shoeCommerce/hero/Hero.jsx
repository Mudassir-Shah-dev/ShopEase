import React from 'react'
import styles from './Hero.module.css'
import shoeImage from './checking.avif'

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            STEP INTO
            <br />
            SOMETHING
            <br />
            GREATER.
          </h1>

          <p>
            Premium footwear. Timeless design.
            <br />
            Built for every step,made to move with you.
          </p>

          <div className={styles.btn}>
            <button>SHOP SHOECOMMERCE</button>
          </div>
        </div>

        <div className={styles.right}>

          <img
            src={shoeImage}
            alt="White sneaker"
            className={styles.shoeImage}
          />




        </div>
      </div>
    </>
  )
}

export default Hero