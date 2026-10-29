import './App.css';

import Nav from './shoeCommerce/nav/Nav';
import Hero from './shoeCommerce/hero/Hero';
import Shop from './shoeCommerce/shop/Shop';
import Collection from './shoeCommerce/collection/Collection';
import Experience from './shoeCommerce/experience/Experience';
import Cart from './shoeCommerce/cart/Cart';

function App() {
  return (
    <>
      <Nav />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="shop">
          <Shop />
        </section>

        <section id="collection" style={{marginTop: '80px'}}>
          <Collection />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="cart">
          <Cart />
        </section>
      </main>
    </>
  );
}

export default App;