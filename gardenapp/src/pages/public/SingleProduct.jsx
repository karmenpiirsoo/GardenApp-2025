import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {

  const [products, setProducts] = useState([])
  const url = "https://garden-app-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json"

  const {index} = useParams() 
  const found = products.find(product => product.id === Number(index))

    useEffect(() => {
        fetch(url) 
        .then(res => res.json())
        .then(json => setProducts(json || [])) 
      }, []);

      if (products.length === 0)
        {return <div>Loading ...</div>}  

      if (found === undefined)
        {return <div>Product not found ...</div>}



  return (
    <div>
      <br />
      <div>{found.title}</div>
     <br />
      <div><img className='image' src={found.image} alt="" /></div>
      <br />
      <div>{found.price}</div>
     <br />
      <div>{found.description}</div><br /><br /><br />
    </div>
  )
}

export default SingleProduct
