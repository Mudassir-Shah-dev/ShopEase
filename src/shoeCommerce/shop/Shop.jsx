
import {useState} from 'react';
import styles from './Shop.module.css';
import { Search } from 'lucide-react';

import glasses from './glasses.avif';
import sneaker from './sneaker.avif';
import sneaker2 from './sneaker2.avif';
import sneaker3 from './sneaker3.avif';
import sneaker4 from './sneaker4.avif';
import watch from './watch.avif';

const products = [
  {
    id: '001',
    name: '001 Sneaker',
    category: 'Footwear',
    price: 180.00,
    rating: 4.9,
    image: sneaker,
  },
  {
    id: '002',
    name: 'Black Widow',
    category: 'Accessories',
    price: 380.00,
    rating: 4.5,
    image: watch,
  },
  {
    id: '003',
    name: 'Classic Frame',
    category: 'Accessories',
    price: 150.00,
    rating: 4.8,
    image: glasses,
  },
  {
    id: '004',
    name: 'limited',
    category: 'Footwear',
    price: 100.00,
    rating: 4.2,
    image: sneaker2,
  },
  {
    id: '005',
    name: 'Running',
    category: 'Footwear',
    price: 160.00,
    rating: 4.4,
    image: sneaker3,
  },
  {
    id: '006',
    name: 'pairs',
    category: 'Footwear',
    price: 350.00,
    rating: 5.0,
    image: sneaker4,
  },
];

const Shop = () => {
  const [searchName, setSearchName] = useState("")
  const [category, setCategory] = useState("All")
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>THE ESSENTIALS</h2>

        <div className={styles.description}>
          <p>A balance of texture, detail, and design.</p>
          <p>Crafted for the contemporary lifestyle.</p>
        </div>
      </div>

      <div className={styles.selectionWrapper}>
        <div className={styles.selection}>
          <div className={styles.searchField}>
            <Search />
           <input type="text" value={searchName} onChange={(e)=> setSearchName(e.target.value)}/>
          </div>

          <div className={styles.filters}>
            <button className={styles.allBtn} onClick={()=> setCategory("All")}>All</button>
            <button className={styles.footwearBtn} onClick={() => setCategory("Footwear")}>Footwear</button>
            <button className={styles.accessoriesBtn} onClick={() => setCategory("Accessories")}>
              Accessories
            </button>
          </div>
        </div>
      </div>

      <div className={styles.productsWindow}>
        {products.filter((p => p.name.includes(searchName) && (category === "All" || p.category === category  ))).map((product) => (
          <div className={styles.productCard} key={product.id}>
            <div className={styles.productImage}>
              <span>ID: {product.id}</span>

              <img src={product.image} alt={product.name} />

              <button>Add to cart</button>
            </div>

            <div className={styles.productData}>
              <div className={styles.data1}>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>

              <div className={styles.data2}>
                <strong>${product.price.toFixed(2)}</strong>
                <span>★ {product.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
