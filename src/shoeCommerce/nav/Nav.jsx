import React from 'react'
import styles from './Nav.module.css'
import { Search, ShoppingCart } from "lucide-react";

const Nav = () => {
  const searchHandler = () =>{
    document.getElementById("shop").scrollIntoView()
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>
          <h2>shoeCommerce</h2>
        </div>
        <div className={styles.links}>
          <a href="#shop">Shop</a>
          <a href="#collection">Collection</a>
          <a href="#experience">Experience</a>
          <a href="#cart">Cart</a>

        </div>
        <div className={styles.icons}>
          <Search onClick={searchHandler}/>
          <ShoppingCart />


        </div>

      </div>
    </>

  )
}

export default Nav