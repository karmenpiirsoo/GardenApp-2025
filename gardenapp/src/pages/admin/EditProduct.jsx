import React, { useEffect, useRef, useState } from 'react'
import {useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'


function EditProduct() {

  const [products, setProducts] = useState([])
  const url = "https://garden-app-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  const {productId} = useParams()

  const found = products.find(product => product.id === Number(productId))

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

  function saveProduct() {
    const index = products.indexOf(found)
    products[index]   = {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "image": imageRef.current.value,
      }
    fetch(url, {method: "PUT", body: JSON.stringify(products)})
     toast.success("Product saved!")
  }
  
  if (products.length === 0)
    {return <div>Loading ...</div>} 

  if (found === undefined)
    {return <div>Product not found ...</div>} 

  return (
    <div>
       <div>{found.title}</div>
      <label>Product ID</label><br />
      <input defaultValue={found.id} ref={idRef} type="text" /><br /><br />
      <label>Product title</label><br />
      <input defaultValue={found.title} ref={titleRef} type="text" /><br /><br />
      <label>Product price</label><br />
      <input defaultValue={found.price} ref={priceRef} type="text" /><br /><br />
      <label>Product description</label><br />
      <input defaultValue={found.description} ref={descriptionRef} type="text" /><br /><br />
      <label>Product image</label><br />
      <input defaultValue={found.image} ref={imageRef} type="text" /><br /><br />
      <button onClick={saveProduct}>Save product</button>

      <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          />
    </div>
  )
}

export default EditProduct

