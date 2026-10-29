import React, { useState } from 'react'
import styles from './Collection.module.css'
import sneaker2 from './sneaker2.avif'

const Collection = () => {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedFinish, setSelectedFinish] = useState("Bone")
  const [quantity, setQuantity] = useState(1)
  const unitPrice = 100
  const totalPrice = unitPrice * quantity
  return (
    <>
      <div className={styles.container}>
        <div className={styles.collectionCard}>
          <div className={styles.info}>
            <span>Most popular</span>
            <span>Move / Experience</span>


          </div>
          <div className={styles.imageWrapper}>
            <img src={sneaker2} alt="Featured sneaker" />
          </div>

        </div>
        <div className={styles.form}>
          <div className={styles.data1}>


            <h2>FORM 004</h2>
            <span>$100.00</span>
            <div className={styles.description}>
              <p>A refined daily sneaker shaped around natural</p>
              <p>movement. Soft structure, considered proportions, and</p>
              <p>only what is essential.</p>

            </div>

          </div>
          <div className={styles.data2}>
            <div className={styles.options}>
              <span>Finish</span>
              <strong>{selectedFinish}</strong>

            </div>
            <div className={styles.btn}>
              <button className={selectedFinish === "Bone" ? styles.selectedFinish : ""} onClick={() => setSelectedFinish("Bone")}>
                <i className={styles.bone}></i>
                Bone

              </button>
              <button className={selectedFinish === "Onyx" ? styles.selectedFinish : ""} onClick={() => setSelectedFinish("Onyx")}>
                <i className={styles.onyx}></i>
                Onyx

              </button>

            </div>



          </div>
          <div className={styles.data3}>
            <div className={styles.sizeHeadings}>
              <span>Size</span>
              <button>Size Guide</button>
            </div>
            <div className={styles.sizes}>
              {[40, 41, 42, 43, 44].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? styles.selected : ""}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className={styles.quantityInfo}>
              <div className={styles.quantityChecker}>
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1: quantity)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>

              </div>
              <div className={styles.primaryBtn}>
                Add to Cart
                <span>${totalPrice.toFixed(2)}</span>

              </div>

            </div>
            <div className={styles.detailList}>
              <div className={styles.detail1}>
                <dt>Upper</dt>
                <dd>Italian full-grain leather</dd>
              </div>
              <div className={styles.detail2}>
                <dt>Upper</dt>
                <dd>Italian full-grain leather</dd>
              </div>
              <div className={styles.detail3}>
                <dt>Upper</dt>
                <dd>Italian full-grain leather</dd>
              </div>

            </div>


          </div>
        </div>



      </div>
    </>
  )
}

export default Collection