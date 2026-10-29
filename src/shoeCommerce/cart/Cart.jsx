import React, { useState } from 'react'
import styles from './Cart.module.css'

const Cart = () => {
  const [quantity, setQuantity] = useState(1)
  const unitPrice = 100
  const shippingFee = 18
  const totalPrice = unitPrice * quantity
  const grandTotal = totalPrice + shippingFee

  const [orderMessage, setOrderMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderMessage("Your order has been placed successfully!");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.heading}>
            <p>YOUR SELECTION</p>
            <h1>CART & CHECKOUT</h1>

          </div>
          <div className={styles.checkoutLayout}>
            <div className={styles.cartPanel}>
              <h3>Shopping bag</h3>

              <div className={styles.cartItems}>
                <article className={styles.cartItem}>
                  <img
                    alt="Form 01 Sneaker"
                    src="https://images.unsplash.com/photo-1608229751021-ed4bd8677753?auto=format&fit=crop&w=1200&q=85"
                  />

                  <div className={styles.cartItemInfo}>
                    <div>
                      <h4>Form 01 Sneaker</h4>
                      <p>Bone / EU 42</p>
                    </div>

                    <button className={styles.remove}>
                      Remove
                    </button>
                  </div>

                  <div className={styles.cartItemBottom}>
                    <div className={`${styles.quantityPicker} ${styles.compact}`}>
                      <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
                      <span>{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <strong>${totalPrice.toFixed(2)}</strong>
                  </div>
                </article>
              </div>

              <div className={styles.orderSummary}>
                <h3>Order summary</h3>

                <dl>
                  <div>
                    <dt>Subtotal</dt>
                    <dd>${totalPrice.toFixed(2)}</dd>
                  </div>

                  <div>
                    <dt>Shipping</dt>
                    <dd>${shippingFee}</dd>
                  </div>

                  <div className={styles.total}>
                    <dt>GrandTotal</dt>
                    <dd>${grandTotal}</dd>
                  </div>
                </dl>

                <p>Taxes calculated at checkout.</p>
              </div>
            </div>


            <form className={styles.checkoutForm}
              onSubmit={handleSubmit}
            >
              <h3>Checkout details</h3>

              <div className={styles.field}>
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Muhammad Ali"
                  autoComplete="name"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. ali@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="address">Shipping address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="House number and street"
                  autoComplete="street-address"
                  required
                />
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.field}>
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="e.g. Islamabad"
                    autoComplete="address-level2"
                    required
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="postal">Postal code</label>
                  <input
                    id="postal"
                    name="postal"
                    type="text"
                    placeholder="e.g. 44000"
                    autoComplete="postal-code"
                    required
                  />
                </div>
              </div>

              <fieldset className={styles.paymentMethod}>
                <legend>Payment method</legend>

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    defaultChecked
                  />
                  <span>Credit card</span>
                  <small>VISA &nbsp; MC &nbsp; AMEX</small>
                </label>

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                  />
                  <span>PayPal</span>
                </label>
              </fieldset>

              <button
                type="submit"
                className={`${styles.primaryButton} ${styles.placeOrder}`}
              >
                Place order <span>${grandTotal.toFixed(2)}</span>
              </button>
              {orderMessage && (
                <div className={styles.confirmationMessage} role="status">
                  {orderMessage}
                </div>
              )}

              <p className={styles.checkoutNote}>
                By placing your order, you agree to our terms and privacy policy.
              </p>
            </form>

          </div>
          <footer className={styles.footer}>
            <a className={styles.brand} href="#home">
              OB/01
            </a>

            <p className={styles.footerText}>
              Objects for a considered life.
            </p>

            <span className={styles.copyright}>
              © 2025 OB/01
            </span>
          </footer>


        </div>

      </div>
    </>
  )
}

export default Cart