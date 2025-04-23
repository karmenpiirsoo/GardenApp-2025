import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function MaintainProducts() {


  const [products, setProducts] = useState([])
  const url = "https://garden-app-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  useEffect(() => {
      fetch(url)
      .then(res => res.json()) 
      .then(json => setProducts(json || [])) 
    }, []);


  function remove(index) {
    products.splice(index, 1);
  setProducts(products.slice())
  fetch(url, {method: "PUT", body: JSON.stringify(products)})
  }
  
  return (
    <div>
       <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Delete</th>
              <th>Edit product</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) =>
            <tr key={product.title}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}€</td>
              <td>{product.description}</td>
              <td><img key={product.image} className='image' src={product.image} alt="" /></td>
              <td><button onClick={() => remove(index)}>X</button></td>
              <td>
              <Link to={"/admin/edit-product/" + product.id}>
              <button>Edit</button>
              </Link>
              </td>
            </tr>)}
          </tbody>
        </table>
    </div>
  )
}

export default MaintainProducts
