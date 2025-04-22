import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import styles from "../../css/Products.module.css"

function Products() {

  const [products, setProducts] = useState([]);
  const productUrl = "https://garden-app-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json"
 
  
  useEffect(() => {
      fetch(productUrl) // eraldi datas json faili ei tule, vaid info on plves databaasis
      .then(res => res.json()) // võtab kogu tagastuse, mis siit lehelt tuleb (metainfo)
      .then(json => setProducts(json || [])) // mille pärast me päriselt seda teeme , alati kasutada mõlemat .then'i!
    }, []);


  const sortAZ = () => {
    const response = products.toSorted((a, b) => a.title.localeCompare(b.title))
    setProducts(response)
  }

  const sortZA = () => {
    const response = products.toSorted((a, b) => b.title.localeCompare(a.title))
    setProducts(response)
  }

  const priceLowHigh = () => {
    const response = products.toSorted((a, b) => a.price - b.price)
    setProducts(response)
  }

  const priceHighLow = () => {
    const response = products.toSorted((a, b) => b.price - a.price)
    setProducts(response)
  }

   const addToCart = (selectedProduct) => {
      const cartLS = JSON.parse(localStorage.getItem("cart")) || []
      const product = cartLS.find(productInCart => productInCart.product.title === selectedProduct.name)
      if (product !== undefined) {
          product.amount = product.amount + 1;
      } else {
      cartLS.push({"product": selectedProduct, "amount": 1});
      }
      localStorage.setItem("cart", JSON.stringify(cartLS));
      toast.success("Added to cart!");
    } 

  return (
    <div>
      
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={priceLowHigh}>Low to high</button>
      <button onClick={priceHighLow}>High to low</button>

      <div className={styles.products}>
      {products.map(product =>
      <div className={styles.product} key={product.id}>
        <Link to={"/product/" + product.id}>
        <img className={styles.image} src={product.image} alt="" />
        <div className={styles.title}>{product.title}</div>
        <span className={styles.price}>{product.price} €</span>
        </Link>
        <button className={styles.button} onClick={() => addToCart(product)}> Add to cart</button>
      </div>
      )}
      </div>

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          />
    </div>
  )
}

export default Products




function HomePage() {

  const [products, setProducts] = useState([]);
  const productUrl = "https://garden-app-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  
  useEffect(() => {
      fetch(productUrl) // eraldi datas json faili ei tule, vaid info on plves databaasis
      .then(res => res.json()) // võtab kogu tagastuse, mis siit lehelt tuleb (metainfo)
      .then(json => setProducts(json || [])) // mille pärast me päriselt seda teeme , alati kasutada mõlemat .then'i!
    }, []);

  const sortAZ = () => {
    const response = products.toSorted((a, b) => a.title.localeCompare(b.title))
    setProducts(response)
  }

  const sortZA = () => {
    const response = products.toSorted((a, b) => b.title.localeCompare(a.title))
    setProducts(response)
  }

  const priceLowHigh = () => {
    const response = products.toSorted((a, b) => a.price - b.price)
    setProducts(response)
  }

  const priceHighLow = () => {
    const response = products.toSorted((a, b) => b.price - a.price)
    setProducts(response)
  }

   const addToCart = (selectedProduct) => {
      const cartLS = JSON.parse(localStorage.getItem("cart")) || []
      const product = cartLS.find(productInCart => productInCart.product.title === selectedProduct.name)
      if (product !== undefined) {
          product.amount = product.amount + 1;
      } else {
      cartLS.push({"product": selectedProduct, "amount": 1});
      }
      localStorage.setItem("cart", JSON.stringify(cartLS));
      toast.success("Added to cart!");
    }


  return (
    <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={priceLowHigh}>Low to high</button>
      <button onClick={priceHighLow}>High to low</button>

      <div className={styles.products}>
      {products.map(product =>
      <div className={styles.product} key={product.id}>
        <Link to={"/product/" + product.id}>
        <img className={styles.image} src={product.image} alt="" />
        <div className={styles.title}>{product.title}</div>
        <span className={styles.price}>{product.price} €</span>
        </Link>
        <button className={styles.button} onClick={() => addToCart(product)}> Add to cart</button>
      </div>
      )}
      </div>

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          />
    </div>
  )
}


