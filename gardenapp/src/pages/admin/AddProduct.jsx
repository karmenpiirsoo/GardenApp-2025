import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function AddProduct() {
  const [products, setProducts] = useState([])
  const url = "https://garden-app-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setProducts(json || []))
  }, []);

  function addProduct() {
    products.push({
    "id": Number(idRef.current.value),
    "title": titleRef.current.value,
    "price": Number(priceRef.current.value),
    "description": descriptionRef.current.value,
    "image": imageRef.current.value,
    })
    fetch(url, {method: "PUT", body: JSON.stringify(products)})
    toast.success("Product added!")
    idRef.current.value = "";
    titleRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    imageRef.current.value = "";
  }

  
  return (
    <div>
       <label>Product ID</label><br />
      <input ref={idRef} type="text" /><br /><br />
      <label>Product title</label><br />
      <input ref={titleRef} type="text" /><br /><br />
      <label>Product price</label><br />
      <input ref={priceRef} type="text" /><br /><br />
      <label>Product description</label><br />
      <input ref={descriptionRef} type="text" /><br /><br />
      <label>Product category</label><br />
      <label>Product image</label><br />
      <input ref={imageRef} type="text" /><br /><br />
      <button onClick={addProduct}>Add product</button>

      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          />
    </div>
  )
}

export default AddProduct
